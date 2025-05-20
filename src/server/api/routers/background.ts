import { z } from "zod";
import { eq } from "drizzle-orm";
import { desc } from "drizzle-orm"; 

import { createTRPCRouter, protectedProcedure, adminProcedure } from "~/server/api/trpc";
import { backgrounds, users } from "~/server/db/schema";

/* ───────── Zod schema for the form ───────── */
const BackgroundInput = z.object({
  prenomHrp: z.string().min(1),
  ageHrp: z.coerce.number().int().nonnegative(),
  experienceHrp: z.coerce.number().int().nonnegative(),
  presentationHrp: z.string().optional(),

  prenomRp: z.string().min(1),
  nomRp: z.string().min(1),
  ageRp: z.coerce.number().int().nonnegative(),
  typeRp: z.enum(["Légal", "Illégal"]),
  backgroundRp: z.string().optional(),
});

/* ───────── Router ───────── */
export const backgroundRouter = createTRPCRouter({
  /**
   * POST /api/trpc/background.submit
   * Upserts the background and flips the user status
   */
  submit: protectedProcedure
    .input(BackgroundInput)
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;                  // came from createTRPCContext
      const { user } = ctx.session;        // protectedProcedure guarantees it

      await db.transaction(async (tx) => {
        /* upsert background row */
        await tx
          .insert(backgrounds)
          .values({ userId: user.id, ...input })
          .onConflictDoUpdate({
            target: backgrounds.userId,
            set: { ...input, updatedAt: new Date() },
          });

        /* flip status to “waiting for review” */
        await tx
          .update(users)
          .set({ status: "WHITELIST_PENDING" })
          .where(eq(users.id, user.id));
      });

      return { ok: true };
    }),

  /**
   * GET /api/trpc/background.status
   * Returns the current step for the logged-in user
   */
  status: protectedProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    const { user } = ctx.session;

    const row = (
      await db
        .select({ status: users.status })
        .from(users)
        .where(eq(users.id, user.id))
        .limit(1)
    )[0];

    return { status: row?.status ?? "BACKGROUND_PENDING" };
  }),

  /**
   * GET /api/trpc/background.all
   * Staff listing (everyone’s backgrounds)
   */
  all: adminProcedure.query(async ({ ctx }) => {
    const rows = await ctx.db
      .select({
        /* meta */
        id: backgrounds.id,
        createdAt: backgrounds.createdAt,
        typeRp: backgrounds.typeRp,
  
        /* join */
        userName: users.name,
        userEmail: users.email,
  
        /* HRP */
        prenomHrp: backgrounds.prenomHrp,
        ageHrp: backgrounds.ageHrp,
        experienceHrp: backgrounds.experienceHrp,
        presentationHrp: backgrounds.presentationHrp,
  
        /* RP */
        prenomRp: backgrounds.prenomRp,
        nomRp: backgrounds.nomRp,
        ageRp: backgrounds.ageRp,
        backgroundRp: backgrounds.backgroundRp,
      })
      .from(backgrounds)
      .leftJoin(users, eq(backgrounds.userId, users.id))
      .orderBy(desc(backgrounds.createdAt));
  
    return rows.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
      typeRp: r.typeRp ?? "",
    }));
  }),
});

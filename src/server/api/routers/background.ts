import axios from 'axios';
import { z } from "zod";
import { eq } from "drizzle-orm";
import { desc } from "drizzle-orm"; 
import { env } from "~/env";

import { createTRPCRouter, protectedProcedure, adminProcedure } from "~/server/api/trpc";
import { backgrounds, users, accounts } from "~/server/db/schema";

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

          const account = await tx
          .select({ providerAccountId: accounts.providerAccountId })
          .from(accounts)
          .where(eq(accounts.userId, user.id))
          .limit(1);

          const discordId = account[0]?.providerAccountId;
          if (discordId) {
            try {
              const url = `${env.DISCORD_API_BASE_URL}/guilds/${env.GUILD_ID}/members/${discordId}/roles/${env.WL_ROLE_ID}`;
              await axios.put(url, null, {
                headers: {
                  Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
                  'Content-Type': 'application/json',
                },
              });
              console.log(`Role assigned successfully to Discord user ID: ${discordId}`);
              if (env.MODE_PREOPEN == "True") {
                // Remove NWL_ROLE_ID
                const removeUrl = `${env.DISCORD_API_BASE_URL}/guilds/${env.GUILD_ID}/members/${discordId}/roles/${env.NWL_ROLE_ID}`;
                await axios.delete(removeUrl, {
                  headers: {
                    Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
                    'Content-Type': 'application/json',
                  },
                });
                console.log(`Role removed successfully from Discord user ID: ${discordId}`);
              }
            } catch (error) {
              if (axios.isAxiosError(error) && error.response) {
                console.error(`Error assigning role: ${error.response.status} - ${String(error.response.data)}`);
              } else {
                console.error(`Error assigning role: ${String(error)}`);
              }
            }
          }
      });

      return { ok: true };
    }),

  /**
   * GET /api/trpc/server.joined.status
   * Returns if the user has joined the Discord server or not
   */
  joined_guild : protectedProcedure.query(async ({ ctx }) => {
    const { db } = ctx;
    const { user } = ctx.session;
  
    // Retrieve the user's Discord ID from the accounts table
    const account = await db
      .select({ providerAccountId: accounts.providerAccountId })
      .from(accounts)
      .where(eq(accounts.userId, user.id))
      .limit(1);
  
    const discordId = account[0]?.providerAccountId;
  
    if (!discordId) {
      return { joined: false };
    }
  
    try {
      // Attempt to fetch the guild member
      const url = `${env.DISCORD_API_BASE_URL}/guilds/${env.GUILD_ID}/members/${discordId}`;
      await axios.get(url, {
        headers: {
          Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
      });
      // If successful, the user is a member of the guild
      console.log("user is in server");
      return { joined: true };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        // User is not a member of the guild
        console.log("user is not in server");
        return { joined: false };
      } else {
        // Handle other errors
        console.error('Error checking guild membership:', error);
        return { joined: false };
      }
    }
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

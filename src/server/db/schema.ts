import { relations, sql } from "drizzle-orm";
import { index, primaryKey, sqliteTableCreator } from "drizzle-orm/sqlite-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `the-return_${name}`);


/* ──────────── ROLE & STATUS ENUMS ──────────── */
export const userRoles   = ["USER", "ADMIN"] as const;
export type  UserRole    = (typeof userRoles)[number];

export const userStatuses = ["BACKGROUND_PENDING", "WHITELIST_PENDING"] as const;
export type  UserStatus   = (typeof userStatuses)[number];


/* ----------------- Posts -------------- */
export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }),
    createdById: d
      .text({ length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("created_by_idx").on(t.createdById),
    index("name_idx").on(t.name),
  ],
);
/* ----------------- /Posts -------------- */


/* ----------------- Users -------------- */
export const users = createTable("user", (d) => ({
  id: d.text({ length: 255 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: d.text({ length: 255 }),
  email: d.text({ length: 255 }).notNull(),
  emailVerified: d.integer({ mode: "timestamp" }).default(sql`(unixepoch())`),
  image: d.text({ length: 255 }),

  /* NEW — role */
  role: d
    .text({ enum: userRoles })
    .$type<UserRole>()
    .notNull()
    .default("USER"),

  /* existing status column */
  status: d
    .text({ enum: userStatuses })
    .$type<UserStatus>()
    .notNull()
    .default("BACKGROUND_PENDING"),
}));
/* ----------------- /Users -------------- */


/* ----------------- Backgrounds -------------- */
export const backgrounds = createTable("background", (d) => ({
  id: d.integer().primaryKey({ autoIncrement: true }),
  userId: d
    .text({ length: 255 })
    .notNull()
    .unique()
    .references(() => users.id),

  /* HRP */
  prenomHrp: d.text(),
  ageHrp: d.integer(),
  experienceHrp: d.integer(),
  presentationHrp: d.text(),

  /* RP */
  prenomRp: d.text(),
  nomRp: d.text(),
  ageRp: d.integer(),
  typeRp: d.text(),
  backgroundRp: d.text(),

  createdAt: d.integer({ mode: "timestamp" }).default(sql`(unixepoch())`).notNull(),
  updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
}));
/* ----------------- /Backgrounds -------------- */


/* ----------------- Accounts -------------- */
export const accounts = createTable(
  "account",
  (d) => ({
    userId: d
      .text({ length: 255 })
      .notNull()
      .references(() => users.id),
    type: d.text({ length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: d.text({ length: 255 }).notNull(),
    providerAccountId: d.text({ length: 255 }).notNull(),
    refresh_token: d.text(),
    access_token: d.text(),
    expires_at: d.integer(),
    token_type: d.text({ length: 255 }),
    scope: d.text({ length: 255 }),
    id_token: d.text(),
    session_state: d.text({ length: 255 }),
  }),
  (t) => [
    primaryKey({
      columns: [t.provider, t.providerAccountId],
    }),
    index("account_user_id_idx").on(t.userId),
  ],
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));
/* ----------------- /Accounts -------------- */


/* ----------------- Sessions -------------- */
export const sessions = createTable(
  "session",
  (d) => ({
    sessionToken: d.text({ length: 255 }).notNull().primaryKey(),
    userId: d
      .text({ length: 255 })
      .notNull()
      .references(() => users.id),
    expires: d.integer({ mode: "timestamp" }).notNull(),
  }),
  (t) => [index("session_userId_idx").on(t.userId)],
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  (d) => ({
    identifier: d.text({ length: 255 }).notNull(),
    token: d.text({ length: 255 }).notNull(),
    expires: d.integer({ mode: "timestamp" }).notNull(),
  }),
  (t) => [primaryKey({ columns: [t.identifier, t.token] })],
);
/* ----------------- /Sessions -------------- */

export const usersRelations = relations(users, ({ many, one }) => ({
  accounts: many(accounts),
  background: one(backgrounds),          // ② NEW
}));

export const backgroundsRelations = relations(backgrounds, ({ one }) => ({
  user: one(users, { fields: [backgrounds.userId], references: [users.id] }),
}));
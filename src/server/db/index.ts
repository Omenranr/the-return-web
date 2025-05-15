/**
 * Drizzle + libSQL connection helper
 * ---------------------------------
 *  – Marked as **server‑only** so the file can never be bundled
 *    into a Client Component.
 *  – Keeps a single connection alive in dev (HMR) just like before.
 */

import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development so that a new one
 * isn’t created on every Hot Module Replacement update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

export const client =
  globalForDb.client ??
  createClient({
    url: env.DATABASE_URL,
    // If you use an auth token with libSQL / Turso:
    authToken: env.DATABASE_AUTH_TOKEN,
  });

if (env.NODE_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle(client, { schema });
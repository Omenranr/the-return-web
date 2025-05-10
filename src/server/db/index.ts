import "server-only";

import { drizzle as drizzleSqlite } from "drizzle-orm/libsql";
import { drizzle as drizzlePg } from "drizzle-orm/postgres-js";

import { createClient as createLibsqlClient } from "@libsql/client";
import postgres from "postgres";

import { env } from "~/env";
import * as schema from "./schema";

/* ——— keep a dev‑time cache for SQLite HMR ——— */
const g = globalThis as unknown as { client?: ReturnType<typeof createLibsqlClient> };

export const db =
  process.env.VERCEL              // ✅ running on Vercel ➜ Postgres/Supabase
    ? (() => {
        const pg = postgres(env.DATABASE_URL, {
          ssl: "require",         // Supabase needs SSL
        });
        return drizzlePg(pg, { schema });
      })()
    : (() => {                    // 🏠 local dev ➜ SQLite
        const client =
          g.client ??
          createLibsqlClient({
            url: env.DATABASE_URL, // file:./db.sqlite
          });
        if (env.NODE_ENV !== "production") g.client = client;
        return drizzleSqlite(client, { schema });
      })();

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    AUTH_DISCORD_ID: z.string(),
    DATABASE_AUTH_TOKEN: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
    MODE_PREOPEN: z.string(),
    WL_ROLE_ID: z.string(),
    NWL_ROLE_ID: z.string(),
    GUILD_ID: z.string(),
    DISCORD_API_BASE_URL: z.string(),
    DISCORD_BOT_TOKEN: z.string(),
    DATABASE_URL: z.string().url(),

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    MODE_PREOPEN: process.env.MODE_PREOPEN,
    WL_ROLE_ID: process.env.WL_ROLE_ID,
    NWL_ROLE_ID: process.env.NWL_ROLE_ID,
    GUILD_ID: process.env.GUILD_ID,
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_API_BASE_URL: process.env.DISCORD_API_BASE_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

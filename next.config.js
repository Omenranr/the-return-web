/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["cdn.discordapp.com"],        // ← allow Discord avatars
    // If you ever need stricter patterns:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.discordapp.com",
    //     pathname: "/avatars/**",
    //   },
    // ],
  },
};

export default config;

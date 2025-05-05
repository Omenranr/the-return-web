import NextAuth from "next-auth";
import { cache } from "react";
import { authConfig, providerMap } from "./config"; // ⬅ add providerMap

const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth(authConfig);

const auth = cache(uncachedAuth);

/* ⬅ providerMap travels with the other helpers */
export { auth, handlers, signIn, signOut, providerMap };

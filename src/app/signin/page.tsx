import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import Image from "next/image";
import Background from '../_components/Background';

import { signIn } from "~/server/auth";

const SIGNIN_ERROR_URL = "/error";


export default async function SignInPage({
  searchParams,
}: {
  // 1.  **only one variant** (Promise)
  searchParams: Promise<{ callbackUrl?: string }>
}) {
  // 2.  still `await` because it’s a Promise
  const { callbackUrl } = await searchParams
  const redirectTo = callbackUrl ?? "/dashboard"

  // ── server action ────────────────────────────────────────────────
  async function handleDiscordSignIn() {
    "use server";
    try {
      await signIn("discord", { redirectTo });
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
      }
      throw error;
    }
  }

  // ── UI ───────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100/50 px-4 py-12">
      <Background />
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
        {/* Text logo */}
        <div className="flex justify-center">
          <span className="select-none text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            The Return
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="text-sm text-gray-600">
            Welcome back! Please sign in with Discord to continue
          </p>
        </div>

        {/* Discord sign‑in button */}
        <form action={handleDiscordSignIn}>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
          >
            {/* Optional small Discord icon (place /public/discord.svg) */}
            <Image src="/discord.svg" alt="" width={18} height={18} />
            <span>Continue with Discord</span>
          </button>
        </form>
      </div>
    </div>
  );
}

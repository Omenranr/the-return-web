import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import Image from "next/image";

import { signOut } from "~/server/auth";

const SIGNOUT_ERROR_URL = "/error";

export default async function SignOutPage({
  searchParams,
}: {
  // Next.js ≥ 15 requires awaiting searchParams before using it
  searchParams:
    | { callbackUrl?: string }
    | Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  const redirectTo = callbackUrl ?? "/";

  /* --- server action ----------------------------------------- */
  async function handleSignOut() {
    "use server";
    try {
      await signOut({ redirectTo });
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`${SIGNOUT_ERROR_URL}?error=${error.type}`);
      }
      throw error;
    }
  }

  /* --- UI ----------------------------------------------------- */
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg">
        {/* Text logo, same style as /signin + navbar */}
        <div className="flex justify-center">
          <span className="select-none text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            DHSense
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Sign out
          </h2>
          <p className="text-sm text-gray-600">
            Are you sure you want to sign out?
          </p>
        </div>

        {/* Sign-out button */}
        <form action={handleSignOut}>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
          >
            {/* optional small icon */}
            <Image src="/discord.svg" alt="" width={18} height={18} />
            <span>Sign out</span>
          </button>
        </form>
      </div>
    </div>
  );
}

import "~/styles/globals.css";
import { auth } from "~/server/auth";
import Providers from "./Providers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}

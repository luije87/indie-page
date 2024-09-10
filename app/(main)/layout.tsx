import "@/app/globals.css";
import { SubmitButton } from "@/components/ui/submit-button";
import { APPLICATION_NAME } from "@/config";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { createClient } from "@/utils/supabase/server";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ship it Quick",
  description: "The fastest way to ship your projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <div className="navbar bg-base-100 mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-2xl">
            {APPLICATION_NAME}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="gap-5 flex items-center">
            <li className="hover:link">
              <a
                target="_blank"
                href="https://github.com/luije87/ship-it-quick"
                className="hover:link flex items-center justify-center gap-1"
              >
                Github
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </li>
            <li className="hover:link">
              <Link href="/pricing" className="hover:link">
                Pricing
              </Link>
            </li>
            <li className="hover:link">
              <Link href="/dashboard" className="hover:link">
                Dashboard
              </Link>
            </li>
            <li>
              {user ? (
                <>
                  <form>
                    <SubmitButton
                      pendingText="Logging out..."
                      formAction={signOutAction}
                      className="btn "
                    >
                      Logout
                    </SubmitButton>
                  </form>
                </>
              ) : (
                <Link
                  href="/sign-in"
                  className="hover:link flex items-center justify-center gap-1"
                >
                  Login
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              )}
            </li>
          </ul>
          <ul></ul>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

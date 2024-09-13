import "@/app/globals.css";
import Link from "next/link";
import DeployButton from "@/components/ui/deploy-button";
import { UserProvider } from "../context/provider";
import ViewLink from "@/components/ui/view-link";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard for the user",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="max-w-xl mx-4 sm:mx-auto mt-8">
        <nav>
          <div className="flex flex-row items-center">
            <div className="flex flex-1 gap-4">
              <Link className="hover:link" href="/dashboard">
                page
              </Link>
              <Link className="hover:link" href="/dashboard/settings">
                settings
              </Link>
              <ViewLink />
            </div>
            <DeployButton />
          </div>
        </nav>

        <main className="my-10">{children}</main>
      </div>
    </UserProvider>
  );
}

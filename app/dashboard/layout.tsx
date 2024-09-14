import "@/app/globals.css";
import Link from "next/link";
import DeployButton from "@/components/ui/deploy-button";
import { UserProvider } from "../context/provider";
import ViewLink from "@/components/ui/view-link";
import NavBar from "@/components/ui/nav-bar";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard for the user",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <div className="max-w-xl mx-4 sm:mx-auto mt-8">
        <NavBar />
        <main className="my-10">{children}</main>
      </div>
    </UserProvider>
  );
}

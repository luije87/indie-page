"use client";

import Link from "next/link";
import ViewLink from "./view-link";
import DeployButton from "./deploy-button";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", name: "page" },
  { href: "/dashboard/settings", name: "settings" },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <nav>
      <div className="flex flex-row items-center">
        <div className="flex flex-1 gap-4">
          {links.map(({ href, name }) => (
            <Link
              key={href}
              className={cn("hover:link", path === href ? "link" : "")}
              href={href}
            >
              {name}
            </Link>
          ))}
          <ViewLink />
        </div>
        <DeployButton />
      </div>
    </nav>
  );
}

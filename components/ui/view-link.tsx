"use client";
import { UserContext } from "@/app/context/provider";
import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";

export default function ViewLink() {
  const { user } = useContext(UserContext);
  return (
    <a
      className="hover:link flex items-center"
      href={`/${user.slug}`}
      target="blank"
    >
      view
      <ArrowUpRightIcon className="w-4 h-4 ml-2" />
    </a>
  );
}

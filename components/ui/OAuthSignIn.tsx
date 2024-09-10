"use client";

import { signInWithOAuth } from "@/utils/auth-helpers/client";
import { useState } from "react";
import Github from "./Github";
import Google from "./Google";
import { type Provider } from "@supabase/supabase-js";

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: JSX.Element;
};

export default function Example() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <Github />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <Google />,
    },
    /* Add desired OAuth providers here */
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await signInWithOAuth(e);
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="flex justify-between gap-4">
        {oAuthProviders.map((provider) => (
          <form
            onSubmit={(e) => handleSubmit(e)}
            key={provider.name}
            className="w-full"
          >
            <input type="hidden" name="provider" value={provider.name} />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              {provider.icon}
              <span className="text-sm font-semibold leading-6">
                {provider.displayName}
              </span>
            </button>
          </form>
        ))}
      </div>
    </>
  );
}

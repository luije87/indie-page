"use client";
import { createClient } from "@/utils/supabase/client";
import { createContext, SetStateAction, useEffect, useState } from "react";

export const UserContext = createContext({
  user: {
    name: "World1",
    location: "Earth",
    bio: "I am a software engineer",
    links: ["github;https://github.com", "", ""],
    slug: "world",
  },
  setUser: (
    value: SetStateAction<{
      name: string;
      location: string;
      bio: string;
      links: string[];
      slug: string;
    }>
  ) => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    async function fetchUser() {
      const supabase = createClient();
      const { data } = await supabase
        .from("users")
        .select("full_name")
        .eq("id", "f0490d7e-5282-4b07-8816-04d021ebe80b")
        .single();
      const user = JSON.parse(data?.full_name);
      setUser(user);
    }

    fetchUser();
  }, []);

  const [user, setUser] = useState(null);

  console.log(user);

  return (
    user && (
      // @ts-ignore
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    )
  );
}

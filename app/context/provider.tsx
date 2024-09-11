"use client";
import { createClient } from "@/utils/supabase/client";
import { createContext, SetStateAction, useEffect, useState } from "react";

export const UserContext = createContext({
  user: {
    name: "World",
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
      const id = (await supabase.auth.getSession()).data.session?.user.id;

      const { data, error } = await supabase
        .from("settings")
        .select("payload, slug")
        .eq("id", id)
        .single();

      if (data && data.payload !== null) {
        const user = JSON.parse(data?.payload);
        setUser({ ...user, slug: data.slug });
      } else {
        const temp = {
          name: "World",
          location: "Earth",
          bio: "I am a software engineer",
          links: ["github;https://github.com", "", ""],
          slug: "world",
        };
        setUser(temp as any);
      }
    }

    fetchUser();
  }, []);

  const [user, setUser] = useState(null);

  return (
    user && (
      // @ts-ignore
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    )
  );
}

"use client";
import { createContext, SetStateAction, useState } from "react";

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
  const [user, setUser] = useState({
    name: "World",
    location: "Earth",
    bio: "I am a software engineer",
    links: ["github;https://github.com", "", ""],
    slug: "world",
  });
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

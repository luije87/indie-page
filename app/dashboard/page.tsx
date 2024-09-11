"use client";
import { SubmitButton } from "@/components/ui/submit-button";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

type User = {
  name: string;
  location: string;
  bio: string;
  links: string[];
  slug: string;
};

export default function Page() {
  const [user, setUser] = useState<User>({
    name: "",
    location: "",
    bio: "",
    links: ["", "", ""],
    slug: "",
  });
  return (
    <div className="max-w-xl mx-4 lg:mx-auto">
      <div className="flex flex-col gap-4">
        {/* <p className="mt-4 text-gray-600">Welcome to the admin page!</p> */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">what is your name?</span>
          </div>
          <input
            value={user.name}
            name="name"
            maxLength={50}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            type="text"
            placeholder="type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">where are you located?</span>
          </div>
          <input
            value={user.location}
            name="location"
            maxLength={50}
            onChange={(e) => setUser({ ...user, location: e.target.value })}
            type="text"
            placeholder="bali, indonesia"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">write cool stuffs about you</span>
          </div>
          <textarea
            maxLength={200}
            className="textarea textarea-bordered"
            placeholder="bio"
            onChange={(e) => setUser({ ...user, bio: e.target.value })}
            value={user.bio}
            rows={5}
          ></textarea>
        </label>

        <button className="btn btn-neutral">
          rewrite
          <SparklesIcon className="w-6 h-6 ml-2" />
        </button>
        <div className="divider">links</div>
        <label className="form-control w-full">
          <input
            value={user.links[0]}
            name="link0"
            maxLength={50}
            onChange={(e) =>
              setUser({
                ...user,
                links: [e.target.value, user.links[1], user.links[2]],
              })
            }
            type="text"
            placeholder="startup;https://ship-it-quick.vercel.app/"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <input
            value={user.links[1]}
            name="link1"
            maxLength={50}
            onChange={(e) =>
              setUser({
                ...user,
                links: [user.links[0], e.target.value, user.links[2]],
              })
            }
            type="text"
            placeholder="github;https://github.com/luije87"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <input
            value={user.links[2]}
            name="link2"
            maxLength={50}
            onChange={(e) =>
              setUser({
                ...user,
                links: [user.links[0], user.links[1], e.target.value],
              })
            }
            type="text"
            placeholder="twitter;https://x.com/luije87"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
  );
}

"use client";
import RewriteButton from "@/components/ui/rewrite-button";
import { useContext } from "react";
import { UserContext } from "../context/provider";
import { cn } from "@/utils/cn";

const avatars = ["", "👾", "🤖", "👽", "🚀", "🛸"];

export default function Page() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="max-w-xl mx-0 sm:mx-0 lg:mx-auto">
      <div className="flex flex-col gap-4">
        {/* <p className="mt-4 text-gray-600">Welcome to the admin page!</p> */}
        <div className="flex gap-3 justify-between">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="avatar hover:cursor-pointer"
              onClick={() => setUser({ ...user, avatar: avatar })}
            >
              <div
                className={cn(
                  "w-12 sm:w-16 rounded-full border text-center content-center hover:border-4",
                  user?.avatar === avatar ? "border-4 border-red-300" : ""
                )}
              >
                <p className="text-3xl">{avatar}</p>
              </div>
            </div>
          ))}
        </div>
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
            autoFocus
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">where are you located?</span>
          </div>
          <input
            value={user.location}
            onChange={(e) => setUser({ ...user, location: e.target.value })}
            name="location"
            maxLength={50}
            type="text"
            placeholder="bali, indonesia"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">write cool stuff about you</span>
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

        <RewriteButton />
        <div className="divider">links</div>
        <label className="form-control w-full">
          <input
            value={user.links[0]}
            onChange={(e) => {
              const links = [...user.links];
              links[0] = e.target.value;
              setUser({ ...user, links });
            }}
            name="link0"
            maxLength={300}
            type="text"
            placeholder="github;https://github.com/luije87"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <input
            value={user.links[1]}
            onChange={(e) => {
              const links = [...user.links];
              links[1] = e.target.value;
              setUser({ ...user, links });
            }}
            name="link1"
            maxLength={300}
            type="text"
            placeholder="startup;https://ship-it-quick.vercel.app/"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <input
            value={user.links[2]}
            onChange={(e) => {
              const links = [...user.links];
              links[2] = e.target.value;
              setUser({ ...user, links });
            }}
            name="link2"
            maxLength={300}
            type="text"
            placeholder="twitter;https://x.com/luije87"
            className="input input-bordered w-full"
          />
        </label>
      </div>
    </div>
  );
}

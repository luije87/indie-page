import { SubmitButton } from "@/components/ui/submit-button";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-xl mx-4 lg:mx-auto">
      <div className="flex flex-col gap-4">
        {/* <p className="mt-4 text-gray-600">Welcome to the admin page!</p> */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">what is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">where are you located?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">write cool stuffs about you</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="bio"
            rows={5}
          ></textarea>
        </label>

        <button className="btn btn-neutral">
          Rewrite bio using AI
          <SparklesIcon className="w-6 h-6 ml-2" />
        </button>
        <p className="mt-4 text-gray-600">links</p>
      </div>
    </div>
  );
}

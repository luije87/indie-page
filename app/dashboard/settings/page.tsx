import { SubmitButton } from "@/components/ui/submit-button";
import { signOutAction } from "@/utils/auth-helpers/actions";

export default function Home() {
  return (
    <>
      <label className="form-control w-full gap-3">
        <div className="label">
          <span className="label-text">user name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
      <button className="btn btn-neutral mt-3">Update</button>
      <div className="divider"></div>
      <div className="flex flex-row justify-end">
        <form>
          <SubmitButton
            pendingText="Logging out..."
            formAction={signOutAction}
            className="btn btn-ghost"
          >
            Log out
          </SubmitButton>
        </form>
      </div>
    </>
  );
}

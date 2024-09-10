import { FormMessage, Message } from "@/components/ui/form-message";
import { SubmitButton } from "@/components/ui/submit-button";
import { forgotPasswordAction } from "@/utils/auth-helpers/actions";
import Link from "next/link";

export default function Example({ searchParams }: { searchParams: Message }) {
  return (
    <>
      <form className="flex-1 flex flex-col">
        <h1 className="text-2xl font-medium">Reset Password</h1>
        <p className="text-sm text-secondary-foreground">
          Already have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-in"
          >
            Sign in
          </Link>
        </p>
        <FormMessage message={searchParams} />
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-3s">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              autoComplete="email"
              autoFocus
            />
          </label>
          <SubmitButton
            pendingText="Resetting Password ..."
            formAction={forgotPasswordAction}
            className="btn mt-3"
          >
            Reset Password
          </SubmitButton>
        </div>
      </form>
    </>
  );
}

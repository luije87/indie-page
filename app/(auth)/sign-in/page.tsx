import { signInAction } from "@/utils/auth-helpers/actions";
import { FormMessage, Message } from "@/components/ui/form-message";
import OAuthSignIn from "@/components/ui/OAuthSignIn";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/submit-button";

export default function Example({ searchParams }: { searchParams: Message }) {
  return (
    <>
      <form className="flex-1 flex flex-col min-w-sm">
        <h1 className="text-2xl font-medium">Login</h1>
        <p className="text-sm text-foreground">
          Do not have an account?{" "}
          <Link
            className="text-foreground font-medium underline"
            href="/sign-up"
          >
            Register
          </Link>
        </p>
        <FormMessage message={searchParams} />
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-3">
          <label className="form-control max-w-full" htmlFor="email">
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
          <label className="form-control max-w-full" htmlFor="password">
            <div className="label">
              <span className="label-text">Password</span>
              <span className="label-text-alt">
                <Link
                  className="text-xs text-foreground underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </span>
            </div>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="input input-bordered"
              required
              autoComplete="current-password"
            />
          </label>
          <SubmitButton
            pendingText="Logging in..."
            formAction={signInAction}
            className="btn mt-3"
          >
            Login
          </SubmitButton>
        </div>
      </form>
      <OAuthSignIn />
    </>
  );
}

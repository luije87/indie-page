import { signUpAction } from "@/utils/auth-helpers/actions";
import { FormMessage, Message } from "@/components/ui/form-message";
import Link from "next/link";
import { SubmitButton } from "@/components/ui/submit-button";

export default function Example({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col">
      <h1 className="text-2xl font-medium">Register</h1>
      <p className="text-sm text text-foreground">
        Already have an account?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-in">
          Login
        </Link>
      </p>
      <FormMessage message={searchParams} />
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-3">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            name="email"
            type="text"
            placeholder="you@example.com"
            className="input input-bordered"
            required
            autoFocus
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            name="password"
            type="password"
            placeholder="Your password"
            className="input input-bordered"
            required
          />
        </label>
        <SubmitButton
          pendingText="Registering..."
          formAction={signUpAction}
          className="btn mt-3"
        >
          Register
        </SubmitButton>
      </div>
    </form>
  );
}

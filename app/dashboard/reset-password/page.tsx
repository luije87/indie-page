import { FormMessage, Message } from "@/components/ui/form-message";
import { resetPasswordAction } from "@/utils/auth-helpers/actions";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <div className="flex max-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
          <h1 className="text-2xl font-medium">Reset password</h1>
          <p className="text-sm text-foreground/60">
            Please enter your new password below.
          </p>
          <FormMessage message={searchParams} />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">New password</span>
            </div>
            <input
              name="password"
              type="password"
              placeholder="New password"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Confirm password</span>
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <button
            className="btn max-w-xs mt-3"
            type="submit"
            formAction={resetPasswordAction}
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}

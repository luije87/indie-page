import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full max-w-5xl items-center justify-center mx-auto">
      <h2 className="font-bold text-2xl mb-4">
        This is a protected route. Your user details
      </h2>
      <div className="mockup-code">
        <pre data-prefix="">
          <code>{JSON.stringify(user, null, 6)}</code>
        </pre>
      </div>
    </div>
  );
}

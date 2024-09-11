"use client";
import { UserContext } from "@/app/context/provider";
import { SubmitButton } from "@/components/ui/submit-button";
import { signOutAction } from "@/utils/auth-helpers/actions";
import { createClient } from "@/utils/supabase/client";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const [slug, setSlug] = useState(user.slug);
  const supabase = createClient();

  async function save() {
    // check if same slug exists
    const { data } = await supabase
      .from("settings")
      .select("slug")
      .eq("slug", slug)
      .single();

    if (data) {
      alert("Slug already exists");
      return;
    }

    const id = (await supabase.auth.getSession()).data.session?.user.id;

    await supabase.from("settings").update({ slug: slug }).eq("id", id);

    setUser({ ...user, slug: slug });
  }
  return (
    <>
      <form>
        <label className="form-control w-full gap-3">
          <div className="label">
            <span className="label-text">slug</span>
          </div>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <SubmitButton
          formAction={save}
          pendingText="updating ..."
          className="btn btn-neutral mt-3"
        >
          update
        </SubmitButton>
      </form>

      <div className="divider"></div>
      <div className="flex flex-row justify-end">
        <form>
          <SubmitButton
            // disabled={slug === ""}
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

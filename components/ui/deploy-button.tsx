"use client";
import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { SubmitButton } from "./submit-button";
import { createClient } from "@/utils/supabase/client";
import { useContext } from "react";
import { UserContext } from "@/app/context/provider";

export default function DeployButton() {
  const { user } = useContext(UserContext);

  const deployAction = async () => {
    const supabase = createClient();
    const { data } = await supabase.auth.getSession();
    const id = data?.session?.user.id;

    const { error } = await supabase
      .from("users")
      .update({ full_name: JSON.stringify(user) })
      .eq("id", id);

    if (error) {
      alert("error deploying");
    }

    //@ts-ignore
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <>
      <form action="">
        <SubmitButton
          formAction={deployAction}
          pendingText="deploying ..."
          className="btn btn-warning mr-3"
        >
          deploy
        </SubmitButton>
      </form>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Lets go!</h3>
          <p className="py-4">
            Your indie page has been deployed successfully! You can now share
            it! 🚀
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-warning mr-3">continue editing</button>
              {/* if there is a button in form, it will close the modal */}
            </form>
            <a href="/luije" target="blank" className="btn">
              view my page
              <ArrowUpRightIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}

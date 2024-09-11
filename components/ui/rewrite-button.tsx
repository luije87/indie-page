"use client";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { SubmitButton } from "./submit-button";
import { useContext } from "react";
import { UserContext } from "@/app/context/provider";

export default function RewriteButton() {
  const { user, setUser } = useContext(UserContext);
  const rewriteAction = async () => {
    // sleep for 2 seconds
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    //@ts-ignore
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <form action="">
        <SubmitButton
          formAction={rewriteAction}
          pendingText="rewriting ..."
          className="btn btn-neutral"
        >
          rewrite
          <SparklesIcon className="w-3 h-3 ml-1" />
        </SubmitButton>
      </form>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg flex flex-row items-center">
            powered by AI
            <SparklesIcon className="w-3 h-3 ml-2" />
          </h3>
          <p className="py-4">
            Hi, I am Luije! I am a software engineer and I love building things
            for the web.
          </p>
          <div className="modal-action">
            <button
              onClick={() => {
                setUser({ ...user, name: "Luije" });
                //@ts-ignore
                document.getElementById("my_modal_1").close();
              }}
              className="btn btn-warning"
            >
              i love it
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">heck no!</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

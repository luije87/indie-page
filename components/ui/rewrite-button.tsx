"use client";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { SubmitButton } from "./submit-button";
import { useContext, useState } from "react";
import { UserContext } from "@/app/context/provider";

export default function RewriteButton() {
  const { user, setUser } = useContext(UserContext);
  const [bio, setBio] = useState("");

  const rewriteAction = async () => {
    const request = new Request("/api/rewrite", {
      method: "POST",
      body: JSON.stringify({ bio: user.bio }),
    });

    const response = await fetch(request);

    if (!response.ok) {
      alert("error rewriting");
      return;
    }

    const json = await response.json();

    setBio(json.content);

    // sleep for 2 seconds
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 2000);
    // });
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
            Your new bio powered by AI
            <SparklesIcon className="w-3 h-3 ml-2" />
          </h3>
          <p className="py-4">{bio}</p>
          <div className="modal-action">
            <button
              onClick={() => {
                setUser({ ...user, bio: bio });
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

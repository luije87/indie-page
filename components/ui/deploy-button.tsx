"use client";
import { ArrowUpIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { SubmitButton } from "./submit-button";

export default function DeployButton() {
  const deployAction = async () => {
    // sleep for 2 seconds
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <button className="btn btn-warning">continue editing</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">
                view my page
                <ArrowUpRightIcon className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

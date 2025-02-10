import React from "react";

const RegisterDialog = () => {
  return (
    <dialog id="hero_mod" className="modal z-40">
      <div className="modal-box bg-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className=" p-8">Iframe content Here</div>
      </div>
    </dialog>
  );
};

export default RegisterDialog;

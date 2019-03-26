import { useState } from "react";
import useWires from "../../hooks/useWires";

export default function Note() {
  const { showNotes, toggleShowNotes } = useWires();

  return (
    <div className="static h-10 px-2 flex items-center bg-black text-white rounded mr-2">
      <button className={`flex block h-6 px-2 rounded-sm ${showNotes ? "bg-blue-500" : ""}`} onClick={toggleShowNotes}>
        <i className="far fa-comment-alt" style={{ transform: "translateY(0.1rem)" }} />
      </button>
    </div>
  );
}

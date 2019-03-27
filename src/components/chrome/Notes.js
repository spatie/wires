import useWires from "../../hooks/useWires";

export default function Note() {
  const { notes, showNotes, toggleShowNotes } = useWires();

  return (
    <div className="static h-10 px-2 flex items-center bg-black text-white rounded mr-2">
      <button className={`flex block h-6 px-2 rounded-sm ${showNotes ? "bg-blue-500" : ""}`} onClick={toggleShowNotes}>
        <i className="far fa-comment-alt" style={{ transform: "translateY(0.1rem)" }} />
      </button>
      {notes.length > 0 && !showNotes && (
        <div className="absolute z-10 top-0 left-0 w-6 h-6 -mt-2 -ml-2 grid place-items-center w-6 h-6 rounded-full bg-red-500 font-mono text-xs text-white">
          {notes.length}
        </div>
      )}
    </div>
  );
}

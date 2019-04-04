import useWires from "../../hooks/useWires";

export default function Note() {
  const { notes, showNotes, toggleShowNotes } = useWires();

  return (
    <>
      {notes.length > 0 && !showNotes && (
        <button
          onClick={toggleShowNotes}
          className="absolute z-10 top-0 left-0 w-6 h-6 -mt-3 -ml-3 grid place-items-center rounded-full font-mono leading-none text-xs text-white bg-red-500 text-xs
          "
        >
          {notes.length}
        </button>
      )}
    </>
  );
}

import useWires from "../../hooks/useWires";

export default function NotesPane() {
  const { notes, toggleShowNotes } = useWires();

  return (
    <div className="overflow-auto bg-gray-900 p-8 text-gray-300" style={{ width: "24rem" }}>
      {notes.length === 0 ? (
        <p>There aren't any notes visible on this page.</p>
      ) : (
        <ul>
          {notes.map((note, i) => (
            <li key={i} className="flex mb-6">
              <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-sm font-mono rounded-full mr-3 mt-1">
                {String.fromCharCode(i + 65)}
              </span>
              <p className="flex-1">{note}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={toggleShowNotes}
        className="absolute z-10 top-0 right-0 w-6 h-6 mt-2 mr-2 grid place-items-center rounded-full font-mono leading-none text-lg text-white bg-gray-800"
      >
        ×
      </button>
    </div>
  );
}

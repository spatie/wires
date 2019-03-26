export default function NotesPane({ notes }) {
  return (
    <div className="h-screen bg-gray-900 overflow-auto p-6 text-gray-300 font-mono text-sm" style={{ width: "24rem" }}>
      {notes.length === 0 ? (
        <p>There aren't any notes on this page.</p>
      ) : (
        <ul>
          {notes.map((note, i) => (
            <li key={i} className="flex mb-6">
              <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full mr-3">
                {String.fromCharCode(i + 65)}
              </span>
              <p className="flex-1">{note}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

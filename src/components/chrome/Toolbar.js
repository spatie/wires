import { useContext } from "react";
import Navigator from "./Navigator";
import useWires from "../../hooks/useWires";

export default function Toolbar({ pages = [] }) {
  const { notesHighlighted, toggleNotesHighlighted } = useWires();

  return (
    <div className="toolbar fixed flex pin-b pin-r m-2 font-mono">
      <div className="h-10 px-2 flex items-center bg-black text-white rounded mr-2 group">
        <button
          className={`flex block h-6 px-2 rounded-sm ${notesHighlighted ? "bg-blue" : "group-hover:bg-grey-darkest"}`}
          onClick={toggleNotesHighlighted}
        >
          <i className="far fa-comment-alt" style={{ transform: "translateY(0.1rem)" }} />
          <span className={`text-sm ml-2 group-hover:block ${!notesHighlighted && "hidden"}`}>Highlight notes</span>
        </button>
      </div>
      <Navigator pages={pages} />
      <style jsx>{`
        .toolbar :global(button:focus) {
          outline: none;
        }
      `}</style>
    </div>
  );
}

import Navigator from "./Navigator";
import Notes from "./Notes";
import useWires from "../../hooks/useWires";

export default function Toolbar() {
  const { withNotes } = useWires();

  return (
    <div className="toolbar fixed flex bottom-0 right-0 m-2 z-10">
      {withNotes && <Notes />}
      <Navigator />
      <style jsx>{`
        .toolbar :global(button:focus) {
          outline: none;
        }
      `}</style>
    </div>
  );
}

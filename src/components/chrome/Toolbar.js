import Navigator from "./Navigator";
import Notes from "./Notes";

export default function Toolbar() {
  return (
    <div className="toolbar fixed flex bottom-0 right-0 m-2">
      <Notes />
      <Navigator />
      <style jsx>{`
        .toolbar :global(button:focus) {
          outline: none;
        }
      `}</style>
    </div>
  );
}

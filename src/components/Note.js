import { useEffect } from "react";
import useWires from "../hooks/useWires";

export default function Note({ text, inline = false, children }) {
  const { showNotes, reconcileNotes } = useWires();

  useEffect(() => {
    reconcileNotes();

    return reconcileNotes;
  }, []);

  const Wrapper = inline ? "span" : "div";

  return (
    <Wrapper className={"contents relative " + (showNotes ? "noted" : "")} data-note={text}>
      {children}
      <style jsx>{`
        .noted:after {
          align-items: center;
          background: #f26668;
          border-radius: 1.5rem;
          color: white;
          content: attr(data-note-id);
          display: flex;
          font-weight: normal;
          font-style: regular;
          font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
          font-size: 0.875rem;
          height: 1.5rem;
          justify-content: center;
          position: absolute;
          right: -1rem;
          top: 0;
          width: 1.5rem;
          z-index: 100;
        }
      `}</style>
    </Wrapper>
  );
}

import { useEffect } from "react";
import useWires from "../hooks/useWires";

export default function Note({ text, children, show = true, style = {} }) {
  const { showNotes, reconcileNotes } = useWires();

  useEffect(() => {
    reconcileNotes();

    return reconcileNotes;
  }, []);

  if (!show) {
    return children;
  }

  return (
    <span className={"inline-block note " + (showNotes ? " is-visible" : "")} style={style} data-note={text}>
      {children}
      <style jsx>{`
        :global(.grid) > .note {
          display: contents;
        }

        .note.is-visible:after {
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
    </span>
  );
}

import classNames from "classnames";
import useWires from "../../hooks/useWires";

export default function Note({ text, children }) {
  const { notesHighlighted } = useWires();

  const highlightClassName = classNames("highlight", {
    "is-highlighted": notesHighlighted,
    "cursor-pointer": clickable
  });

  return (
    <>
      <div className={highlightClassName} ref={rootEl}>
        {children}
      </div>
      <div className="tooltip absolute bg-white font-mono text-xs border-3 border-blue-light p-4 z-50">{text}</div>
      <style jsx>{`
        .tooltip {
          display: none;
        }

        .highlight:hover + .tooltip {
          display: block;
        }

        .highlight:hover:after,
        .highlight.is-highlighted:after {
          content: "";
          display: block;
          position: absolute;
          top: -3px;
          right: -3px;
          bottom: -3px;
          left: -3px;
          background: rgba(52, 144, 220, 0.2);
          border: 3px solid #6cb2eb;
          pointer-events: none;
        }

        .tooltip {
          width: 300px;
          left: 50%;
          top: calc(100% + 6px);
          transform: translateX(-50%);
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </>
  );
}

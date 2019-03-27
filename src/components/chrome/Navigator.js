import Link from "next/link";
import { useEffect, useState } from "react";
import useWires from "../../hooks/useWires";

export default function Navigator() {
  const { path, pages } = useWires();
  const [showIndex, setShowIndex] = useState(false);

  function toggleShowIndex() {
    setShowIndex(!showIndex);
  }

  useEffect(() => {
    if (showIndex) {
      window.addEventListener("click", toggleShowIndex);
    } else {
      window.removeEventListener("click", toggleShowIndex);
    }

    return () => {
      window.removeEventListener("click", toggleShowIndex);
    };
  }, [showIndex, toggleShowIndex]);

  const currentPageIndex = pages.findIndex(page => {
    return page.split("?")[0] === path;
  });

  if (currentPageIndex === -1) {
    return null;
  }

  const hasPreviousPage = currentPageIndex > 0;
  const hasNextPage = currentPageIndex < pages.length - 1;

  return (
    <div
      className="h-10 p-2 rounded bg-black text-white font-mono flex items-center justify-center"
      onClick={e => e.stopPropagation()}
    >
      <Link prefetch href={hasPreviousPage ? pages[currentPageIndex - 1] : pages[currentPageIndex]}>
        <a className={`block bg-black h-6 px-2 rounded-sm ${hasPreviousPage ? null : "opacity-25"}`}>
          <i className="fas fa-chevron-left" style={{ transform: "translateY(0.1rem)" }} />
        </a>
      </Link>
      <button
        className={`block w-20 mx-2 rounded text-center ${showIndex ? "bg-blue-500" : ""}`}
        onClick={toggleShowIndex}
      >
        {currentPageIndex + 1} / {pages.length}
      </button>
      <Link prefetch href={hasNextPage ? pages[currentPageIndex + 1] : pages[currentPageIndex]}>
        <a className={`block bg-black h-6 px-2 rounded-sm ${hasNextPage ? null : "opacity-25"}`}>
          <i className="fas fa-chevron-right" style={{ transform: "translateY(0.1rem)" }} />
        </a>
      </Link>
      {showIndex && <NavigatorPanel pages={pages} currentPageIndex={currentPageIndex} />}
    </div>
  );
}

function NavigatorPanel({ pages, currentPageIndex }) {
  return (
    <div className="absolute right-0 mb-2 w-64 bg-black rounded p-4 text-xs" style={{ bottom: "2.5rem" }}>
      <ul>
        {pages.map((page, i) => (
          <li key={page}>
            <Link href={page}>
              <a className="block py-1">
                {i === currentPageIndex && (
                  <i className="fas fa-circle text-blue-500 w-3 -ml-3" style={{ transform: "scale(0.5)" }} />
                )}
                {page.split("?")[0]}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

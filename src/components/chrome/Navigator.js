import Link from "next/link";
import { useEffect, useState } from "react";
import useWires from "../../hooks/useWires";
import NavigatorIndex from "./NavigatorIndex";

export default function Navigator({ pages }) {
  const { path } = useWires();
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
      className="h-10 p-2 rounded bg-black text-white flex items-center justify-center"
      onClick={e => e.stopPropagation()}
    >
      <Link prefetch href={hasPreviousPage ? pages[currentPageIndex - 1] : pages[currentPageIndex]}>
        <a className={`block bg-grey-darkest h-6 px-2 rounded-sm ${hasPreviousPage ? null : "opacity-25"}`}>
          <i className="fas fa-chevron-left" style={{ transform: "translateY(0.1rem)" }} />
        </a>
      </Link>
      <button className="block w-24 text-center" onClick={toggleShowIndex}>
        {currentPageIndex + 1} / {pages.length}
      </button>
      <Link prefetch href={hasNextPage ? pages[currentPageIndex + 1] : pages[currentPageIndex]}>
        <a className={`block bg-grey-darkest h-6 px-2 rounded-sm ${hasNextPage ? null : "opacity-25"}`}>
          <i className="fas fa-chevron-right" style={{ transform: "translateY(0.1rem)" }} />
        </a>
      </Link>
      {showIndex && <NavigatorIndex pages={pages} currentPageIndex={currentPageIndex} onClose={toggleShowIndex} />}
    </div>
  );
}

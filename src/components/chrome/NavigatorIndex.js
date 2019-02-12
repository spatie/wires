import Link from "next/link";

export default function NavigatorIndex({ pages, currentPageIndex, onClose }) {
  return (
    <div className="absolute pin-r w-64 bg-grey-darkest rounded p-4 text-xs" style={{ bottom: "2.5rem" }}>
      <button className="absolute pin-t pin-r mt-2 mr-2 text-grey-dark" onClick={onClose}>
        <i className="fas fa-times" />
      </button>
      <ul>
        {pages.map((page, i) => (
          <li key={page}>
            <Link href={page}>
              <a className="block py-1">
                {i === currentPageIndex && (
                  <i className="fas fa-circle text-blue w-3 -ml-3" style={{ transform: "scale(0.5)" }} />
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

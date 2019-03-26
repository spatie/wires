import "../bootstrap";

import { useState } from "react";
import Head from "next/head";
import Toolbar from "./chrome/Toolbar";
import NotesPane from "./chrome/NotesPane";
import WiresContext from "../contexts/WiresContext";

export default function Wires({ pages = [], children, path }) {
  const [showNotes, setShowNotes] = useState(true);
  const [notes, setNotes] = useState([]);

  function toggleShowNotes() {
    setShowNotes(!showNotes);
  }

  function reconcileNotes() {
    window.requestAnimationFrame(() => {
      setNotes(() => {
        return Array.from(document.querySelectorAll("[data-note]")).map((el, i) => {
          el.setAttribute("data-note-id", String.fromCharCode(i + 65));

          return el.dataset.note;
        });
      });
    });
  }

  return (
    <WiresContext.Provider value={{ path, pages, notes, showNotes, toggleShowNotes, reconcileNotes }}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" />
      </Head>
      <div className="flex">
        <div className="flex-1">{children}</div>
        {showNotes ? <NotesPane notes={notes} /> : null}
      </div>
      <Toolbar />
    </WiresContext.Provider>
  );
}

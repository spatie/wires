import "../bootstrap";

import Head from "next/head";
import Toolbar from "./chrome/Toolbar";
import useToggle from "../hooks/useToggle";
import WiresContext from "../contexts/WiresContext";

export default function Wires({ pages = [], children, path }) {
  const [notesHighlighted, toggleNotesHighlighted] = useToggle(false);

  return (
    <WiresContext.Provider value={{ path, notesHighlighted, toggleNotesHighlighted }}>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" />
      </Head>
      {children}
      <Toolbar pages={pages} />
    </WiresContext.Provider>
  );
}

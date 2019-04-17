import '../bootstrap';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Toolbar from './chrome/Toolbar';
import NotesPane from './chrome/NotesPane';
import WiresContext from '../contexts/WiresContext';

export default function Wires({ pages = [], children, path, notes: withNotes = true }) {
    const [showNotes, setShowNotes] = useState(false);
    const [notes, setNotes] = useState([]);

    function toggleShowNotes() {
        setShowNotes(!showNotes);
    }

    useEffect(() => {
        let clickableTimeout = null;

        const clickableSelectors = ['.cursor-pointer', '.clickable', 'a:not([href="#"])', 'button']
            .map(selector => `[data-wires] ${selector}`)
            .join(', ');

        const clickableElements = Array.from(document.querySelectorAll(clickableSelectors));

        document.querySelector('[data-wires]').addEventListener('mousedown', e => {
            if (e.which && e.which === 3) {
                return;
            }

            const isClickable = !!e.target.closest(clickableSelectors);

            if (!isClickable) {
                clickableTimeout = window.setTimeout(() => {
                    if (window.getSelection().toString() != '') {
                        return;
                    }

                    clickableElements.forEach(el => {
                        el.style.outline = '4px solid #63b3ed';
                    });
                }, 500);
            }
        });

        document.querySelector('[data-wires]').addEventListener('mouseup', e => {
            clearTimeout(clickableTimeout);

            clickableElements.forEach(el => {
                el.style.outline = null;
            });
        });
    }, []);

    function reconcileNotes() {
        window.requestAnimationFrame(() => {
            setNotes(() => {
                return Array.from(document.querySelectorAll('[data-note]')).map((el, i) => {
                    el.setAttribute('data-note-id', String.fromCharCode(i + 65));

                    return el.dataset.note;
                });
            });
        });
    }

    return (
        <WiresContext.Provider
            value={{
                path,
                pages,
                withNotes,
                notes,
                showNotes,
                toggleShowNotes,
                reconcileNotes,
            }}
        >
            <Head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" />
            </Head>
            <div className="flex h-screen">
                <div className="flex-1 overflow-auto" data-wires>
                    {children}
                </div>
                {withNotes && showNotes ? <NotesPane /> : null}
            </div>
            <Toolbar />
        </WiresContext.Provider>
    );
}

'use client';

import { useEffect, useState } from 'react';

// Hilfsfunktion zur Umwandlung von 24h-Zeitangaben (z.B. "13:45") in 12h-Format (z.B. "1:45 p.m.")
function toAmPm(time24: string): string {
    const [hoursStr, minutes] = time24.split(':');
    let hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? 'p.m.' : 'a.m.';

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    return `${hours}:${minutes} ${ampm}`;
}


const content = {
    de: {
        title: 'Beglaubigungen',
        body: ({ vorlesungszeit, vorlesungsfreieZeit }: { vorlesungszeit: { start: string, end: string }, vorlesungsfreieZeit: { start: string, end: string } }) => (
            <>
                <p>Studierende der TU Dortmund k&ouml;nnen im AStA kostenlos Kopien von eigenen, studienrelevanten Dokumenten beglaubigen lassen. Hierzu z&auml;hlen beispielsweise Zeugnisse, Leistungsnachweise und Noten&uuml;bersichten. Neben den Orginalen sollten auch die Kopien zur Beglaubigung bereits mitgebracht werden.</p>

                <p><strong>Beglaubigungen werden Montags bis Freitags nur mit Termin im AStA ausgestellt.</strong> <strong>Einen Termin k&ouml;nnt ihr </strong><a href="https://asta-dortmund.de/termin-beglaubigungen/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a> <strong>buchen.</strong><br />
                    Beglaubigungen erfolgen</p>

                <ul>
                    <li>in der Vorlesungszeit: <strong>Montags bis Freitags von {vorlesungszeit?.start} bis {vorlesungszeit?.end} Uhr!</strong></li>
                    <li>in der Vorlesungsfreien Zeit: <strong>Montags bis Freitags von {vorlesungsfreieZeit?.start} bis {vorlesungsfreieZeit?.end} Uhr!</strong></li>
                </ul>

                <p>Bitte bringt eure Dokumente schon in Kopie mit (die Original Dokumente aber nat&uuml;rlich auch).</p>

                <p>Bei Dokumenten, die nicht in deutscher oder englischer Sprache ausgestellt wurden, muss eine amtliche &Uuml;bersetzung vorliegen.</p>

                <p>Nicht beglaubigt werden Personenstandsdokumente wie Ausweise, Visa, Geburts- oder Heiratsurkunden!</p>

                <p>Dieses Angebot steht ausschlie&szlig;lich Studierenden der TU Dortmund zur Verf&uuml;gung.</p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Authentication',
        body: ({ vorlesungszeit, vorlesungsfreieZeit }: { vorlesungszeit: { start: string, end: string }, vorlesungsfreieZeit: { start: string, end: string } }) => (
            <>
                <p>Students of TU Dortmund University are allowed to have documents pertaining to their studies authenticated by our staff. These documents are, for example, official transcripts, high school diplomas or certificates of achievements. Please make sure that you bring both the originals as well as the copies we are supposed to authenticate with you to the meeting.</p>

                <p><strong><strong>Authentication</strong> can be booked from Monday to Friday at the AStA offices. You can reserve a spot </strong><a href="https://asta-dortmund.de/en/appointment-authentication/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

                <p>Authentication are done</p>

                <ul>
                    <li>during lecture time:&nbsp;<strong>monday until friday from {toAmPm(vorlesungszeit?.start)} until {toAmPm(vorlesungszeit?.end)}</strong></li>
                    <li>during non-lecture time: <strong>monday until friday from {toAmPm(vorlesungsfreieZeit?.start)} until {toAmPm(vorlesungsfreieZeit?.end)}</strong></li>
                </ul>

                <p>Bring copies of the documents you want authenticated with you, as well as the originals!</p>

                <p>If you have documents that are not in either German or English, you must bring an official translation!</p>

                <p>We will not authenticate documents of your civil status like IDs, Visas, birth or marriage records.</p>

                <p>This offer is free of charge and only available for students of TU Dortmund University!</p>
            </>),
        backLabel: 'Back',
        switchLabel: 'Wechsel zu Deutsch',
    },
};

export default function AuthenticationPage() {
    const [locale, setLocale] = useState<'de' | 'en'>('de');
    const t = content[locale];

    // State für die fetched Zeiten
    const [zeiten, setZeiten] = useState<{ vorlesungszeit: { start: string, end: string }, vorlesungsfreieZeit: { start: string, end: string } } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Läuft einmal nach dem Laden der Komponente
    useEffect(() => {
        async function fetchZeiten() {
            try {
                const res = await fetch('/api/Beglaubigung');
                if (!res.ok) throw new Error(`Fetch error: ${res.statusText}`);
                const data = await res.json();

                const regex = /(\d{1,2}:\d{2})\s+bis\s+(\d{1,2}:\d{2})/;
                const vorlesungszeitMatch = data.vorlesungszeit.match(regex);
                const vorlesungsfreieZeitMatch = data.vorlesungsfreieZeit.match(regex);

                const vorlesungszeit = vorlesungszeitMatch
                    ? { start: vorlesungszeitMatch[1], end: vorlesungszeitMatch[2] }
                    : { start: '??', end: '??' };

                const vorlesungsfreieZeit = vorlesungsfreieZeitMatch
                    ? { start: vorlesungsfreieZeitMatch[1], end: vorlesungsfreieZeitMatch[2] }
                    : { start: '??', end: '??' };

                setZeiten({ vorlesungszeit, vorlesungsfreieZeit });
            } catch (err) {
                console.error('Fehler beim Laden:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchZeiten();
    }, []);

    // Wenn die Daten noch geladen werden oder ein Fehler aufgetreten ist
    if (loading) return <p>Lade Zeiten...</p>;
    if (error) return <p>Fehler: {error}</p>;

    return (
        <main className="max-w-3xl mx-auto p-6">
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                    {t.switchLabel}
                </button>
            </div>

            <h1 className="text-3xl font-bold mb-4 post-headline">{t.title}</h1>
            <div className="prose mb-6">
                {zeiten && t.body({ vorlesungszeit: zeiten.vorlesungszeit, vorlesungsfreieZeit: zeiten.vorlesungsfreieZeit })}
            </div>

            <div className="mt-8">
                <button
                    onClick={() => window.history.back()}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                    {t.backLabel}
                </button>
            </div>
        </main>
    );
}

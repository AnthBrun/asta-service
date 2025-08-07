'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Kontakt',
        body: (
            <>
                <p>Ihr erreicht den AStA auf folgenden Wegen:</p>

                <ul>
                    <li>
                        <p>AStA B&uuml;ro EF50, Eingang rechts neben dem Haupteingang<br />
                            &Ouml;ffnungszeiten Vorlesungszeit: Montag bis Freitag 10:00 &ndash; 14:00<br />
                            &Ouml;ffnungszeiten vorlesungsfreie Zeit: Montag bis Freitag 10:00 &ndash; 13:00</p>
                    </li>
                    <li>
                        <p>Email: <u><a href="mailto:asta@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>asta@asta.tu-dortmund.de</a></u> oder per <a href="https://asta-dortmund.de/kontakt/" style={{ color: 'blue', textDecoration: 'underline' }}>Kontaktformular</a></p>
                    </li>
                    <li>
                        Telefon:<a href="tel:+492317552584" style={{ color: 'blue', textDecoration: 'underline' }}>0231 755 2584</a>
                        <br />
                        <p>&Ouml;ffnungszeiten gleich den B&uuml;ro &Ouml;ffnungszeiten</p>
                    </li>
                </ul>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Contact',
        body: (
            <>
                <ul>
                    <li>
                        <p>AStA office &ndash; EF50, entrance right next to the main entrance<br />
                            opening hours lecture time: Monday to Friday 10:00 am &ndash; 02:00 pm<br />
                            opening hours lecture free time: Monday to Friday 10:00 am &ndash; 01:00 pm</p>
                    </li>
                    <li>
                        <p>Email: <u><a href="mailto:asta@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>asta@asta.tu-dortmund.de</a></u> or via <a href="https://asta-dortmund.de/en/contact/" style={{ color: 'blue', textDecoration: 'underline' }}>contact form</a></p>
                    </li>
                    <li>
                        Telephone:<a href="tel:+492317552584" style={{ color: 'blue', textDecoration: 'underline' }}>0231 755 2584</a>
                        <br />
                           <p>Same opening hours as office hours</p>
                    </li>
                </ul>
            </>),
        backLabel: 'Back',
        switchLabel: 'Wechsel zu Deutsch',
    },
};

export default function AuthenticationPage() {
    const [locale, setLocale] = useState<'de' | 'en'>('de');
    const t = content[locale];

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

            <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
            <div className="prose mb-6">
                {t.body}
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

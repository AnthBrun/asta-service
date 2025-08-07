'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Referate',
        body: (
            <>
                <em>Vorsitz</em>
                <p>
                    Email: <a href="mailto:vorsitz@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>vorsitz@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r Finanzen und Fachschaften</em><br />
                <p>
                    Email: <a href="mailto:finanzen@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>finanzen@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r &Ouml;ffentlichkeitsarbeit und Presse</em><br />
                <p>
                    Email: <a href="mailto:presse@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>presse@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r Kultur</em><br />
                <p>
                    Email: <a href="mailto:kultur@asta.tu-dortmund.de">kultur@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r Soziales, Diversit&auml;t und Internationales</em><br />
                <p>
                    Email Soziales: <a href="mailto:soziales@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>soziales@asta.tu-dortmund.de</a><br />
                    Email Diversit&auml;t: <a href="mailto:diversitaet@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>diversitaet@asta.tu-dortmund.de</a><br />
                    Email Internationales: <a href="mailto:internationales@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>internationales@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r Nachhaltigkeit und Mobilit&auml;t</em><br />
                <p>
                    Email: <a href="mailto:nachhaltigkeit@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>nachhaltigkeit@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Referat f&uuml;r Hochschulpolitik und Lehre</em><br />
                <p>
                    Email: <a href="mailto:hopo@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>hopo@asta.tu-dortmund.de</a>
                </p >
                
                <br />
                <p>Die aktuelle Besetzung der Posten findest <a href="https://asta-dortmund.de/referentinnen/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Consultants',
        body: (
            <>
                <em>AStA Head of Office</em><br />
                <p>
                    Email: <a href="mailto:vorsitz@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>vorsitz@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Chief Financial Office</em><br />
                <p>
                    Email: <a href="mailto:finanzen@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>finanzen@asta.tu-dortmund.de</a>
                </p>

                <br />
                <p>
                    <em>Public Relations Office</em><br />
                    Email: <a href="mailto:presse@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>presse@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Office for Culture and Entertainment</em><br />
                <p>
                    Email: <a href="mailto:kultur@asta.tu-dortmund.de">kultur@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Office for Social Issues, Diversity and International Issues</em><br />
                <p>Email Social Issues: <a href="mailto:soziales@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>soziales@asta.tu-dortmund.de</a><br />
                    Email Diversity: <a href="mailto:diversitaet@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>diversitaet@asta.tu-dortmund.de</a><br />
                    Email International Isses: <a href="mailto:internationales@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>internationales@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Office for Sustainability and Mobility</em><br />
                <p>
                    Email: <a href="mailto:nachhaltigkeit@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>nachhaltigkeit@asta.tu-dortmund.de</a>
                </p>

                <br />
                <em>Office for University Politics and Teaching Practices</em><br />
                <p>
                    Email: <a href="mailto:hopo@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>hopo@asta.tu-dortmund.de</a>
                </p>

                <br />
                <p>The current staffing of the positions can be found <a href="https://asta-dortmund.de/en/consultants/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

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

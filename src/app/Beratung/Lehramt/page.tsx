'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Praktikums- und Nebenjobberatung für Lehramtsstudierende',
        body: (
            <>
                <p>Du studierst Lehramt und hast fragen Rund um Praktika oder ben&ouml;tigst Infos zum Thema Nebenjob? Bei diesen Fragen steht dir die Praktikums- und Nebenjobberatung zur Verf&uuml;gung. Dazu geh&ouml;ren Themen wie die Suche des Praktikumsplatzes, Fragen rund um den Ablauf deines Praktikums, welcher Nebenjob bringt mich pers&ouml;nlich nach vorne, Fragen zu deinen Rechten im Nebenjob, Schwierigkeiten mit deinem Arbeitgeber und vieles mehr.</p>

                <br />
                <p>Web: <a href="https://www.gew-nrw.de/" rel="noreferrer noopener" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>https://www.gew-nrw.de</a><br />
                    Mail: <a href="mailto:hib-dortmund@gew-nrw.de" style={{ color: 'blue', textDecoration: 'underline' }}>hib-dortmund@gew-nrw.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Internship and part-time job counseling for student teachers',
        body: (
            <>
                <p>Are you studying to become a teacher and have questions about internships or need information about a part-time job? The internship and part-time job counseling is available to answer these questions. This includes topics such as looking for an internship, questions about the process of your internship, which part-time job brings me personally forward, questions about your rights in the part-time job, difficulties with your employer and much more.</p>

                <br />
                <p>Web: <a href="https://www.gew-nrw.de/" rel="noreferrer noopener" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>https://www.gew-nrw.de</a><br />
                    Mail: <a href="mailto:hib-dortmund@gew-nrw.de" style={{ color: 'blue', textDecoration: 'underline' }}>hib-dortmund@gew-nrw.de</a></p>
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

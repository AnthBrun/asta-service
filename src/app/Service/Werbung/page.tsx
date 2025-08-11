'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Litfaßsäulen und Plakatieren',
        body: (
            <>
                <p>Die Verwaltung der Litfa&szlig;s&auml;ulen am Campus wurden dem AStA von der TU Dortmund &uuml;bertragen. Daher ist das Plakatieren nur nach Genehmigung des AStA zul&auml;ssig. Anfragen von Organisationen und insbesondere Firmen ohne Zusammenhang mit der Studierendenschaft werden grunds&auml;tzlich nicht genehmigt. Nicht genehmigte Plakate werden gegen Geb&uuml;hr wieder entfernt!</p>

                <p>Die Buchung der Litfa&szlig;s&auml;ulen ist &uuml;ber das <a href="https://buchungssystem.asta-dortmund.de/" style={{ color: 'blue', textDecoration: 'underline' }}>Buchungssystem</a> m&ouml;glich.</p>

                <p>Bei Fragen wendet euch bitte an:&nbsp;<u><a href="mailto:vorsitz@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>vorsitz@asta.tu-dortmund.de</a></u></p>

                <p>Mehr Informationen: <u><a href="https://asta-dortmund.de/2019/05/10/litfasssaeulen-und-plakatieren/" style={{ color: 'blue', textDecoration: 'underline' }}>https://asta-dortmund.de/2019/05/10/litfasssaeulen-und-plakatieren/</a></u></p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Advertising Pillars and Posters',
        body: (
            <>
                <p>The management of the advertising pillars on campus have been transferred to the AStA by the TU Dortmund. Therefore, billposting is only permitted after approval by the AStA. Requests from organizations and especially companies without any connection to the student body will generally not be approved. Unapproved posters will be removed again for a fee!</p>

                <p>The booking of the advertising pillars is possible via the <a href="https://buchungssystem.asta-dortmund.de/" style={{ color: 'blue', textDecoration: 'underline' }}>AStA booking system</a>.</p>

                <p>If you have any questions, please contact:&nbsp;<u><a href="mailto:vorsitz@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>vorsitz@asta.tu-dortmund.de</a></u></p>

                <p>More Information: <u><a href="https://asta-dortmund.de/en/2019/06/07/advertising-pillars-and-posters/" style={{ color: 'blue', textDecoration: 'underline' }}>https://asta-dortmund.de/en/2019/06/07/advertising-pillars-and-posters/</a></u></p>

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

            <h1 className="text-3xl font-bold mb-4 post-headline">{t.title}</h1>
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

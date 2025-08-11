'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Material- und Raumverleih',
        body: (
            <>
                <p>Um Euch mehr M&ouml;glichkeiten zu bieten, k&ouml;nnt ihr die Waschmaschine und den Trockner im AStA gegen eine kleine Geb&uuml;hr von 1&euro; pro Maschine benutzen. Die Maschinen werden 7 Tage im Voraus f&uuml;r den ganzen Tag gebucht.
                    Sp&auml;tester Abholzeitraum ist 16:00 Uhr.</p>

                <p>Mehr Informationen und Terminbuchungen gibt es <a href="https://asta-dortmund.de/2020/09/30/waschmaschine-und-trockner/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Material and room rental',
        body: (
            <>
                <p>To give you more options, you can use the washing machine and dryer in the AStA for a small fee of 1&euro; per machine. The machines have to be book 7 days in advance for the whole day. They can be used during the office hours Monday to Friday.
                   The latest pick-up time is 4:00 PM.</p>

                <p>More information and appointment bookings are available <a href="https://asta-dortmund.de/en/2022/07/11/washer-and-dryer/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

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

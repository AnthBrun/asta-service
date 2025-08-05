'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Job- & Wohnungsbörse',
        body: (
            <>
                <p>Die AStA <a href="https://jobsundwohnungen.asta-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>Job &ndash; und Wohnungsb&ouml;rse</a> steht f&uuml;r jeden kostenlos zur Verf&uuml;gung.</p>

                <p>Hier sind die verschiedensten Arbeits- oder Wohnungsangebote speziell f&uuml;r Studenten zu finden.</p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Job & Housing Exchange',
        body: (
            <>
                <p>The AStA <a href="https://jobsundwohnungen.asta-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>Job &ndash; and Housing Website</a> is available to everyone free of charge.</p>

                <p>Here you can find a wide variety of job- or apartment offers especially for students.</p>

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

'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Mieter*innenberatung',
        body: (
            <>
                <p>Hagen berät euch in allen Fragen von der Wohnungssuche über Mietrecht bis zur Kündigung.</p>
     
                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/27/mieterinnenberatung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email: <a href="mailto:miete@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Tenant Consulting Service',
        body: (
            <>
                <p>Hagen can offer you advice to nearly all things tenancy in Germany. What are your rights and how do you best terminate a contract.</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/tenant-consultation-service/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email: <a href="mailto:miete@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>

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

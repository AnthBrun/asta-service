'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'BAföG-Beratung',
        body: (
            <>

                <p>Bei Problemen und Fragen rund ums BAf&ouml;G k&ouml;nnt Ihr euch von Peter helfen lassen. Unser BAf&ouml;G-Berater ist ein Rechtsanwalt, der sich schon seit langem mit dem Thema BAf&ouml;G befasst. Falls ihr nur Probleme mit dem korrekten Ausf&uuml;llen des Antrags habt, ist daf&uuml;r nicht unsere BAf&ouml;G-Beratung zust&auml;ndig, sondern das BAf&ouml;G-Amt. Hilfreich ist hier zu wissen, dass Ihr nach Antragstellung noch einen Monat Zeit habt, erforderliche Unterlagen nachzureichen.</p>
                
                <br />                  
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/07/bafoeg-beratung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email: <a href="mailto:bafoeg@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>bafoeg@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'BAföG-Counseling',
        body: (
            <>
                <p>If you have problems or questions concerning BAf&ouml;G, our lawyer Peter is here to help you. Over the years he has become an expert in dealing with everything to do with BAf&ouml;G. But, should you only wonder how to correctly fill out your BAf&ouml;G-Application, please contact the BAf&ouml;G-Amt instead.&nbsp;</p>
                <p>It is good to know that, after sending in your application, you have a month to hand in any additional, missing documents to the BAf&ouml;G-Amt!</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/bafoeg-counseling/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email: <a href="mailto:bafoeg@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>bafoeg@asta.tu-dortmund.de</a></p>

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

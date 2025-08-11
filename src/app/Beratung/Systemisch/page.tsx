'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Systemische Beratung',
        body: (
            <>
                <p>Die Systemische Beratung ist eine unterst&uuml;tzende Begleitung, die euch bei Krisen, Konflikten oder &Auml;ngsten vor Ver&auml;nderungen zur Seite steht. Dazu geh&ouml;ren unter anderem Probleme wie Prokrastination, Pr&uuml;fungs&auml;ngste und Konflikten mit Partner*innen. &bdquo;Systemisch&ldquo; bedeutet hier, dass die Beratung sich auf euch in euren verschiedenen Lebensbereichen (z.B. Universit&auml;t, Familie, Partnerschaft, Arbeitsplatz) bezieht. Dabei wird geschaut, welche Einfl&uuml;sse das System auf euch hat und welche Einfl&uuml;sse ihr auf das System habt. Die Beratung soll mit wertsch&auml;tzender Arbeit dazu beitragen, unter Einbeziehung eurer Potentiale, F&auml;higkeiten und Ziele, euren individuellen Weg zu finden.</p>
                <p>Die Beratung umfasst mindestens 7 und maximal 20 Termine in einem ein- oder zweiw&ouml;chigen Rhythmus.</p>

                <br />
                <p> Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2023/06/16/systemische-beratung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email:&nbsp;<a href="mailto:systemischeberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>systemischeberatung@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Systemic Counseling',
        body: (
            <>
                <p>Systemic counseling is a supportive accompaniment that helps you with crises, conflicts or fears of change. This includes problems such as procrastination, exam nerves and conflicts with partners. &ldquo;Systemic&rdquo; means here that the counseling refers to you in your different areas of life (e.g. university, family, partnership, workplace). We look at what influences the system has on you and what influences you have on the system. The counseling is intended to help you find your individual path with appreciative work, taking into account your potentials, abilities and goals.</p>
                <p>The consultation includes a minimum of 7 and a maximum of 20 appointments in a one- or two-week rhythm.</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/2023/06/16/systemic-counseling/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email:&nbsp;<a href="mailto:systemischeberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>systemischeberatung@asta.tu-dortmund.de</a></p>
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

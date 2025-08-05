'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Hilfsfonds',
        body: (
            <>
                <p>Das Studierendenparlament der TU Dortmund hat einen Hilfsfonds eingerichtet, aus welchem Darlehen an Studierende vergeben werden k&ouml;nnen. &Uuml;ber die Vergabe entscheidet der Hilfsfondsausschuss, der j&auml;hrlich im Studierendenparlament gew&auml;hlt wird.</p>
                <p>Um eine kurzfristige, unverschuldete Notlage zu &uuml;berbr&uuml;cken, k&ouml;nnen Studierende der TU Dortmund ein zinsloses Darlehen von bis zu maximal 2.000 Euro erhalten. Wir helfen dir deine dringendsten Rechnungen, z.B. den n&auml;chsten Semesterbeitrag, deine Miete, Krankenversicherung zu begleichen.</p>

                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/de/2019/06/03/hilfsfond/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email: <a href="mailto:hilfe@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'AStA Relief Fund',
        body: (
            <>
                <p>The student parliament of TU Dortmund University has set up an aid fund from which loans can be granted to students. The aid fund committee, which is elected annually in the student parliament, decides on the allocation.</p>
                <p>In order to bridge a short-term emergency situation through no fault of their own, TU Dortmund students can receive an interest-free loan of up to a maximum of 2,000 euros. We help you to pay your most urgent bills, e.g. the next semester fee, your rent, health insurance.</p>


                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/asta-relief-fund/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email: <a href="mailto:hilfe@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>

            </>),
        backLabel: 'Back',
        switchLabel: 'Wechsel zu Deutsch',
    },
};

export default function Page() {
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

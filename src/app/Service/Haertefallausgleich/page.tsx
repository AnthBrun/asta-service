'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Härtefallausgleich',
        body: (
            <>
                <p>Wenn ihr euch das Semesterticket und den Studierendenschaftsbeitrag &uuml;berhaupt nicht leisten k&ouml;nnt, dann gibt es den sogenannten H&auml;rtefallausgleich. Besonders bed&uuml;rftigen Studierenden kann der Beitrag in sozialen H&auml;rtef&auml;llen erlassen werden. Antr&auml;ge auf H&auml;rtefallausgleich k&ouml;nnen online beim AStA gestellt werden. Solltet ihr also durch die finanzielle Belastung des in den Sozialbeitr&auml;gen erhobenen Beitrags f&uuml;r das SemesterTicket NRW und den Studierendenschaftsbeitrag finanzielle Probleme existenzieller Art bekommen, k&ouml;nnt ihr beim AStA einen Antrag auf H&auml;rtefallausgleich stellen. Bitte bedenkt, dass es unterschiedliche Fristen gibt, abh&auml;ngig von der Art der Einschreibung (R&uuml;ckmeldung oder Neueinschreibung).</p>

                <p>Mehr Informationen gibt es <a href="https://asta-dortmund.de/2019/05/10/haertefallausgleich/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Authentication',
        body: (
            <>
                <p>If you cannot afford the semester ticket and the student body dues whatsoever, then the hardship application might help. Students facing financial hardship may be exempt from paying these fees. These hardship applications can be filed out online on the general students&rsquo; committees (AStA TU Dortmund) homepage. This means that if you face existential financial problems due to the fees for the semester ticket and the student body dues, you can apply for a hardship compensation for winter semester 2023/2024 from the general students&rsquo; committee. Please note that the deadline varies based on whether you have been matriculated already, or whether you are a first semester student.</p>

                <p>More information <a href="https://asta-dortmund.de/en/2019/06/07/case-of-hardship-balance/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a></p>
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

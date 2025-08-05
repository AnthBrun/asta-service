'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Beratung zu Studiumsfragen',
        body: (
            <>
                <ul className='list-disc pl-5'>
                    <li>Habt ihr Schwierigkeiten mit einzelnen Dozierenden oder einer Pr&uuml;fung?</li>
                    <li>Habt ihr eine Pr&uuml;fung (wiederholt) nicht bestanden und m&ouml;chtet &uuml;ber eure Optionen erfahren?</li>
                    <li>Ein Dozierender schafft es nicht eure Note einzutragen?</li>
                    <li>Durch verschiedene Ereignisse seid ihr von eurem Studieverlaufsplan abgewichen und wisst nicht, wie ihr euer Studium ordentlich zu Ende bringen k&ouml;nnt?</li>
                    <li>Oder werdet ihr einfach nicht aus eurem Modulhandbuch schlau?</li>
                </ul>
                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/27/beratung-zu-studiumsfragen/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email: <a href="mailto:beratungstudium@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Consulting Hours for Questions Concerning Studies and Exams',
        body: (
            <>
                <ul className='list-disc pl-5'>
                    <li>Are you having difficulties with individual instructors or an exam?</li>
                    <li>Have you failed an exam (again) and want to learn about your options?</li>
                    <li>An instructor is unable to enter your grade?</li>
                    <li>Due to various events, have you deviated from your study plan and don&rsquo;t know how to properly finish your studies?</li>
                    <li>Or are you simply having trouble understanding your module handbook?</li>
                </ul>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/consulting-hours-for-questions-concerning-studies-and-exams/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email: <a href="mailto:beratungstudium@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>beratungstudium@asta.tu-dortmund.de</a></p>

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

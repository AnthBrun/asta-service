'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Rechtsberatung',
        body: (
            <>
                <p>Die Rechtsberatung dient dazu, dass &uuml;ber juristische Probleme kurz und umfassend aufgekl&auml;rt und die m&ouml;glichen Schritte erl&auml;utert werden k&ouml;nnen. Aus Zeitgr&uuml;nden kann sie keine umfangreiche Rechtsberatung ersetzen. Der Rechtsanwalt wird bei Notwendigkeit das Verfahren auf euren Wunsch weiterf&uuml;hren. Die Beratung ist <strong>nur f&uuml;r Studierende der TU Dortmund</strong> und der zeitliche Rahmen ist auf <strong>15 Minuten pro Anfrage</strong> beschr&auml;nkt. Damit eine schnelle Beratung erfolgen kann, sollten s&auml;mtliche Unterlagen, die den Fall betreffen, sortiert mitgebracht werden, damit die Beratung schnell erfolgen kann!<br />
                    F&uuml;r die Beratung ist ein Eigenanteil von 5 &euro; zu tragen. Wenn ihr einen Beratungstermin w&uuml;nscht, m&uuml;sst ihr euch in die Terminliste eintragen, die im AStA ausliegt.</p>

                <br />
                <p> Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/27/rechtsberatung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Legal Counseling',
        body: (
            <>
                <p>Our legal advice service exists specifically so that questions and problems concerning legal issue can be clarified and potential further steps indicated. Due to time constraints our consultation isn&rsquo;t able to replace a detailed legal advice session, but our lawyer can give a first indication if it is feasible or smart to pursue further action. If wanted, he can take the problem further. The advice session is <strong>only for students of TU Dortmund University</strong> and confined to <strong>15 minutes per case</strong>.<br />
                    <strong>To guaranty that the 15 minutes can be used to the fullest, </strong>make sure you have all possible documentation and information with you. Per advice session, a small fee of 5&euro; is to be paid.&nbsp;</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/legal-counseling/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
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

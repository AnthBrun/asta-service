'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Technikverleih',
        body: (
            <>
                <p>Der Technikverleih ist f&uuml;r Studierende der TU, die</p>

                <ul className='list-disc pl-6'>
                    <li>kurzfristig einen Ersatz ben&ouml;tigen, w&auml;hrend sie sich neue Hardware anschaffen</li>
                    <li>&uuml;ber l&auml;ngeren Zeitraum Geld sparen m&uuml;ssen um sich einen neuen PC kaufen zu k&ouml;nnen</li>
                    <li>nur f&uuml;r eine kurze Zeit ein Headset oder eine Webcam brauchen und sich diese daf&uuml;r nicht direkt anschaffen m&ouml;chten.</li>
                </ul>

                <p>Der Verleih ist f&uuml;r Studierende in Notlagen gedacht und wir haben aktuell nur wenige Ger&auml;te zur Verf&uuml;gung. Solltest du also gen&uuml;gend Ressourcen (z.B. Geld) haben, um selbst die Anschaffung zu t&auml;tigen, bitten wir dich, unseren Verleih <strong>nicht</strong> zu nutzen! Dann k&ouml;nnen wir mehr Studierenden helfen, die die Ausleihe ben&ouml;tigen, um ihr Studium fortzusetzen.</p>

                <p>Alle weiteren Informationen findet ihr <a href="https://asta-dortmund.de/2021/07/02/technikverleih/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Technology rental',
        body: (
            <>
                <p>The technology rental is for students of the TU who</p>

                <ul className='list-disc pl-6'>
                    <li>need a short-term replacement while they acquire new hardware</li>
                    <li>need to save money over a longer period of time to be able to buy a new PC</li>
                    <li>only need a headset or webcam for a short time and do not want to purchase it directly for this purpose.</li>
                </ul>

                <p>The rental is intended for students in need and we currently have only a few devices available. So if you have enough resources (e.g. money) to make the purchase yourself, we ask you not to use our lending service! Then we can help more students who need the loan to continue their studies.</p>

                <p>All further information can be found <a href="https://asta-dortmund.de/en/2022/07/11/technology-rental/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

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

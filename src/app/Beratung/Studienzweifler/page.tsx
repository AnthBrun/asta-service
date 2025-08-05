'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Beratung für Studienzweifler*innen',
        body: (
            <>
                <p>Die Handwerkskammer und die Industrie- und Handelskammer bieten eine Beratung f&uuml;r Studierende an, die dar&uuml;ber nachdenken ihr Studium abzubrechen. Hier wird &uuml;ber m&ouml;gliche Ausbildungsberufe informiert.</p>
                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/27/beratung-fuer-studienzweiflerinnen/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Consultation for Those Doubting their Studies',
        body: (
            <>
                <p>Sometimes you only realise during your studies that the direction you have chosen does not meet your expectations, or that you would prefer to find something else to do in the next few years. The Chamber of Skilled Crafts Dortmund therefore offers counselling for students who are thinking about dropping out of their studies. Information is provided here on possible training occupations.</p>
                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/counseling-for-those-doubting-their-studies/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
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

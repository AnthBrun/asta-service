'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Sozialberatung',
        body: (
            <>
                <p>Die Sozialberatung hilft bei Fragen der Studienfinanzierung und Organisation. Dazu z&auml;hlen vor allem Fragen zur studentischen Erwerbst&auml;tigkeit sowie die damit zusammenh&auml;ngenden Fragen des Sozialversicherungs- und Steuerrechtes, aber auch Sozialleistungen, wie Kindergeld, Wohngeld, Sozialhilfe und GEZ-Befreiung. Allein Fragen zum BAf&ouml;G werden hier nicht beantwortet, es hierf&uuml;r im AStA eine eigene Beratung gibt.</p>

                <br />
                <p> Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/27/sozialberatung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email:&nbsp;<a href="mailto:sozialberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>sozialberatung@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Social Counseling',
        body: (
            <>
                <p>Our social counseling helps you find answers to questions regarding financing and organizing your studies. This includes questions regarding student employment, social security or taxes, as well as social benefits such as child benefits, housing benefits, welfare, TV licence relief. Only questions regarding BAf&ouml;G will not be answered here but have a special counseling service.</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/social-counseling/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email:&nbsp;<a href="mailto:sozialberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>sozialberatung@asta.tu-dortmund.de</a></p>
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

'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Material- und Raumverleih',
        body: (
            <>
                <p>Der AStA bietet den Fachschaften, AGs und Gremien der Studierendenschaft der TU Dortmund eine Vielzahl von Materialien und R&auml;umen zur Ausleihe an.</p>

                <p>Die Materialien und R&auml;ume sind ausschlie&szlig;lich online reservierbar. Zur besseren Planung der Ausleihe, sollte eine Reservierung mindestens eine Woche im Voraus erfolgen. Bei R&uuml;ckfragen zum Materialverleih steht unser <a href="mailto:kultur@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>Kulturteam</a> gerne zur Verf&uuml;gung. Eine &Uuml;bersicht zum zu hinterlegenden Pfand ist in der jeweiligen Beschreibung zu finden.</p>

                <p>Wir bitten um Verst&auml;ndnis, dass Ausleihen nicht extern oder an Privatpersonen erfolgen k&ouml;nnen.</p>

                <p><a href="https://buchungssystem.asta-dortmund.de" rel="noreferrer noopener" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>Hier</a>  gelangt ihr zum Buchungssystem</p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Material and room rental',
        body: (
            <>
                <p>The AStA offers a wide range of materials and rooms for loan to the student councils, AGs and committees of the TU Dortmund student body.</p>

                <p>The materials and rooms can only be reserved online. For better planning of the rental, a reservation should be made at least one week in advance. Our <a href="mailto:kultur@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>cultural team</a> will be happy to answer any questions you may have about the rental of materials. An overview of the deposit can be found in the respective description.</p>

                <p>We ask for your understanding that loans cannot be made externally or to private individuals.</p>

                <p><a href="https://buchungssystem.asta-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>Here</a> you can get to the booking system</p>

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

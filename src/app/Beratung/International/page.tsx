'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Beratung für internationale Studierende',
        body: (
            <>
                <p><strong>Beratung f&uuml;r internationale Studierende</strong></p>

                <p>Diese Beratung kl&auml;rt alle Fragen, Probleme und Unsicherheiten, mit denen sich internationale Studierende auseinandersetzen m&uuml;ssen. </p>
                <p>Die Beratung umfasst unter anderem:</p>

                <ul className='list-disc pl-5'>
                    <li>Aufenthaltsrecht und Visumsverl&auml;ngerungen</li>
                    <li>Sozialleistungen f&uuml;r internationale Studierende</li>
                    <li>Arbeitsrecht f&uuml;r internationale Studierende</li>
                    <li>Zulassungsbestimmungen f&uuml;r die Hochschule</li>
                    <li>Sprachkursangebote</li>
                    <li>Vertragsangelegenheiten</li>
                </ul>

                <br />
                <p>Die Beratung ist keine verbindliche Rechtsberatung! Informationen zu dieser findet ihr <a href="https://asta-dortmund.de/2019/03/27/rechtsberatung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>

                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/07/beratung-fuer-internationale-studierende/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email: <a href="mailto:internationalcounseling@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>internationalcounseling@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Counseling for International Students',
        body: (
            <>
                <p>Here we help you address questions, problems, and uncertainties that international students face.</p>
                <p>The counseling includes:&nbsp;</p>

                <ul className='list-disc pl-5'>
                    <li>Right of residence and visa extensions</li>
                    <li>Social benefits for international students</li>
                    <li>Employment law for international students</li>
                    <li>University admission requirements</li>
                    <li>Language course offers</li>
                    <li>Contract matters</li>
                </ul>

                <br />
                <p>The counseling is not binding legal counseling! Information about this can be found <a href="https://asta-dortmund.de/en/2019/06/03/legal-counseling/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/advice-for-international-students/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email: <a href="mailto:internationalcounseling@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>internationalcounseling@asta.tu-dortmund.de</a></p>
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

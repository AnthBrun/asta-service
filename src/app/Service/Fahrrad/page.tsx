'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Fahrradselbsthilfewerkstatt',
        body: (
            <>
                <p>Die Fahrradselbsthilfewerkstatt des AStA bietet allen Studierenden und Hochschulangeh&ouml;rigen die M&ouml;glichkeit, ihre Fahrr&auml;der selbst zu reparieren. Das Angebot richtet sich an diejenigen, die sich zutrauen, selbst an ihrem Rad zu arbeiten, bei denen es jedoch aus Mangel an geeigneten R&auml;umlichkeiten und Werkzeug scheitert. Auch wer sich bisher nie f&uuml;r die Funktionsweise der Kettenschaltung oder der Lichtanlage interessiert hat, ist bei uns richtig: Bei Bedarf unterst&uuml;tzen wir Euch bei der Reparatur. Ihr k&ouml;nnt Euch also schon mal trauen, an dieser oder jener Schraube zu drehen, ohne bef&uuml;rchten zu m&uuml;ssen, dass das Rad nachher gar nicht mehr funktioniert!</p>

                <p>Die Fahrradselbsthilfewerkstatt befindet sich im Haus D&ouml;rstelmann am Campus S&uuml;d. Vom H&ouml;rsaalgeb&auml;ude I bzw. der Archeteria aus erreicht Ihr die Fahrradwerkstatt, indem Ihr am gl&auml;sernern Rudolf-Chaudoire-Pavillion auf die Baroper Stra&szlig;e zugeht und dort rechts abbiegt. Nach einigen Metern ist auf der linken Seite die Einfahrt 43, der ihr bis zum Ende<br />
                    des Parkplatzes folgt. Dort steht das Haus D&ouml;rstelmann. Der Eingang zur Fahrradwerkstatt befindet sich auf der rechten Seite.<br />
                    Von der Baroper Stra&szlig;e 322 aus: Einfahrt 43 am Campus S&uuml;d</p>

                <p>Aktuelle &Ouml;ffnungszeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/05/10/fahrradwerkstatt/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>

                <p>Ort: Von der Baroper Stra&szlig;e 322 aus: Einfahrt 43 am Campus S&uuml;d<br />
                    Mail: <a href="mailto:fahrrad@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>fahrrad@asta.tu-dortmund.de</a><br />
                    Instagram: <a href="https://www.instagram.com/recycle_asta_dortmund/" style={{ color: 'blue', textDecoration: 'underline' }}>https://www.instagram.com/recycle_asta_dortmund/</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Bicycle Repair Shop',
        body: (
            <>
                <p>The AStA bicycle repair shop is a <strong>free of charge</strong> self-help service for all students and university members who want to repair their own bikes. The service is for those of you who dare to work on their own bike but don&rsquo;t have the room and the tools they need. Even if this is your first time working on derailleur gear or lighting system &ndash; we&rsquo;re always happy to help. This is your opportunity to get into it without having to worry about your bike not working anymore afterwards.</p>

                <p>The repair shop is located at Haus D&ouml;rstelmann on Campus S&uuml;d. You can easily get there from H&ouml;rsaalgeb&auml;ude I and from Archeteria. Just pass the Rudolf-Chaudoire-Pavillion towards Baroper Stra&szlig;e and turn right. After a few meters, turn left to driveway 43 and follow towards the end of the parking lot. On the right side of Haus D&ouml;rstelmann, you find the entry to the repair shop.</p>

                <p>Current opening hours and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/07/bicycle-repair-shop-free-of-charge/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>

                <p>Location: Von der Baroper Stra&szlig;e 322 aus: Einfahrt 43 am Campus S&uuml;d<br />
                    Mail: <a href="mailto:fahrrad@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>fahrrad@asta.tu-dortmund.de</a><br />
                    Instagram: <a href="https://www.instagram.com/recycle_asta_dortmund/" style={{ color: 'blue', textDecoration: 'underline' }}>https://www.instagram.com/recycle_asta_dortmund/</a></p>
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

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 break-words max-w-full post-headline">{t.title}</h1>
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

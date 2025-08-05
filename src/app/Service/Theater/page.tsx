'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Fahrradselbsthilfewerkstatt',
        body: (
            <>
                <p>Mit dem Beginn des Wintersemesters 2014/15 k&ouml;nnen Studierende der TU Dortmund ein kostenloses Ticket f&uuml;r Vorstellungen im Theater Dortmund bekommen. <strong>Seit November 2023 ist das TU-Ticket nur noch online buchbar.</strong> F&uuml;r das kostenfreie Theaterticket m&uuml;ssen sich Studierende der TU Dortmund <a href="https://www.theaterdo.de/karten-abo/theaterflatrate/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a> registrieren lassen. Dazu wird die aktuelle Studienbescheinigung ben&ouml;tigt. Die Registrierung gilt jeweils f&uuml;r das dort angegebene Semester.</p>

                <p>Das Angebot gilt ab einer Woche vor der gew&uuml;nschten Vorstellung, wenn die Vorstellung nicht ausverkauft ist. Ausgenommen sind Gastspiele und Sonderveranstaltungen. F&uuml;r Premieren ist der Vorverkauf ausgeschlossen, hier erhaltet Studierende das TU-Ticket ab einer Stunde vor Vorstellungsbeginn bei Verf&uuml;gbarkeit.</p>

                <p>Informationen gibt es an der Theaterkasse im Opernfoyer und &uuml;ber die Tickethotline 0231/50 27 222.</p>

                <p>Das Programm und viele weitere Infos zu den H&auml;usern des Theater Dortmund findet ihr hier: <a href="https://www.theaterdo.de/" style={{ color: 'blue', textDecoration: 'underline' }}>www.theaterdo.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Bicycle Repair Shop',
        body: (
            <>
                <p>Since the winter semester 2014/15, students of the TU Dortmund can get a free ticket for plays at the Dortmund Theatre. <strong>Since November 2023, the TU-ticket can only be booked online. </strong>Students of the TU Dortmund have to register <a href="https://www.theaterdo.de/karten-abo/theaterflatrate/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a> for the free ticket. For this, the current certificate of enrolment is required. The registration is valid for the denoted semester on the certificate.</p>

                <p>The offer is valid from one week before the performances, if the performance is not sold out. Guest performances and special events are excluded. For premieres, students can only get a free ticket from one hour before the performance, if it is not sold out.</p>

                <p>You get more information at the box office nearby the opera house (Platz an der alten Synagoge) or at the ticket hotline 0231/50 27 222.</p>

                <p>You find the program and more information to the different houses of the Dortmund Theatre here (only in German):&nbsp;<a href="https://www.theaterdo.de/" rel="noreferrer noopener" target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>https://www.theaterdo.de/</a></p>
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

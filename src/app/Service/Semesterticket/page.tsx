'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Semesterticket',
        body: (
            <>
                <p>Das SemesterTicket NRW/VRR ist euer Ticket, um in ganz NRW unterwegs zu sein. Das Ticket gilt in gedruckter Form oder digital als PDF oder in der&nbsp;<u><a href="https://www.tu-dortmund.de/tu-app/" style={{ color: 'blue', textDecoration: 'underline' }}>TU-App</a></u>&nbsp;(in Kombination mit einem amtlichen Lichtbildausweis). Alle Studierdenden der TU Dortmund haben das Ticket und k&ouml;nnen damit kreuz und quer durch ganz Nordrhein-Westfalen in allen Regionalz&uuml;gen, S-Bahnen, Stadtbahnen, Bussen und H-Bahnen fahren. Dabei gilt das Ticket nur in der zweiten Klasse.</p>
                <br />
                <p>Je nach Semester gilt das Ticket ab 01. Oktober (Wintersemester) oder 01. April (Sommersemester) f&uuml;r jeweils ein Semester (6 Monate). Erstsemester-Studierende k&ouml;nnen vor Beginn des Semesters ein verg&uuml;nstigtes&nbsp;<u><a href="https://asta-dortmund.de/2019/05/10/vorkursticket/" style={{ color: 'blue', textDecoration: 'underline' }}>Vorkursticket</a></u>&nbsp;bekommen.</p>
                <br />
                <p>Im VRR-Bereich gibt es zus&auml;tzlich Mitnahmeregelungen. Hier d&uuml;rft ihr ganzt&auml;gig ein Fahrrad mitnehmen sowie ab 19 Uhr oder am Wochenende und Feiertags ganzt&auml;gig eine weitere Person. Au&szlig;erhalb des VRRs k&ouml;nnt nur ihr mit dem Ticket fahren!</p>
                <br />
                <p>Mehr Informationen findet ihr im FAQ here: <u><a href="https://asta-dortmund.de/2019/05/10/das-semesterticket-faq/" style={{ color: 'blue', textDecoration: 'underline' }}>https://asta-dortmund.de/2019/05/10/das-semesterticket-faq/</a></u></p>

            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Semester Ticket',
        body: (
            <>
                <p>The SemesterTicket NRW/VRR is your ticket to travel throughout NRW. The ticket is valid in printed form or digitally as a PDF or in the&nbsp;<u><a href="https://www.tu-dortmund.de/en/tu-app/" style={{ color: 'blue', textDecoration: 'underline' }}>TU app</a></u>&nbsp;(in combination with an official photo ID). All TU Dortmund students have the ticket and can use it to travel all over North Rhine-Westphalia on all regional trains, S-Bahns, light rail, buses and H-Bahns. The ticket is only valid in second class.</p>
                <br />
                <p>Depending on the semester, the ticket is valid from 01 October (winter semester) or 01 April (summer semester) for one semester (6 months). First semester students can get a discounted&nbsp;<u><a href="https://asta-dortmund.de/en/2019/06/07/pre-course-ticket/" style={{ color: 'blue', textDecoration: 'underline' }}>pre-course ticket</a></u>&nbsp;(&ldquo;Vorkursticket&rdquo;) before the start of the semester.</p>
                <br />
                <p>In the VRR area there are additional transport regulations. Here you are allowed to take one bicycle with you all day and one additional person after 7 p.m. or all day on weekends and holidays. Outside the VRR area only you can ride with the ticket!</p>
                <br />
                <p>More information in our FAQ here: <u><a href="https://asta-dortmund.de/en/2019/06/03/semester-ticket-faq/" style={{ color: 'blue', textDecoration: 'underline' }}>https://asta-dortmund.de/en/2019/06/03/semester-ticket-faq/</a></u></p>
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

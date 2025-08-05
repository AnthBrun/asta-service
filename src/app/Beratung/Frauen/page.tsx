'use client';

import { useState } from 'react';

const content = {
    de: {
        title: 'Anonyme Frauen*- und Elternberatung',
        body: (
            <>
                <p>Diplom-Psychologin Claudia Finis bietet eine Sprechstunde an, in der die systemische Beraterin/Therapeutin i. A. euch zu frauenspezifischen Problemen Beratung bietet.</p>

                <br />
                <p>Hier k&ouml;nnen alle Themen wie zum Beispiel:</p>

                <ul className="list-disc pl-5">
                    <li>famili&auml;re Belastungen (fehlende Unterst&uuml;tzung, Konflikte, &hellip;)</li>
                    <li>Geschlechtsspezifische Benachteiligungen / Diskriminierungen</li>
                    <li>Stalking</li>
                    <li>psychische Probleme</li>
                    <li>Schwangerschaft und Studieren mit Kind (finanzielle, strukturelle, psychische Themen)</li>
                    <li>Beziehungsprobleme</li>
                    <li>Identit&auml;t als Frau / leben und studieren als Transmensch</li>
                </ul>

                <p>Oder jede andere Belastung die euch besch&auml;ftigt und m&ouml;glicherweise am Studieren hindert, kann hier besprochen werden. Hierzu k&ouml;nnen, wenn dies gew&uuml;nscht wird, alle beteiligten Personen mit in die Beratung kommen, auch M&auml;nner.</p>

                <br />
                <p>By the way:<br />
                    Wenn das Haus abgebrannt ist, ist es zu sp&auml;t sich um Wasser zu k&uuml;mmern.<br />
                    Kommt ruhig vorbei, auch wenn es noch nicht brennt.</p>

                <p>Obacht: M&auml;nner d&uuml;rfen auch alleine zur Beratung erscheinen, wenn sie V&auml;ter sind und Fragen zum Thema studieren mit Kind haben.</p>

                <br />
                <p>Die Frauenberaterin bietet auch die M&ouml;glichkeit f&uuml;r die Kontaktaufnahme zu anderen studierenden Eltern, um beispielsweise gegenseitige Kinderbetreuung zu organisieren.</p>

                <br />
                <p><strong>Die Beratung kann in Deutsch oder Englisch erfolgen.</strong></p>

                <br />
                <p>Aktuelle Beratungenzeiten und Informationen zu verschobenen oder ausgefallenen Terminen findet ihr <a href="https://asta-dortmund.de/2019/03/07/anonyme-frauen-und-elternberatung/" style={{ color: 'blue', textDecoration: 'underline' }}>hier</a>.</p>
                <p>Email:&nbsp;<a href="mailto:frauenberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>frauenberatung@asta.tu-dortmund.de</a></p>
            </>),
        backLabel: 'Zurück',
        switchLabel: 'Switch to English',
    },
    en: {
        title: 'Anonymous Counseling for Women* and Parents',
        body: (
            <>
                <p>Graduate psychologist Claudia Finis offers counseling hours during which she can focus on, among other topics, women*-specific troubles.&nbsp;</p>

                <br />
                <p>Find here a list of specific topics:</p>

                <ul className='list-disc pl-5'>
                    <li>Familial stress</li>
                    <li>Stalking</li>
                    <li>Gender specific discrimination</li>
                    <li>Pregnancy and studying with a child</li>
                    <li>Psychological problems</li>
                    <li>Relationship problems</li>
                    <li>Female identity / living and studying as a trans person</li>
                </ul>

                <p>Or any other strains that burden you and make studying difficult. If wanted or needed for a helpful counseling, any other person can join the session, men too.&nbsp;</p>

                <br />
                <p>And always keep in mind: If the house is already burned down, it&rsquo;s too late to start looking for water. Meaning, please come by even when things don&rsquo;t seem totally out of your control yet, so we can make sure they never get there in the first place.&nbsp;</p>

                <br />
                <p>Additionally: Men are allowed to come to counseling by themselves if they are fathers and have questions regarding studying with a child. The counselor also offers the possibility of connecting with other parents to, if wanted, organize shared child minding.&nbsp;</p>

                <br />
                <p><strong>Counseling can take place in German or in English.</strong></p>

                <br />
                <p>Current consultation times and information about postponed or cancelled appointments can be found <a href="https://asta-dortmund.de/en/2019/06/03/anonymous-counseling-for-women-and-parents/" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.</p>
                <p>Email:&nbsp;<a href="mailto:frauenberatung@asta.tu-dortmund.de" style={{ color: 'blue', textDecoration: 'underline' }}>frauenberatung@asta.tu-dortmund.de</a></p>
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

// app/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const href_list = {
    'Frauen': '/Beratung/Frauen',
    'BAfoeG': '/Beratung/Bafoeg',
    'International': '/Beratung/International',
    'Studienzweifler': '/Beratung/Studienzweifler',
    'Studiumsfragen': '/Beratung/Studiumsfragen',
    'Hilfsfonds': '/Beratung/Hilfsfonds',
    'Miete': '/Beratung/Miete',
    'Lehramt': '/Beratung/Lehramt',
    'Recht': '/Beratung/Recht',
    'Sozial': '/Beratung/Sozial',
    'Systemisch': '/Beratung/Systemisch',
}

export default function Home() {
    const [locale, setLocale] = useState<'de' | 'en'>('de');

    const content = {
        de: {
            title: 'AStA Service',
            welcome: 'Herzlich Willkommen beim AStA!',
            buttons: [
                { href: href_list.Frauen, label: 'Anonyme Frauen*- und Elternberatung' },
                { href: href_list.BAfoeG, label: 'BAföG-Beratung' },
                { href: href_list.International, label: 'Beratung für international Studierende' },
                { href: href_list.Studienzweifler, label: 'Beratung für Studienzweifler*innen' },
                { href: href_list.Studiumsfragen, label: 'Beratung zu Studiumsfragen' },
                { href: href_list.Hilfsfonds, label: 'Hilfsfonds' },
                { href: href_list.Miete, label: 'Mieter*innenberatung' },
                { href: href_list.Lehramt, label: 'Praktikums- und Nebenjobberatung für Lehramtstudierende' },
                { href: href_list.Recht, label: 'Rechtsberatung' },
                { href: href_list.Sozial, label: 'Sozialberatung' },
                { href: href_list.Systemisch, label: 'Systemische Beratung' },
            ],
            switchLabel: 'Switch to English',
            backLabel: 'Zurück',
        },
        en: {
            title: 'AStA Service',
            welcome: 'Welcome to the AStA!',
            buttons: [
                { href: href_list.Frauen, label: 'Anonymous Counseling for Women* and Parents' },
                { href: href_list.BAfoeG, label: 'BAföG-Counseling' },
                { href: href_list.International, label: 'Counseling for International Students' },
                { href: href_list.Studienzweifler, label: 'Consultation for Those Doubting their Studies' },
                { href: href_list.Studiumsfragen, label: 'Consulting Hours for Questions Concerning Studies and Exams' },
                { href: href_list.Hilfsfonds, label: 'AStA Relief Fund' },
                { href: href_list.Miete, label: 'Tenant Consulting Service' },
                { href: href_list.Lehramt, label: 'Internship and part-time job counseling for student teachers' },
                { href: href_list.Recht, label: 'Legal Counseling' },
                { href: href_list.Sozial, label: 'Social Counseling' },
                { href: href_list.Systemisch, label: 'Systemic Counseling' },
            ],
            switchLabel: 'Wechsel zu Deutsch',
            backLabel: 'Back',
        },
    };

    const t = content[locale as 'de' | 'en'];

    return (
        <main className="max-w-xl mx-auto p-6">
            {/* Sprachumschalter */}
            <div className="mb-6 flex justify-end space-x-4">
                <button
                    onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                >
                    {t.switchLabel}
                </button>
            </div>

            <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
            <p className="mb-6">{t.welcome}</p>
            <div className="space-y-3">
                {t.buttons.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className="block bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700"
                    >
                        {label}
                    </Link>
                ))}
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

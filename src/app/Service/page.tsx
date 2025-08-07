'use client';

import Link from 'next/link';
import { useState } from 'react';

const href_list = {
  'Beglaubigung': '/Service/Beglaubigung',
  'Haertefallausgleich': '/Service/Haertefallausgleich',
  'Job': '/Service/Job',
  'Fahrrad': '/Service/Fahrrad',
  'Theater': '/Service/Theater',
  'Semesterticket': '/Service/Semesterticket',
  'Technikverleih': '/Service/Technikverleih',
  'Werbung': '/Service/Werbung',
  'Buchungssystem': '/Service/Buchungssystem',
  'Waschmaschine': '/Service/Waschmaschine',
}

const content = {
  de: {
    title: 'Service',
    description: (
      <>
        Wir bieten euch viele{' '}
        <a href="https://asta-dortmund.de/service/" className="text-blue-600 underline">
          Serviceangebote
        </a>{' '}
        welche ihr als Studierende der TU Dortmund (in den meisten Fällen) kostenlos nutzen könnt.
      </>
    ),
    buttons: [
      { href: href_list.Beglaubigung, label: 'Beglaubigungen' },
      { href: href_list.Haertefallausgleich, label: 'Härtefallausgleich' },
      { href: href_list.Job, label: 'Job- und Wohnungsbörse' },
      { href: href_list.Fahrrad, label: 'Fahrradselbsthilfewerkstatt' },
      { href: href_list.Theater, label: 'Theaterflatrate' },
      { href: href_list.Semesterticket, label: 'Semesterticket' },
      { href: href_list.Technikverleih, label: 'Technikverleih' },
      { href: href_list.Werbung, label: 'Litfaßsäulen und Plakatieren' },
      { href: href_list.Buchungssystem, label: 'Material- und Raumverleih' },
      { href: href_list.Waschmaschine, label: 'Waschmaschine und Trockner' },
    ],
    backLabel: 'Zurück',
    switchLabel: 'Switch to English',
  },
  en: {
    title: 'Service',
    description: (
      <>
        We offer you many{' '}
        <a href="https://asta-dortmund.de/en/service-en/" className="text-blue-600 underline">
          services
        </a>{' '}
        which you can use as a student of TU Dortmund (in most cases) for free.
      </>
    ),
    buttons: [
      { href: href_list.Beglaubigung, label: 'Authentication' },
      { href: href_list.Haertefallausgleich, label: 'Case of Hardship Balance' },
      { href: href_list.Job, label: 'Job and Housing Website' },
      { href: href_list.Fahrrad, label: 'Bicycle Repair Shop' },
      { href: href_list.Theater, label: 'Theater Flat Rate' },
      { href: href_list.Semesterticket, label: 'Semester Ticket' },
      { href: href_list.Technikverleih, label: 'Technology Rental' },
      { href: href_list.Werbung, label: 'Advertising Pillars and Posters' },
      { href: href_list.Buchungssystem, label: 'Material and Room Rental' },
      { href: href_list.Waschmaschine, label: 'Washing Machine and Dryer' },
    ],
    backLabel: 'Back',
    switchLabel: 'Wechsel zu Deutsch',
  },
};

export default function ServicePage() {
  const [locale, setLocale] = useState<'de' | 'en'>('de');
  const t = content[locale];

  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLocale(locale === 'de' ? 'en' : 'de')}
          className="px-3 py-1 border rounded hover:bg-gray-200"
        >
          {t.switchLabel}
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

      <p className="mb-4">{t.description}</p>

      <hr className="my-6 border-gray-300" />

      <div className="space-y-3">
        {t.buttons.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-700"
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

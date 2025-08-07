// app/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [locale, setLocale] = useState<'de' | 'en'>('de');

  const content = {
    de: {
      title: 'AStA Service',
      welcome: 'Herzlich Willkommen beim AStA!',
      buttons: [
        { href: 'Service', label: 'Service' },
        { href: 'Kontakt', label: 'Kontakt' },
        { href: 'Referate', label: 'Referate' },
        { href: 'Beratung', label: 'Beratung' },
      ],
      switchLabel: 'Switch to English',
    },
    en: {
      title: 'AStA Service',
      welcome: 'Welcome to the AStA!',
      buttons: [
        { href: 'Service', label: 'Service' },
        { href: 'Kontakt', label: 'Contact' },
        { href: 'Referate', label: 'Consultants' },
        { href: 'Beratung', label: 'Consultation' },
      ],
      switchLabel: 'Wechsel zu Deutsch',
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

      <header>
        <img src="public/asta-tu-dortmund-mathetower-cut-1920.jpg" alt="AStA Logo" className="mx-auto my-4 w-32 h-auto" />
      </header>

      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-6">{t.welcome}</p>
      <div className="space-y-3">
        {t.buttons.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700"
          >
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}

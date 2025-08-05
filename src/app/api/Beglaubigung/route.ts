import { DomUtils, parseDocument } from 'htmlparser2';
import { NextResponse } from 'next/server';

// Beglaubigung Zeiten API Route
export async function GET() {
  const res = await fetch('https://asta-dortmund.de/termin-beglaubigungen');
  const html = await res.text();

  const document = parseDocument(html);

  // Hilfsfunktion um Textinhalt von CSS-Selektor zu extrahieren
  function getTextByClass(className: string): string {
    const el = DomUtils.findOne(
      (el) => el.attribs?.class?.includes(className),
      document.children,
      true
    );
    return el ? DomUtils.textContent(el).trim() : '';
  }

  const vorlesungszeit = getTextByClass('vorlesungszeit');
  const vorlesungsfreieZeit = getTextByClass('vorlesungsfrei');

  return NextResponse.json({
    vorlesungszeit,
    vorlesungsfreieZeit
  });
}

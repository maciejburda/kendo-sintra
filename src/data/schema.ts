import { club } from '../i18n/club';
import type { Lang } from '../i18n/ui';

const address = {
  '@type': 'PostalAddress',
  streetAddress: club.venue.street,
  postalCode: club.venue.postalCode,
  addressLocality: club.venue.city,
  addressCountry: club.country,
} as const;

/** The club as a sports activity location — home page and contact. */
export function clubSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': new URL('#club', site).href,
    name: club.name,
    url: site.href,
    email: club.email,
    telephone: club.phone,
    address,
    geo: { '@type': 'GeoCoordinates', latitude: club.venue.geo.lat, longitude: club.venue.geo.lon },
    sameAs: [club.facebook, club.instagram],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '19:00', closes: '21:00' },
    ],
    sport: 'Kendo',
  };
}

/**
 * The beginners' course. Lets Google show the date and price in search results.
 *
 * Day and times confirmed by the club: Wednesday, beginners from 19:00,
 * advanced join at 19:30, finish at 21:00.
 *
 * endDate is derived from the stated "three months" — arithmetic on a fact the
 * club gave us, not an invention.
 */
export function courseSchema(lang: Lang, site: URL, coursePath: string) {
  const start = new Date(club.course.startISO);
  const end = new Date(start);
  end.setMonth(end.getMonth() + club.course.months);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  const pt = lang === 'pt';

  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: pt ? 'Curso de Kendo para Iniciantes' : 'Beginner Kendo Course',
    description: pt
      ? 'Curso de três meses para adultos sem experiência. Aulas em inglês com comandos em japonês e tradução para português. Shinai incluído.'
      : 'A three-month course for adults with no experience. Taught in English with Japanese commands and Portuguese translation. Shinai included.',
    url: new URL(coursePath, site).href,
    inLanguage: pt ? 'pt-PT' : 'en-GB',
    teaches: 'Kendo',
    coursePrerequisites: pt
      ? 'Sem experiência prévia. Não é necessário equipamento.'
      : 'No previous experience. No equipment needed.',
    provider: { '@type': 'SportsActivityLocation', name: club.name, url: site.href, address },
    offers: {
      '@type': 'Offer',
      price: String(club.course.total),
      priceCurrency: club.fees.currency,
      category: 'Paid',
      availability: 'https://schema.org/InStock',
      validThrough: club.course.startISO,
      ...(club.signupForm ? { url: club.signupForm } : {}),
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      startDate: club.course.startISO,
      endDate: iso(end),
      courseWorkload: `P${club.course.months}M`,
      location: { '@type': 'Place', name: club.venue.name, address },
      instructor: { '@type': 'Person', name: 'Rogier van Bijnen', jobTitle: 'Sensei, 6th dan' },
      courseSchedule: {
        '@type': 'Schedule',
        repeatFrequency: 'P1W',
        byDay: `https://schema.org/${club.course.day}`,
        startTime: club.course.startTime,
        endTime: club.course.endTime,
        startDate: club.course.startISO,
        endDate: iso(end),
        scheduleTimezone: 'Europe/Lisbon',
      },
    },
  };
}

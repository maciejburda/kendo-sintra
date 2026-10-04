import { club } from '../i18n/club';
import { ui, type Lang } from '../i18n/ui';

const address = {
  '@type': 'PostalAddress',
  streetAddress: club.venue.street,
  postalCode: club.venue.postalCode,
  addressLocality: club.venue.city,
  addressCountry: club.country,
} as const;

/** The club as a sports activity location — home page and contact.
    The club writes its name differently in each language, so the schema carries
    the page's form as `name` and the other as `alternateName`: one organisation,
    two labels, rather than two organisations. */
export function clubSchema(site: URL, lang: Lang = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': new URL('#club', site).href,
    name: ui[lang]['club.name'],
    alternateName: ui[lang === 'en' ? 'pt' : 'en']['club.name'],
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

/** Single source of truth for club data — used in the footer, contact band and JSON-LD. */
export const club = {
  name: 'Kendo Club Sintra',
  katakana: 'シントラ',
  email: 'kendosintra@gmail.com',
  phone: '+351 930 581 832',
  phoneHref: '+351930581832',
  country: 'PT',
  countryName: 'Portugal',

  /**
   * Training venue. The club moved back here in early October 2026, after a
   * temporary spell at CAISL while this hall was unavailable. The footer,
   * JSON-LD, map and contact section all take the address from here, so that
   * nobody drives to the wrong place.
   */
  venue: {
    /** Display name is translated — see `venue.name` in i18n/ui.ts. */
    street: 'Estrada Nacional No 9, Quinta da Beloura II',
    postalCode: '2710-697',
    city: 'Sintra',
    /**
     * Map links search for the SCHOOL, not for the club.
     *
     * They used to search for "Kendo Club Sintra", assuming the club had a
     * Google listing. It has none, so Google resolved nothing and the embed
     * rendered with no pin at all. The school does have a listing, so querying
     * it gives a labelled marker on the actual campus. Verified in iOS Safari:
     * the pin reads "TASIS Portugal International School".
     *
     * If that listing ever disappears, `q=38.7578125,-9.3869356` is the
     * fallback — a lat/lon query always drops a marker, just without a label.
     */
    maps: 'https://www.google.com/maps/search/?api=1&query=TASIS+Portugal+International+School%2C+Sintra',
    mapsEmbed: 'https://maps.google.com/maps?q=TASIS+Portugal+International+School,+Sintra&z=16&output=embed',
    /**
     * Fed to the JSON-LD, so this is what Google is told the club's location is.
     * TASIS Portugal, Rua do Mato das Cruzadas, Quinta da Beloura II — confirmed
     * by reverse geocoding, which returns postcode 2710-697, the club's own.
     * The previous value was 3.9 km away in Rio de Mouro.
     *
     * TODO (club): a second TASIS entry sits 227 m north on Avenida de Cascais.
     * If the gym is reached from that side, move this.
     */
    geo: { lat: 38.7578125, lon: -9.3869356 },
  },

  facebook: 'https://www.facebook.com/people/TASIS-Kendo-Club/61565495708778',
  instagram: 'https://www.instagram.com/kendoclubsintra',
  /**
   * Google Forms signup link. NOT LINKED from the site at present: the club
   * asks people to email or call instead of running a standing signup form.
   * Kept here so that putting it back is one edit plus a button.
   */
  signupForm: 'https://forms.gle/qmuZEBKorTBT4AMP7',
  /**
   * Google Analytics 4, carried over from v1. GA SETS COOKIES (_ga, _ga_*),
   * which is why v1 had a Termly banner. Empty = analytics disabled.
   * See README, section "Cookies and consent".
   */
  ga4: 'G-PWJYVVVPNS',
  hours: [
    { day: 'days.mon', open: '19:00', close: '21:00' },
    { day: 'days.tue', open: null, close: null },
    { day: 'days.wed', open: '19:00', close: '21:00' },
    { day: 'days.thu-sun', open: null, close: null },
  ],
  fees: { adults: 20, kids: 10, visiting: 10, course: 60, currency: 'EUR' },
} as const;

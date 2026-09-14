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
    name: 'Quinta da Beloura II — TASIS Portugal International School',
    short: 'Quinta da Beloura II',
    street: 'Estrada Nacional No 9, Quinta da Beloura II',
    postalCode: '2710-697',
    city: 'Sintra',
    maps: 'https://www.google.com/maps/search/?api=1&query=TASIS+Portugal+International+School+Estrada+Nacional+9+Quinta+da+Beloura+2710-697+Sintra',
    /** TODO (club): confirm the exact coordinates of the entrance to the hall. */
    geo: { lat: 38.7565, lon: -9.3389 },
    mapsEmbed: 'https://maps.google.com/maps?q=TASIS+Portugal+International+School,+Estrada+Nacional+9,+2710-697+Sintra&z=16&output=embed',
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
  fees: { adults: 20, kids: 10, visiting: 10, currency: 'EUR' },
} as const;

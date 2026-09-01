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
   * CURRENT venue. Until the end of the year training is at CAISL, because
   * Quinta da Beloura II (TASIS) is unavailable. The footer, JSON-LD and map all
   * take the address from here, so that nobody drives to the wrong place.
   */
  venue: {
    name: 'CAISL — Carlucci American International School of Lisbon',
    short: 'CAISL',
    street: 'Rua António dos Reis 95, Linhó',
    postalCode: '2710-301',
    city: 'Sintra',
    maps: 'https://www.google.com/maps/search/?api=1&query=CAISL+Rua+Ant%C3%B3nio+dos+Reis+95+Linh%C3%B3+2710-301+Sintra',
    /** TODO (club): confirm the exact coordinates of the entrance to the hall. */
    geo: { lat: 38.7793, lon: -9.3690 },
    mapsEmbed: 'https://maps.google.com/maps?q=Carlucci+American+International+School+of+Lisbon,+Rua+Ant%C3%B3nio+dos+Reis+95,+2710-301+Sintra&z=16&output=embed',
  },

  /** TARGET venue, from the end of the year. For now only mentioned in the copy. */
  venueFrom: {
    name: 'Quinta da Beloura II (TASIS)',
    street: 'Estrada Nacional No 9, Quinta da Beloura II',
    postalCode: '2710-697',
    city: 'Sintra',
  },

  facebook: 'https://www.facebook.com/people/TASIS-Kendo-Club/61565495708778',
  /** Page URL in the format the Facebook Page Plugin accepts. */
  facebookPluginHref: 'https://www.facebook.com/profile.php?id=61565495708778',
  instagram: 'https://www.instagram.com/kendoclubsintra',
  /**
   * Google Forms signup link (the short https://forms.gle/... form).
   * Empty = the site falls back to an email contact instead of the button.
   * This is the ONLY place to change to switch signups on.
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
  course: {
    startISO: '2026-09-16',
    total: 60,
    months: 3,
    /** Wednesday: beginners from 19:00, advanced join at 19:30.
        Confirmed by the club. */
    day: 'Wednesday',
    startTime: '19:00',
    endTime: '21:00',
    /** The time at which advanced practitioners join the session. */
    advancedJoin: '19:30',
  },
} as const;

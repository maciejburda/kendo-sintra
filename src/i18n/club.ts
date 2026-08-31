/** Jedno zrodlo prawdy dla danych klubu — uzywane w stopce, kontakcie i JSON-LD. */
export const club = {
  name: 'Kendo Club Sintra',
  katakana: 'シントラ',
  email: 'kendosintra@gmail.com',
  phone: '+351 930 581 832',
  phoneHref: '+351930581832',
  country: 'PT',
  countryName: 'Portugal',

  /**
   * OBECNA sala. Do konca roku treningi sa w CAISL, bo Quinta da Beloura II
   * (TASIS) jest niedostepna. Stopka, JSON-LD i mapa biora adres stad, zeby
   * nikt nie pojechal w zle miejsce.
   */
  venue: {
    name: 'CAISL — Carlucci American International School of Lisbon',
    short: 'CAISL',
    street: 'Rua António dos Reis 95, Linhó',
    postalCode: '2710-301',
    city: 'Sintra',
    maps: 'https://www.google.com/maps/search/?api=1&query=CAISL+Rua+Ant%C3%B3nio+dos+Reis+95+Linh%C3%B3+2710-301+Sintra',
    /** TODO (klub): potwierdzic dokladne wspolrzedne wejscia do sali. */
    geo: { lat: 38.7793, lon: -9.3690 },
    mapsEmbed: 'https://maps.google.com/maps?q=Carlucci+American+International+School+of+Lisbon,+Rua+Ant%C3%B3nio+dos+Reis+95,+2710-301+Sintra&z=16&output=embed',
  },

  /** DOCELOWA sala, od konca roku. Na razie tylko wzmianka w tresci. */
  venueFrom: {
    name: 'Quinta da Beloura II (TASIS)',
    street: 'Estrada Nacional No 9, Quinta da Beloura II',
    postalCode: '2710-697',
    city: 'Sintra',
  },

  facebook: 'https://www.facebook.com/people/TASIS-Kendo-Club/61565495708778',
  /** Adres strony w formacie, ktory przyjmuje wtyczka Page Plugin. */
  facebookPluginHref: 'https://www.facebook.com/profile.php?id=61565495708778',
  instagram: 'https://www.instagram.com/kendoclubsintra',
  /**
   * Link do formularza zapisu w Google Forms (krotki https://forms.gle/...).
   * Puste = na stronie pokazuje sie zastepczy kontakt mailowy zamiast przycisku.
   * To JEDYNE miejsce, ktore trzeba zmienic, zeby zapisy ruszyly.
   */
  signupForm: 'https://forms.gle/qmuZEBKorTBT4AMP7',
  /**
   * Google Analytics 4, przeniesione z v1. GA USTAWIA COOKIES (_ga, _ga_*),
   * dlatego v1 mial banner Termly. Puste = analityka wylaczona.
   * Patrz README, sekcja "Cookies i zgoda".
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
    /** Sroda: poczatkujacy od 19:00, zaawansowani dolaczaja o 19:30.
        Potwierdzone przez klub. */
    day: 'Wednesday',
    startTime: '19:00',
    endTime: '21:00',
    /** Godzina, o ktorej do sesji dolaczaja zaawansowani. */
    advancedJoin: '19:30',
  },
} as const;

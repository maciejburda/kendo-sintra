/** Jedno zrodlo prawdy dla danych klubu — uzywane w stopce, kontakcie i JSON-LD. */
export const club = {
  name: 'Kendo Club Sintra',
  katakana: 'シントラ',
  email: 'kendosintra@gmail.com',
  phone: '+351 930 581 832',
  phoneHref: '+351930581832',
  street: 'Estrada Nacional No 9, Quinta da Beloura II',
  postalCode: '2710-697',
  city: 'Sintra',
  country: 'PT',
  countryName: 'Portugal',
  geo: { lat: 38.7526, lon: -9.3253 }, // TODO: potwierdzic dokladne wspolrzedne dojo
  maps: 'https://www.google.com/maps/search/?api=1&query=Estrada+Nacional+No+9+Quinta+da+Beloura+II+2710-697+Sintra+Portugal',
  /** Embed bez klucza API. Ladowany dopiero po kliknieciu — patrz README. */
  mapsEmbed: 'https://maps.google.com/maps?q=Estrada+Nacional+No+9,+Quinta+da+Beloura+II,+2710-697+Sintra,+Portugal&z=16&output=embed',
  facebook: 'https://www.facebook.com/people/TASIS-Kendo-Club/61565495708778',
  instagram: 'https://www.instagram.com/kendoclubsintra',
  /**
   * Link do formularza zapisu w Google Forms (krotki https://forms.gle/...).
   * Puste = na stronie pokazuje sie zastepczy kontakt mailowy zamiast przycisku.
   * To JEDYNE miejsce, ktore trzeba zmienic, zeby zapisy ruszyly.
   */
  signupForm: 'https://forms.gle/qmuZEBKorTBT4AMP7',
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
    /** Dzien tygodnia kursu dla poczatkujacych. Godzin celowo brak — klub
        trenuje w srody 19:00-21:00, ale nie potwierdzil, czy kurs idzie
        w tym samym oknie. */
    day: 'Wednesday',
  },
} as const;

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
     * The club's own Google listing — "Kendo Club Sintra",
     * CID 0xd1ec53ab8a61bd3:0x79ac4be4dd7efa09.
     * Human-readable: https://maps.app.goo.gl/GbHnYofAKWtxs19H7
     *
     * The embed is the code Google's own Share -> Embed a map produces, so it
     * carries the place itself rather than a query to be matched.
     *
     * KNOWN ISSUE, 2026-10-05: it renders the right area with NO MARKER. So do
     * a name query, a CID query, and this. Only a raw `q=<lat>,<lng>` draws a
     * pin, and that pin is anonymous. Since this is Google's own code for the
     * club's own listing, the cause is almost certainly that the listing is not
     * yet served on the map surface — newly created or recently moved, waiting
     * on Google. Nothing here to fix.
     *
     * When it propagates, the marker and the place card appear on their own,
     * with no change to this file. Worth re-checking after a few days; if it is
     * still blank, fall back to
     * `https://maps.google.com/maps?q=38.7588745,-9.3869149(Kendo+Club+Sintra)&z=16&output=embed`,
     * which pins reliably but shows no name and never a rating.
     *
     * The `pb` string is an opaque encoding; do not hand-edit it beyond the
     * language swap in ContactBand. To regenerate: Google Maps -> the listing
     * -> Share -> Embed a map.
     */
    maps: 'https://maps.google.com/?cid=8767466020924226057',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.210554150551!2d-9.38948982345438!3d38.758874471753906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec53ab8a61bd3%3A0x79ac4be4dd7efa09!2sKendo%20Club%20Sintra!5e0!3m2!1sen!2spt!4v1791231029484!5m2!1sen!2spt',
    /** From the listing, so the JSON-LD and the pin agree. */
    geo: { lat: 38.7588745, lon: -9.3869149 },
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

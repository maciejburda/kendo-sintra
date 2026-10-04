# kendosintra.pt — v2

Static site for Kendo Club Sintra. Astro + Tailwind, built to plain HTML and
hosted on GitHub Pages.

All JavaScript is inline and the site is built as progressive enhancement:
without JS the nav stays expanded, gallery thumbnails are plain links to the
full image, and every page still works. The home page ships ~3.2 KB of inline
JS in four scripts — the consent API (953 B), the collapsible menu (810 B),
the consent banner (784 B) and the map loader (670 B). No external script tags.

## Requirements

Node **22.12+** (`.nvmrc` pins 22; built on 22.23.2). Astro 7 will not run on
Node 20. CI uses 22 too — see `.github/workflows/deploy.yml` and the
[Astro version](#astro-version) section.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # preview the built site
```

## Structure

```
src/
  content/pages/{en,pt}/*.md   page copy — EDIT HERE
  assets/photos/*.jpg          gallery (every file is picked up automatically)
  assets/fonts/                katakana subset, SIL OFL
  i18n/ui.ts                   all interface strings, EN + PT
  i18n/club.ts                 address, phone, hours, prices — SINGLE source of truth
  styles/global.css            colour tokens and type scale
  components/                  Header, Footer, Hero, Home, PageShell, Prose,
                               ContactBand, ContactStrip, FeeCards, GalleryGrid,
                               ConsentBanner, Emblem, Icon
  pages/                       routes (EN at /, PT at /pt/)
```

**To change hours, prices or the phone number:** `src/i18n/club.ts` only. The
values flow from there into the footer, the contact band, the facts grid and the
JSON-LD for Google. They exist nowhere else.

## Visual system

Derived from the club logo and from an accessibility review. Do not change the
values without re-checking contrast — the reasoning is recorded below.

### Colours

| Token | Hex | Used for |
|---|---|---|
| `navy` | `#212B60` | brand navy, headings, dark sections |
| `red` | `#C9202F` | brand red: on white, and as a block with white text |
| `red-on-navy` | `#E84B52` | **only** type and icons on navy |
| `n-050 … n-700` | `#F5F6FA` `#E4E6EF` `#8B93B2` `#656D90` `#4E5679` | ramp on white |
| `on-navy-100/300/line` | `#B9BFDA` `#8F97BC` `#3B4477` | ramp on navy |

**Why two reds.** `#C9202F` on navy gives 2.36:1 contrast and fails WCAG AA even
at display size. `#E84B52` is the same red lightened to 3.52:1. Never use `red`
as text on navy.

**Why `n-300` and `on-navy-300` look alike.** Because they are calibrated for
different grounds. `#8B93B2` on navy gives 4.38:1, just under the threshold —
which is why both exist. This is not a duplicate to tidy up.

### Typography

Scale: `12 14 16 19 25 34 46 62 82 128` — classes `text-12` … `text-128`.

- **Anton** — display only (class `.display`)
- **Archivo** — interface and all running text
- **Zen Kaku Gothic New** — the katakana シントラ only (class `.jp`)

Fonts are self-hosted. Zen Kaku is trimmed to one subset and one weight — the
full package is 121 subsets and 3.25 MB for four characters.

## Three things to wire up

### 1. Signup form

`src/i18n/club.ts` → `signupForm`. The form exists and works, but **nothing on
the site links to it**: the club asks people to email or call instead, which is
what every call to action now says. The field is kept so that putting the form
back is one edit plus a button.

> **Form status.** Adults only, so there is no under-18 branch and no guardian
> contact. It asks for: Full Name, Date of birth, and where you heard about the
> club, plus a Google-verified email address. The health question was removed.
> Consent is a required single-option checkbox, so refusing and submitting are
> mutually exclusive — which is what makes consent a usable legal basis in
> `privacy.md`.
>
> Email collection is set to "verified", which forces a Google login and will
> lose some applicants. Deliberate or not, it is worth a look.

**Why an outbound button rather than a form on the page**, if it is ever linked
again. A Google Form can only be embedded in an iframe. A button opens the form
in a new tab, so data reaches Google only when someone deliberately clicks.

Fields for building the form: **`docs/google-form.md`**.

If you ever prefer a form natively on the page, that needs a backend such as
Formspree — at which point the `<form>` version comes back, and it can be
recovered from git history (the commit "Signup card with a button through to
Google Forms" removed it).

### 2. Map

An embedded Google Map (`club.venue.mapsEmbed`, keyless embed) on the home page
and `/contact`. It targets the **club's own Maps listing** — searching by address
alone landed on someone else's premises.

It loads **only after consent** — see [Cookies and consent](#cookies-and-consent).

### 3. Analytics

**Google Analytics 4, `G-PWJYVVVPNS`** — carried over from v1, `club.ga4`.
Injected only in the production build; disabled on the preview URL so test
traffic does not pollute the stats.

GA **sets cookies** (`_ga`, `_ga_*`), so it starts **only after consent** — see
below. An empty `club.ga4` disables analytics entirely.

## Cookies and consent

The site sets no cookies of its own, but it loads **two things from other
companies**:

| Source | Where |
|---|---|
| Google Analytics 4 | all pages (production only) |
| Google Map | home page, `/contact` |

**Both are blocked until consent is given.** Banner:
`src/components/ConsentBanner.astro`; the consent API lives in `<head>` in
`Base.astro`.

### How it works

- `window.KCS` — `get()`, `ok()`, `set(v)`, `onGrant(fn)`. The choice is kept in
  **localStorage**, not a cookie: merely remembering the decision does not
  require consent.
- GA and the map register through `KCS.onGrant()` and do nothing until consent
  exists. Until then the HTML contains **not a single `<iframe>`** — verified.
- On refusal the map shows an explanation and a **"load anyway"** button, which
  loads *only that one element for that visit* and does **not** enable analytics.
  Otherwise clicking the map would silently opt you into GA.
- The **"Cookie settings"** link in the footer reopens the banner.
- Accept and decline carry equal visual weight — no dark patterns.

Written from scratch (~2 KB) instead of Klaro (~30 KB), so it matches the rest of
the site: no dependencies, uses the project tokens, bilingual.

**This does not replace a legal review.** The mechanism is done; the consent
wording, and whether one category is enough rather than splitting analytics from
external content, should be confirmed by whoever is responsible for GDPR.

## Photographs

`src/assets/photos/` holds **68 photos** pulled from the v1 CDN at 2000px:

- **24** from the AiP Photography shoot (2025-12-10) — everyone in bogu, faces behind masks
- **44** from the competition (April 2025) — children and adults

These are **not the originals** — the one.com file manager requires a login, so
I downloaded the highest resolution the CDN serves without upscaling. If you have
access to the originals, swapping them in is a matter of copying files over the
same names.

Alt text lives in `src/data/gallery.ts`, written by hand and bilingually. It is
not generated from filenames — a screen reader would then read out "aip 09".

### Likeness and minors — resolved

The club holds consent from everyone shown, and from a parent or guardian where
the subject is under 18. The switch below therefore stays `true`.

**10 of the 68 photos show identifiable faces of minors outside the mask.**
They are marked `faces: true` in `src/data/gallery.ts`:

```
dojo-2103, dojo-2103-1, dojo-2105-3, dojo-2110-2, dojo-2111,
dojo-2111-1, dojo-2115, dojo-2116, dojo-2118-1, dojo-2119
```

These photos **are already public on kendosintra.pt**, so v2 exposes nothing new.
One thing to keep in mind that v1 did not have: the repository is public and
**git history is permanent**. Removing a photo from the site is easy; purging it
from commit history is not. If a consent is ever withdrawn, deleting the file in
a new commit will not remove it from history.

The switch is in `src/components/GalleryGrid.astro`:

```ts
const SHOW_IDENTIFIABLE_MINORS = true;   // false hides those 10 photos
```

Defaults to `true`, so as not to change the status quo without your decision.

## Structured data

`src/data/schema.ts` — one JSON-LD schema:

- **SportsActivityLocation** (home, contact) — address, hours, geo, socials

A Course schema was dropped along with the fixed course dates: the club runs
beginner courses "a few times a year" and will not commit to a start date.

The hours in the schema come from `club.hours`: Monday and Wednesday, 19:00 to
21:00, confirmed by the club. On Wednesdays beginners start at 19:00 and the
more experienced join at 19:30 — a split too fine for `openingHoursSpecification`,
so it lives in the page copy instead.

## News — removed

There is no news section. It was built twice — Markdown posts, then a Facebook
plugin — and both are gone, the plugin first (see the commits "News as a
Facebook feed" and "Withdraw the Facebook feed, back to Markdown posts") and
then the Markdown version with it ("Remove News, put FAQ in the menu").

Why the Facebook plugin went: it looks like a foreign element, because an iframe
cannot be styled; its fixed height left a large gap under the heading; content
inside an iframe is not indexed as yours, so posts stopped building the domain's
standing. On top of that came a dependency on Meta and a third cookie source.

Why the Markdown version went too: a club that trains twice a week does not
produce copy on a schedule, and a news section whose newest item is six months
old reads worse than no news section. The nav slot went to FAQ. Instagram and
Facebook are linked in the footer and carry the day-to-day.

If it ever comes back, it is a content collection plus two routes — the shape is
in the history.

## Gallery and lightbox

`src/components/GalleryGrid.astro` — a grid plus a lightbox built on the native
`<dialog>`. Same pattern as the menu: **without JavaScript a thumbnail is a plain
link to the full image**, so the gallery still works, just without the overlay.

What `<dialog>` gives for free: a focus trap, Escape, `inert` on the background
for screen readers, and `::backdrop`. The script only adds navigation.

- ← → arrow keys, buttons, swipe on touch
- wraps at both ends; neighbouring photos are preloaded
- focus returns to the thumbnail you started from
- a separate 1600px variant for the lightbox (thumbnails cap at 1200)
- only a counter under the photo ("7 of 68"); the description is visually hidden
  but stays in the image's `alt` and in an `aria-live` region, so a screen reader
  announces what changed when arrowing through
- the script weighs ~2.5 KB and **loads only on the gallery page**

## OG image

`public/og.jpg` (1200×630) is the card shown when the site is shared on Facebook
and other social media. Without it the link shows an empty card, and Facebook is
the club's main channel.

Generator: `tools/og-generator.html` — the regeneration steps are in the comment
at the top of the file. It draws onto a canvas in the browser, because sharp
rasterises SVG through librsvg, which only reads system fonts; the woff2 files
from `@fontsource` would not load and the brand typography would not survive.

**Regenerate after changing the course date** — the date is baked into the image.

## Deploy

Repo: **https://github.com/maciejburda/kendo-sintra** (public — Pages from a
private repo requires a paid plan). Pushing to `main` triggers
`.github/workflows/deploy.yml`.

### Two build modes

The workflow has a `PRODUCTION` switch at the top:

| `PRODUCTION` | URL | Behaviour |
|---|---|---|
| `'false'` | `maciejburda.github.io/kendo-sintra/` | prefix `/kendo-sintra/`, all pages `noindex`, no GA |
| `'true'` (now) | `kendosintra.pt` | adds `CNAME`, drops the prefix, indexing and GA on |

The preview carried `noindex` deliberately — without it, it would have competed
with the production domain in Google as duplicate content. Note that the switch
is read indirectly: `Base.astro` decides from `BASE_URL !== '/'`, which the
workflow sets from `PRODUCTION`. So `ASTRO_BASE=/ npm run build` locally produces
exactly what CI produces for production, which is how to check a cutover before
making it.

The site is prefix-aware: `localePath()` and the `asset()` helper prepend
`import.meta.env.BASE_URL`, so it works under any directory with no code changes.

### Cutover to the custom domain — done 2026-10-04

Kept because the same steps apply to any future move, and because step 4 is not
in GitHub's own instructions.

1. In one.com, replace the `A` and `AAAA` records on the root and on `www`:

   | Type | Name | Value |
   |---|---|---|
   | A ×4 | *(root)* | `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153` |
   | AAAA ×4 | *(root)* | `2606:50c0:8000::153` `8001::153` `8002::153` `8003::153` |
   | CNAME | `www` | `maciejburda.github.io` |

   Leave `MX` and the four `._domainkey` CNAMEs alone — they are email, not web,
   and deleting them stops mail silently. Do not add a `CAA` record: one that
   omits GitHub's issuer blocks the certificate.

2. Wait for propagation. Ask the nameserver directly, because a machine's own
   resolver cache will lie for an hour or more after the change:
   `dig @ns01.one.com kendosintra.pt +short`.
3. In `.github/workflows/deploy.yml` change `PRODUCTION: 'false'` to `'true'`, push.
4. **Set the custom domain on the repository.** This is the step that is easy to
   miss: with an Actions-based deploy, a `CNAME` file in the uploaded artifact
   does *not* register the domain, even though the build ships it and the run is
   green. Until the repo itself carries the domain, GitHub answers every request
   with "Site not found". Settings → Pages → Custom domain, or
   `gh api -X PUT repos/<owner>/<repo>/pages -f cname=kendosintra.pt`.
5. **Deploy once more** (`gh workflow run deploy.yml`). Setting the domain does
   not republish what is already deployed, so the 404 persists until a run
   finishes after step 4.
6. Settings → Pages → enable **Enforce HTTPS**. Setting the domain clears this
   flag, because no certificate exists yet; GitHub issues one once DNS resolves,
   which took about a minute here but is documented as up to 24 h.
7. Search Console: submit `https://kendosintra.pt/sitemap-index.xml`.
8. Verify the domain under Settings → Pages → *Verified domains*. The repo is
   public: without verification, anyone could claim the domain on their own
   Pages site if this one were ever removed while DNS still pointed at GitHub.
9. Cancel the one.com hosting **only** after confirming everything works —
   including any `@kendosintra.pt` mailbox, which goes with the subscription.

Steps 3 to 5 take the site down for as long as they take, if DNS has already
moved. Doing 3 and 4 *before* the DNS change avoids that entirely: GitHub sits
ready on the domain while one.com is still serving it, and visitors cross over
as their resolvers expire. The cost is that the preview URL starts redirecting
to the new domain, so verify the production build locally first with
`ASTRO_BASE=/ npm run build`.

`deploy/CNAME` sits outside `public/` deliberately — it is copied in only for a
production build. If it lived in `public/`, GitHub would redirect the preview URL
to a domain that DNS does not yet point at, and the site would vanish before
cutover.

### Old URLs

`/home/gallery`, `/home/fees`, `/home/beginner-s-course`, `/home/what-is-kendo`
get stubs with `meta refresh` + `rel=canonical` (GitHub Pages has no server-side
redirects). They are excluded from the sitemap. Do not delete them — they hold
rankings and links from Facebook.

## Astro version

Built on **Astro 7.2.10**, which requires **Node >= 22.12**. `.nvmrc` pins 22 and
CI uses 22, so local and CI match.

Upgraded from Astro 5.18.2, which had eight open advisories (XSS in `define:vars`,
spread attributes, view transitions; SSRF in the prerendered error page). None of
them was realistically exploitable on a fully static site with no islands and no
user-supplied data, but that branch no longer receives fixes. `npm audit` now
reports **0 vulnerabilities**.

The 5 -> 7 migration needed no source changes: same pages, same output, no
deprecation warnings. Content, components and styles were untouched.

If you need to go back to Node 20 for another project:
`brew unlink node@22 && brew link node@20` (node@20 is still installed).

## For the club to fill in

Marked in the source with `TODO (club)` — `grep -rn "TODO (club)" src/`:

- [ ] Bio of sensei Rogier van Bijnen (`about.md`, EN and PT)
- [ ] Founding year and member count (`about.md`, EN and PT)
- [ ] Exact dojo coordinates (`src/i18n/club.ts`, `geo` field)

Open but not marked, because the copy reads fine without them:

- [ ] Minimum age for children — the question was pulled out of `faq.md` rather
      than left with an empty answer. Put it back when there is one.
- [ ] Instructors page — the Word file with the teachers' details never arrived,
      and nor did the group photograph
- [ ] Logo with the wordmark in outlines — we only have the symbol. The header
      sets the name in type, so this is not blocking, but it will be needed for
      print material.

`draft: true` is documentation, not behaviour — nothing in the build reads it.
It marks a page whose Portuguese is mine rather than the club's. The translations
are structurally checked (same headings, same links, same blocks as the English,
pre-1990 spelling throughout), but structure is not idiom, and a club member
reading them once would settle it.

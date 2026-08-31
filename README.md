# kendosintra.pt — v2

Statyczna strona Kendo Club Sintra. Astro + Tailwind, budowana do czystego HTML
i hostowana na GitHub Pages. Zero cookies, zero zapytań do zewnętrznych domen.
Jedyny JavaScript to ~810 B inline na zwijane menu — i to jako progressive
enhancement: bez JS nawigacja pozostaje rozwinięta i w pełni działa.

## Wymagania

Node **20.3+** (obecnie zbudowane na 20.20.2). W CI używamy 22 — patrz
`.github/workflows/deploy.yml` i sekcję [Wersja Astro](#wersja-astro-do-decyzji).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # podgląd zbudowanej wersji
```

## Struktura

```
src/
  content/pages/{en,pt}/*.md   treść stron — TU SIĘ EDYTUJE
  content/news/{en,pt}/*.md    aktualności
  assets/photos/*.jpg          galeria (każdy plik trafia do niej automatycznie)
  assets/fonts/                subset katakany, SIL OFL
  i18n/ui.ts                   wszystkie teksty interfejsu, EN + PT
  i18n/club.ts                 adres, telefon, godziny, cennik — JEDNO źródło prawdy
  styles/global.css            tokeny koloru i skala pisma
  components/                  Header, Footer, Hero, ContactBand, Emblem, Icon
  pages/                       trasy (EN na /, PT na /pt/)
```

**Zmiana godzin, cennika czy telefonu:** wyłącznie `src/i18n/club.ts`. Wartości
lecą stamtąd do stopki, pasa kontaktowego, siatki faktów i danych JSON-LD dla
Google. Nie ma ich nigdzie indziej.

## System wizualny

Wynika z logo klubu i z przeglądu dostępności. Nie zmieniaj wartości bez
sprawdzenia kontrastu — powody są zapisane niżej.

### Kolory

| Token | Hex | Do czego |
|---|---|---|
| `navy` | `#212B60` | granat marki, nagłówki, ciemne sekcje |
| `red` | `#C9202F` | czerwień marki: na bieli i jako plama z białym tekstem |
| `red-on-navy` | `#E84B52` | **wyłącznie** typografia i ikony na granacie |
| `n-050 … n-700` | `#F5F6FA` `#E4E6EF` `#8B93B2` `#656D90` `#4E5679` | rampa na bieli |
| `on-navy-100/300/line` | `#B9BFDA` `#8F97BC` `#3B4477` | rampa na granacie |

**Dlaczego dwie czerwienie.** `#C9202F` na granacie daje kontrast 2.36:1 i nie
przechodzi WCAG AA nawet w rozmiarze display. `#E84B52` to ta sama czerwień
rozjaśniona do 3.52:1. Nigdy nie używaj `red` jako tekstu na granacie.

**Dlaczego `n-300` i `on-navy-300` wyglądają podobnie.** Bo są skalibrowane pod
różne podłoża. `#8B93B2` na granacie daje 4.38:1, czyli tuż pod progiem — dlatego
istnieją obie. To nie jest duplikat do posprzątania.

### Typografia

Skala: `12 14 16 19 25 34 46 62 82 128` — klasy `text-12` … `text-128`.

- **Anton** — wyłącznie display (klasa `.display`)
- **Archivo** — interfejs i cały tekst ciągły
- **Zen Kaku Gothic New** — wyłącznie katakana シントラ (klasa `.jp`)

Fonty są self-hostowane. Zen Kaku ograniczyliśmy do jednego subsetu i jednej
grubości — pełna paczka to 121 subsetów i 3.25 MB dla czterech znaków.

## Trzy rzeczy do podłączenia

### 1. Formularz zapisu

`src/i18n/club.ts` → `signupForm`. Wklej krótki link `https://forms.gle/...`
i zapisy ruszają. To jedyne miejsce do zmiany.

Dopóki pole jest puste, w pasie kontaktowym pokazuje się karta z informacją
i przyciskiem `mailto:` z gotowym tematem — nie martwy formularz.

**Dlaczego przycisk wychodzący, a nie formularz na stronie.** Google Form da
się osadzić wyłącznie w iframe, a ten ustawia cookies Google i przywraca
obowiązek bannera zgody — czyli dokładnie to, czego pozbyliśmy się analityką
bezcookie'ową. Przycisk otwiera formularz w nowej karcie i strona zostaje
w 100% wolna od cookies. Pod przyciskiem jest to napisane wprost.

Pola do założenia formularza: **`docs/google-form.md`**.

Gdybyście kiedyś woleli formularz natywnie na stronie, wymaga to backendu
w rodzaju Formspree — wtedy wraca wersja z `<form>`, którą można odtworzyć
z historii gita (commit `contact-band-form-map`).

### 2. Mapa

`src/components/ContactBand.astro` — obecnie schemat rysowany wektorowo plus
link „Open in Google Maps". Ten sam problem co wyżej: żywy iframe Map ustawia
cookies. Bez cookies: statyczny obrazek mapy (Mapbox/Geoapify mają darmowe
plany na static images) albo click-to-load pod placeholderem.

### 3. Analityka

Nie ma żadnej. Rekomendacja: **Cloudflare Web Analytics** — darmowa, bez cookies,
jeden `<script>` w `src/layouts/Base.astro`. Alternatywy: GoatCounter, Umami.
Po podłączeniu uzupełnij nazwę w `src/content/pages/en/privacy.md`.

## Zdjęcia

`src/assets/photos/` zawiera **68 zdjęć** ściągniętych z CDN-u v1 w 2000px:

- **24** z sesji AiP Photography (10.12.2025) — wszyscy w bogu, twarze za maskami
- **44** z zawodów (kwiecień 2025) — dzieci i dorośli

To **nie są oryginały** — file manager one.com wymaga logowania, więc pobrałem
najwyższą rozdzielczość, jaką CDN oddaje bez upscalingu. Jeśli masz dostęp do
oryginałów, podmiana to skopiowanie plików pod tymi samymi nazwami.

Alt-teksty są w `src/data/gallery.ts`, pisane ręcznie i dwujęzycznie. Nie są
generowane z nazw plików — czytnik ekranu odczytałby wtedy „aip 09".

### Wizerunek — do decyzji klubu

**11 z 68 zdjęć pokazuje rozpoznawalne twarze osób nieletnich poza maską.**
Są oznaczone `faces: true` w `src/data/gallery.ts`:

```
dojo-2103, dojo-2103-1, dojo-2105-3, dojo-2110-2, dojo-2111,
dojo-2111-1, dojo-2115, dojo-2116, dojo-2118-1, dojo-2119
```

Te zdjęcia **są już publiczne na kendosintra.pt**, więc v2 niczego nowego nie
ujawnia — ale dochodzą dwie rzeczy, których w v1 nie było:

1. Repozytorium jest publiczne, a **historia gita jest trwała**. Usunięcie
   zdjęcia ze strony jest łatwe; wyczyszczenie go z historii commitów nie.
2. RODO wymaga zgody rodziców na publikację wizerunku nieletniego. Nie wiem,
   czy klub takie zgody zebrał.

Przełącznik jest w `src/components/GalleryGrid.astro`:

```ts
const SHOW_IDENTIFIABLE_MINORS = true;   // false ukrywa te 11 zdjęć
```

Domyślnie `true`, żeby nie zmieniać stanu zastanego bez Waszej decyzji.

## Galeria i powiększanie

`src/components/GalleryGrid.astro` — siatka plus powiększenie na natywnym
`<dialog>`. Ten sam wzorzec co menu: **bez JavaScriptu miniatura jest zwykłym
linkiem do pełnego zdjęcia**, więc galeria działa dalej, tylko bez nakładki.

Co daje `<dialog>` za darmo: pułapkę focusu, Escape, `inert` na tle dla
czytników ekranu i `::backdrop`. Skrypt dokłada tylko nawigację.

- strzałki ← → na klawiaturze, przyciski, swipe na dotyku
- zawijanie na obu końcach; sąsiednie zdjęcia są wstępnie ładowane
- focus wraca na miniaturę, od której zaczęto
- osobny wariant 1600px pod powiększenie (miniatury mają maks. 1200)
- pod zdjęciem tylko numer („7 z 68"); opis jest ukryty wizualnie, ale zostaje
  w `alt` obrazu i w obszarze `aria-live`, żeby czytnik ekranu mówił, co się
  zmieniło przy przeskakiwaniu strzałkami
- skrypt waży ~2.5 KB i **ładuje się wyłącznie na stronie galerii** —
  strona główna zostaje przy 810 B

## Obrazek OG

`public/og.jpg` (1200×630) to karta pokazywana przy udostępnieniu strony na
Facebooku i w innych social mediach. Bez niego link pokazuje pustą kartę, a
Facebook jest głównym kanałem klubu.

Generator: `tools/og-generator.html` — instrukcja przegenerowania jest
w komentarzu na górze pliku. Rysuje na canvasie w przeglądarce, bo sharp
składa SVG przez librsvg, który czyta wyłącznie fonty systemowe; woff2
z `@fontsource` by się nie załadował i typografia marki by się nie odtworzyła.

**Przegeneruj po zmianie daty kursu** — data jest wypalona w obrazku.

## Deploy

Repo: **https://github.com/maciejburda/kendo-sintra** (publiczne — Pages z repo
prywatnego wymaga płatnego planu). Push na `main` uruchamia
`.github/workflows/deploy.yml`.

### Dwa tryby budowania

Workflow ma na górze przełącznik `PRODUCTION`:

| `PRODUCTION` | Adres | Zachowanie |
|---|---|---|
| `'false'` (teraz) | `maciejburda.github.io/kendo-sintra/` | prefiks `/kendo-sintra/`, wszystkie strony z `noindex` |
| `'true'` | `kendosintra.pt` | dokłada `CNAME`, zdejmuje prefiks, indeksowanie włączone |

Podgląd ma `noindex` celowo — bez tego konkurowałby w Google z docelową domeną
jako duplikat treści.

Strona jest świadoma prefiksu: `localePath()` i helper `asset()` doklejają
`import.meta.env.BASE_URL`, więc działa pod dowolnym katalogiem bez zmian w kodzie.

### Cutover na własną domenę

1. W one.com ustaw rekordy DNS:

   | Typ | Nazwa | Wartość |
   |---|---|---|
   | A | `@` | `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153` |
   | CNAME | `www` | `maciejburda.github.io` |

2. Poczekaj na propagację (`dig kendosintra.pt +short`).
3. W `.github/workflows/deploy.yml` zmień `PRODUCTION: 'false'` na `'true'`, wypchnij.
4. Settings → Pages → włącz **Enforce HTTPS** (certyfikat bywa wystawiany do 24 h).
5. Search Console: zgłoś `https://kendosintra.pt/sitemap-index.xml`.
6. Hosting one.com anuluj **dopiero** po potwierdzeniu, że wszystko działa.

Plik `deploy/CNAME` leży poza `public/` celowo — trafia tam dopiero przy
budowie produkcyjnej. Gdyby siedział w `public/`, GitHub przekierowałby adres
podglądowy na domenę, na którą DNS jeszcze nie wskazuje, i strona zniknęłaby
przed cutoverem.

### Stare URL-e

`/home/gallery`, `/home/fees`, `/home/beginner-s-course`, `/home/what-is-kendo`
dostają zaślepki z `meta refresh` + `rel=canonical` (GitHub Pages nie ma
przekierowań serwerowych). Są wyłączone z sitemapy. Nie kasuj ich — trzymają
pozycje i linki z Facebooka.

## Wersja Astro — do decyzji

Zbudowane na **Astro 5.18.2**, bo Twój Node to 20.20.2.

Aktualny major to **Astro 7.2.9 i wymaga Node ≥22.12**. Astro 5 ma osiem otwartych
advisory (XSS w `define:vars`, spread attributes, view transitions; SSRF w
prerenderowanej stronie błędu). Przy stronie w pełni statycznej, bez wysp
i bez danych od użytkownika, **żadne z nich nie jest tu realnie eksploatowalne** —
ale ta gałąź nie dostanie już poprawek.

Rekomendacja: `brew install node@22`, potem `npm i astro@latest`. Migracja 5→7
to głównie zmiany w konfiguracji; treść, komponenty i style zostają.

CI już używa Node 22, więc build w GitHub Actions jest niezależny od Twojej maszyny.

## Do uzupełnienia przez klub

Szukaj `TODO (klub)` w `src/content/`:

- [ ] Biografia sensei Rogiera van Bijnena (`about.md`)
- [ ] Rok założenia, federacja, liczba członków (`about.md`)
- [ ] Minimalny wiek dzieci, zasady treningu próbnego (`faq.md`)
- [ ] Kalendarz seminariów, zawodów i egzaminów (`schedule.md`)
- [ ] Przerwy świąteczne i wakacyjne (`schedule.md`)
- [ ] **Polityka prywatności** (`privacy.md`) — to jest szkielet, nie dokument
      prawny. Wymaga przejrzenia przez osobę odpowiedzialną za RODO. Osobna
      luka: zgody na wizerunek dzieci, których zdjęcia publikujecie.
- [ ] Dokładne współrzędne dojo (`src/i18n/club.ts`, pole `geo`)
- [ ] Logo z wordmarkiem w krzywych — mamy tylko symbol. Nagłówek składa nazwę
      typografią, więc to nie blokuje, ale przyda się do materiałów drukowanych.

Strony PT mają `draft: true` tam, gdzie tłumaczenie jest moje, a nie klubu —
do przejrzenia przez native speakera. Wyjątek: `beginner-course.md`, którego
wersja portugalska pochodzi wprost z v1.

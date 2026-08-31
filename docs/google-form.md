# Formularz zapisu — pola do Google Forms

Tytuł: **Kendo Club Sintra — Beginner Course / Curso para Iniciantes**
Opis: `Beginner course starts 16 September 2026 · 60 EUR for three months, shinai included.`

Ustaw **dwujęzycznie** (EN / PT w jednym polu), bo strona jest dwujęzyczna,
a jeden formularz jest łatwiejszy w obsłudze niż dwa.

---

## Pola wymagane

| # | Pole | Typ | Uwagi |
|---|---|---|---|
| 1 | Name / Nome | krótka odpowiedź | wymagane |
| 2 | Email | krótka odpowiedź | wymagane, włącz walidację e-mail |
| 3 | I am interested in / Tenho interesse em | jednokrotny wybór | wymagane. Opcje: `Beginner course (16 Sept 2026)` · `Adult classes` · `Kids classes` · `Visiting from another club` |
| 4 | Age / Idade | jednokrotny wybór | wymagane. Opcje: `Adult (18+)` · `Under 18`. **Kurs jest opisany jako dla dorosłych — to pole rozdziela zgłoszenia na właściwe zajęcia** |
| 5 | Zgoda na kontakt | pole wyboru | wymagane, treść niżej |

## Pola opcjonalne

| # | Pole | Typ | Po co |
|---|---|---|---|
| 6 | Phone / Telefone | krótka odpowiedź | sporo osób woli telefon; masz go wyeksponowanego na stronie |
| 7 | Previous martial arts experience | krótka odpowiedź | pomaga sensei rozplanować grupę |
| 8 | How did you hear about us? | jednokrotny wybór | `Website` · `Facebook` · `Instagram` · `Friend` · `Other`. Powie Wam, czy strona w ogóle działa |
| 9 | Anything we should know? | długa odpowiedź | miejsce na pytania i kontuzje |

## Sekcja warunkowa — jeśli w polu 4 wybrano „Under 18"

Włącz **„Przejdź do sekcji w zależności od odpowiedzi"**:

| # | Pole | Typ |
|---|---|---|
| 10 | Parent or guardian name | krótka odpowiedź, wymagane |
| 11 | Parent or guardian phone | krótka odpowiedź, wymagane |

> Bez tego zbieracie dane nieletnich bez kontaktu do opiekuna. Przy zajęciach
> dla dzieci to nie jest formalność.

---

## Treść zgody (pole 5)

> I agree to Kendo Club Sintra storing the details in this form in order to
> reply to me and organise my participation in training. I can withdraw this
> at any time by writing to kendosintra@gmail.com.
>
> Autorizo o Kendo Club Sintra a guardar os dados deste formulário para me
> responder e organizar a minha participação nos treinos. Posso retirar esta
> autorização a qualquer momento escrevendo para kendosintra@gmail.com.

**To jest szkic, nie porada prawna.** Musi przejrzeć osoba odpowiedzialna
w klubie za RODO — patrz `src/content/pages/en/privacy.md`.

---

## Ustawienia formularza

- **Zbieraj adresy e-mail:** wyłącz. Pole 2 już to robi, a włączenie wymusza
  logowanie do Google i odetnie część chętnych.
- **Ogranicz do 1 odpowiedzi:** wyłącz, z tego samego powodu.
- **Powiadomienia mailowe o nowych odpowiedziach:** włącz. Bez tego ktoś musi
  pamiętać, żeby zaglądać do arkusza.
- **Odpowiedzi → Połącz z Arkuszami:** włącz, żeby klub widział zgłoszenia
  bez Twojego udziału.

## Czego potrzebuję

Link **„Wyślij → ikona ogniwa"**, czyli krótki `https://forms.gle/...`.

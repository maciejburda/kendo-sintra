# Signup form — fields for Google Forms

Title: **Kendo Club Sintra — Beginner Course / Curso para Iniciantes**
Description: `Beginner course starts 16 September 2026 · 60 EUR for three months, shinai included.`

Set it up **bilingually** (EN / PT in the same field), because the site is
bilingual and one form is easier to run than two.

---

## Required fields

| # | Field | Type | Notes |
|---|---|---|---|
| 1 | Name / Nome | short answer | required |
| 2 | Email | short answer | required, turn on email validation |
| 3 | I am interested in / Tenho interesse em | multiple choice | required. Options: `Beginner course (16 Sept 2026)` · `Adult classes` · `Kids classes` · `Visiting from another club` |
| 4 | Age / Idade | multiple choice | required. Options: `Adult (18+)` · `Under 18`. **The course is described as being for adults — this field routes applicants to the right classes** |
| 5 | Consent to be contacted | checkbox | required, wording below |

## Optional fields

| # | Field | Type | Why |
|---|---|---|---|
| 6 | Phone / Telefone | short answer | plenty of people prefer the phone; it is prominent on the site |
| 7 | Previous martial arts experience | short answer | helps the sensei plan the group |
| 8 | How did you hear about us? | multiple choice | `Website` · `Facebook` · `Instagram` · `Friend` · `Other`. Tells you whether the site is working at all |
| 9 | Anything we should know? | long answer | room for questions and injuries |

## Conditional section — if field 4 is "Under 18"

Turn on **"Go to section based on answer"**:

| # | Field | Type |
|---|---|---|
| 10 | Parent or guardian name | short answer, required |
| 11 | Parent or guardian phone | short answer, required |

> Without this you are collecting data about minors with no way to reach a
> guardian. For children's classes that is not a formality.

---

## Consent wording (field 5)

> I agree to Kendo Club Sintra storing the details in this form in order to
> reply to me and organise my participation in training. I can withdraw this
> at any time by writing to kendosintra@gmail.com.
>
> Autorizo o Kendo Club Sintra a guardar os dados deste formulário para me
> responder e organizar a minha participação nos treinos. Posso retirar esta
> autorização a qualquer momento escrevendo para kendosintra@gmail.com.

**This is a draft, not legal advice.** It has to be reviewed by whoever is
responsible for GDPR at the club — see `src/content/pages/en/privacy.md`.

---

## Form settings

- **Collect email addresses:** off. Field 2 already does this, and turning it on
  forces a Google login, which will cut off some applicants.
- **Limit to 1 response:** off, for the same reason.
- **Email notifications for new responses:** on. Otherwise someone has to
  remember to check the spreadsheet.
- **Responses → Link to Sheets:** on, so the club can see signups without
  going through you.

## What I need

The **"Send → link icon"** URL, i.e. the short `https://forms.gle/...`.

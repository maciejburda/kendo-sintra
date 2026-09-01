# Signup form — Google Forms

The form is live and linked from the site (`club.signupForm` in
`src/i18n/club.ts`). Its title is **"Kendo Club Sintra - Sign Up"**.

This file records what the form asks today and what is still outstanding.

One form serves both languages; the site is bilingual, but a single form is
easier to run than two.

---

## Current fields (as built)

The course is for **adults only**, so there is no under-18 branch and no
guardian contact. There is no health question, so the form stays out of Art. 9
territory and ordinary Art. 6 consent applies.

| # | Field | Type | Required |
|---|---|---|---|
| 1 | Full Name | short answer | yes |
| 2 | Date of birth | date | yes |
| 3 | Where did you learn about Kendo Club Sintra? | multiple choice | yes — `Facebook` · `Google` · `Friend` |
| 4 | Consent (wording below) | checkboxes, one option "I agree" | yes |
| — | Email address | Google built-in, **verified** | yes |

### Consent (field 4)

The question title carries the wording; the single required checkbox is the
affirmative act, so the form cannot be submitted without it:

> I agree to Kendo Club Sintra using these details to contact me and organise
> my training. I can withdraw this at any time: kendosintra@gmail.com.
>
> Autorizo o Kendo Club Sintra a usar estes dados para me contactar e organizar
> os meus treinos. Posso retirar esta autorização a qualquer momento:
> kendosintra@gmail.com.

This is the minimum that stays valid: controller named, purpose stated,
withdrawal mentioned (Art. 7(3)), and the tick as the clear affirmative action.
Do not trim it further.

It was briefly built as multiple choice with "I agree" / "I disagree". That let
someone submit while refusing, leaving the club holding data with a documented
absence of a legal basis. A single-option required checkbox makes refusal and
submission mutually exclusive, which is the point.

**If a health or injury question ever comes back, this wording stops being
enough** — health data is a special category under Art. 9 and needs explicit
consent that names it.

## Still open

**1. Field 3 has an empty choice.** The multiple-choice field carries a blank
option alongside Facebook / Google / Friend. Probably an unfinished "Other".

**2. Email collection is set to "verified".** That forces applicants to sign in
to a Google account before they can submit. It guarantees a valid address, but
it will lose people who do not have or do not want to use a Google login.
Switching to "responder input" removes the login at the cost of unverified
addresses. Worth a deliberate decision either way.

## Form settings

- **Collect email addresses:** currently "verified", which forces a Google
  login. See "Still open" above.
- **Limit to 1 response:** off — it would add a second login requirement.
- **Email notifications for new responses:** on. Otherwise someone has to
  remember to check the spreadsheet.
- **Responses → Link to Sheets:** on, so the club can see signups without
  going through you.

## The link

`club.signupForm` holds the short **"Send → link icon"** URL
(`https://forms.gle/...`). That is the only place to change if the form is
ever replaced.

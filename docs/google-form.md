# Signup form — Google Forms

The form is live and linked from the site (`club.signupForm` in
`src/i18n/club.ts`). Its title is **"Kendo Club Sintra - Sign Up"**.

This file records what the form asks today and what is still outstanding.

One form serves both languages; the site is bilingual, but a single form is
easier to run than two.

---

## Current fields (as built)

The course is for **adults only**, so there is no under-18 branch and no
guardian contact.

| # | Field | Type | Required |
|---|---|---|---|
| 1 | Full Name | short answer | yes |
| 2 | Date of birth | date | yes |
| 3 | Do you have any medical conditions or injuries that instructors should be aware of? | paragraph | yes |
| 4 | Where did you learn about Kendo Club Sintra? | multiple choice | yes — `Facebook` · `Google` · `Friend` |
| — | Email address | Google built-in, **verified** | yes |

## Still open

**1. No consent checkbox.** `privacy.md` states consent as the legal basis for
processing, which is not true while the form has no consent field. Either add
one (wording below) or change the stated basis. This is the last blocker before
the cutover to the custom domain.

**2. Health data.** Field 3 collects medical information. Under Art. 9 GDPR that
is a *special category*, and ordinary consent is not a sufficient basis — it
requires **explicit** consent, named as such. The consent wording below covers
it; a generic "I agree to my data being stored" would not.

**3. Email collection is set to "verified".** That forces applicants to sign in
to a Google account before they can submit. It guarantees a valid address, but
it will lose people who do not have or do not want to use a Google login.
Switching to "responder input" removes the login at the cost of unverified
addresses. Worth a deliberate decision either way.

**4. Option 4 has an empty choice.** The multiple-choice field carries a blank
option alongside Facebook / Google / Friend. Probably an unfinished "Other".

## Consent wording (to add as a required checkbox)

Because of the medical question this has to name health data explicitly — that
is what Art. 9 requires, and it is why this is not the generic consent line.

> I explicitly agree to Kendo Club Sintra storing the details in this form,
> **including the health information I have provided**, in order to reply to me,
> organise my participation in training, and keep me safe in practice. I can
> withdraw this at any time by writing to kendosintra@gmail.com.
>
> Autorizo explicitamente o Kendo Club Sintra a guardar os dados deste
> formulário, **incluindo as informações de saúde que forneci**, para me
> responder, organizar a minha participação nos treinos e garantir a minha
> segurança durante a prática. Posso retirar esta autorização a qualquer momento
> escrevendo para kendosintra@gmail.com.

**This is a draft, not legal advice.** It has to be reviewed by whoever is
responsible for GDPR at the club — see `src/content/pages/en/privacy.md`.

---

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

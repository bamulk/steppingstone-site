# Stepping Stone Sober Living (Vercel-ready)

## Quick start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Customize
- Update contact details + CTA phone in `site.config.ts`
- Update homes/locations in `lib/homes.ts`
- Logo and house photos live in `/public/images` (copied from the previous WordPress site; swap in higher-resolution originals when available)

## Forms
The Apply form posts to `/api/apply`, which emails each application to the address in `site.config.ts` using Resend.

Environment variables:
- `RESEND_API_KEY` (required in production)
- `APPLY_TO_EMAIL` (optional; defaults to the email in `site.config.ts`)
- `APPLY_FROM_EMAIL` (optional; defaults to Resend's test sender. Set it to an address on a domain verified in Resend, e.g. `Stepping Stone <apply@steppingstonesle.com>`)

Without `RESEND_API_KEY`: in development the route logs the submission and returns success so the form can be tested; in production it returns an error and the form tells the applicant to call or text instead.

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

## Forms / Lead capture
The Apply form posts to `/api/apply`.

Optional: send leads to Airtable by setting env vars:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME` (default: `Leads`)

If env vars are not set: in development the route logs the submission and returns success so the form can be tested; in production it returns an error, and the form tells the applicant to call or text instead. Set the Airtable variables before going live.

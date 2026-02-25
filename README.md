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
- Replace placeholder images in `/public` (optional)

## Forms / Lead capture
The Apply form posts to `/api/apply`.

Optional: send leads to Airtable by setting env vars:
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME` (default: `Leads`)

If env vars are not set, the API route will still return success and log the submission server-side.

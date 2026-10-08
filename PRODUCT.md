# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Confirmed by the owner (2026-10-07):

- **The woman herself.** Leaving treatment or early in recovery, looking for a place to live. Usually deciding quickly, often on a phone.
- **Family members.** A parent, partner or sibling searching on her behalf and judging whether the home is safe and legitimate.

Mothers who need a home that accepts their children are served by the Rio Linda home, but were not named as a primary contact group.

## Product Purpose

Stepping Stone Sober Living runs transitional sober living homes for women in the Sacramento area. The website exists to help a woman (or her family) understand what living there is like, see the homes, check cost and expectations, and get in touch: call, text, or submit an application. Success is a call, a text, or a completed application.

## Positioning

- Four furnished homes in the Sacramento area, for women only.
- One home (Rio Linda) is dedicated to women with children, on 3 acres with a pool and farm animals.
- Program based: meetings and a sponsor are required.
- Run by a woman who is herself in recovery (per a resident testimonial: "The woman who runs it is one of us").

## Operating Context

- Contact happens by phone call, text message, or the online application. Phone: (916) 335-4203. Email: steppingstonesoberliving@gmail.com.
- The live site at steppingstonesle.com is WordPress + Divi. This repository is a Next.js 14 rebuild that has not been deployed.
- Application submissions post to `/api/apply`, which forwards to Airtable when `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID` and `AIRTABLE_TABLE_NAME` are set, and otherwise only logs.

## Capabilities and Constraints

Homes (confirmed: the live site's list is the real one):

- **Rio Linda** — women and children. 3 acres, pool, farm animals. 10 minutes from the freeway, 15 minutes to downtown, close to shopping and meetings.
- **Rio Linda #2** — single women. Shared living spaces, pool. Close to bus routes and meetings.
- **Rosemont #1** — single women. Quiet neighborhood near shopping, meetings and transit; short walk to Manlove Park.
- **Rosemont #2** — women. Spacious two-story home near shopping, the bus stop and meetings.

Pricing (confirmed): shared rooms from $750/month, private rooms from $950/month. Which homes offer private rooms is **undecided**; do not attach a price to a specific home.

Program requirements (from the existing rebuild copy; not contradicted by the owner): sponsor within 10 days of moving in, 3 meetings per week, weekly house meeting, chores, drug testing, no drugs or alcohol.

Amenities (from the live site): furnished, free WiFi, free parking, bedroom comforts, dishwasher, washer and dryer, coffee maker.

Not a medical facility or detox.

## Brand Commitments

- Name: Stepping Stone Sober Living.
- Existing logo on the live site: stacked stones mark with "STEPPING STONE / SOBER LIVING" wordmark (`wp-content/uploads/2020/05/final.png`). In this repository at `public/images/logo.png`.
- Live site tagline lines: "Safe. Clean. Sober." and "Come live with us!"
- Look (owner, 2026-10-08, latest): very modern, clean and professional. Sans-serif headings (Manrope) with Inter body, white ground with light grey-blue alternate bands, navy as the main colour, and the clay accent used sparingly (the main Apply/Call button, list dots, step labels). Small radii, hairline borders, no decorative shadows, no script or italic accent words. Rejected earlier, in order: a soft handwritten pastel version; a square ruled serif version; a navy-and-gold version close to nchapterliving.com; a navy-and-clay serif version.

## Evidence on Hand

- Two resident testimonials on the live site: Janean Bradley (resident since December 2019) and April B. (moved in 7/30/20).
- Mission and vision statements on the live site.
- Two blog posts on the live site (Aug 28 and Sep 8, 2025).
- House photos exist on the live site's WordPress uploads (Rio Linda, Rio Linda #2, Rosemont #1, Rosemont #2); downloaded on 2026-10-07 into `public/images/` (500x326 each; better originals would be an improvement).
- Absent, do not fabricate: licensing or certification claims, occupancy or success statistics, staff names or bios, street addresses, current bed availability.

## Product Principles

1. Reaching a person comes first: calling and texting are always one tap away.
2. Say what is true and specific about each home; never pad with generic recovery language.
3. Be clear about expectations and cost up front, so nobody is surprised after they call.
4. Speak to her as an adult, with warmth and without judgment.
5. The site should read as established and trustworthy without becoming clinical or cold; this is a home.

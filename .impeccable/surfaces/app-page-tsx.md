---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx"]
---

# Home page (and the shared site shell)

Scope: `/` plus the shell every route inherits (top bar, header, footer, mobile action bar). Visitor mode: Persuade.

Audience and job: a woman leaving treatment or early in recovery, usually on her phone, or a family member searching for her. She needs to see that this is a real, established, safe home, what it costs, what is asked of her, and how to reach a person. Action: call, text, or apply.

History: a first redesign ("the welcome note": handwriting, pastel sections, tilted snapshots) was built and then rejected by the owner on 2026-10-07 as not serious enough. The owner pinned this replacement in their own words: traditional, straight lines, less colourful, traditional fonts. They chose the forest green and stone palette and a words-led opening. Do not reintroduce handwriting, tilts, rounded pills or pastel fields.

## Direction contract

THESIS: A plainly traditional, trustworthy site in the manner of an established local nonprofit: serif headings, ruled lists, square edges. It is the category standard played straight at the owner's request; it refuses decoration, not convention.

OWN-WORLD: Forest green (#22331c), white, and warm stone (#f4f1ea), with a muted gold used only for thin rules, list dashes, the one button on the dark closing band, and focus rings on dark green (focus rings on light grounds are green, because gold fails contrast there). Libre Caslon Text for headings and resident letters; Source Sans 3 for everything else. Zero corner radius everywhere. One-pixel rules separate rows; a three-pixel green top rule marks panels. Photos sit straight in a thin frame. No shadows except under the open mobile menu.

STORY: She reads what Stepping Stone is in one sentence, sees the facts at a glance, then the four houses and what is already in them, the price and the house agreements, two residents' letters, and how to reach someone.

FIRST VIEWPORT: Green top bar with the phone number. White header with the logo, plain nav and an "Apply for a bed" button. On a stone band: left, the serif headline "Sober living homes for women in the Sacramento area.", one lead paragraph, then Call (with the number), Text and Apply; right, a white ruled "At a glance" panel listing homes, who it is for, cost, program and contact. On a phone the panel follows the lead and the fixed bottom bar carries Call, Text and Apply.

SIGNATURE INTERACTION AND MOTION: none beyond colour transitions on buttons and links and the FAQ chevron; stillness is the point.

FORM: Owner-pinned direction (the standing exit), overriding the earlier roll. Original seed key 3735bdef. Build path: code-led; no image generation in this session.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Which houses have private rooms.
- House photos are 500px street-view style images; better originals would lift the page.
- The live site's two blog posts and gallery are not yet carried over.

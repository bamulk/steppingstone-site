---
name: Stepping Stone Sober Living
description: Sober living homes for women in the Sacramento area, presented in a modern, clean, professional system of navy, white and a sparing clay accent.
colors:
  navy: "#13203b"
  navy-soft: "#22335a"
  navy-deep: "#0c152a"
  accent-deep: "#b4532f"
  accent-hover: "#9c4526"
  accent: "#f2ad92"
  white: "#ffffff"
  tint: "#f4f6fa"
  ink: "#18202f"
  ink-2: "#505a6c"
  rule: "#e2e6ed"
  rule-strong: "#c9d0dc"
  on-dark: "#ffffff"
  on-dark-2: "#c3cbdb"
  error: "#a12a2a"
  field-border: "#8a93a3"
  field-placeholder: "#667085"
  alert-ground: "#fdf2f1"
  alert-ink: "#751d1d"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 1.4rem + 3.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  house-name:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.15rem + 0.6vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.05rem + 0.4vw, 1.3rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  figure:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.5rem + 1.2vw, 2.3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'lnum', 'tnum'"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.08rem, 1rem + 0.35vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.2
  quiet:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
spacing:
  action-gap: "12px"
  form-gap: "20px"
  gutter: "clamp(20px, 5vw, 48px)"
  section: "clamp(64px, 9vw, 120px)"
  wrap: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy-soft}"
    textColor: "{colors.white}"
  button-accent:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "52px"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.white}"
  button-plain:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "52px"
  button-small:
    rounded: "{rounded.sm}"
    padding: "8px 18px"
    height: "44px"
  button-on-dark-primary:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "52px"
  button-on-dark-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.white}"
  button-on-dark-plain:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "52px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  nav-link-current:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  house-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 2.6vw, 30px)"
  house-tag:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.navy}"
    rounded: "6px"
    padding: "4px 10px"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(22px, 3.5vw, 40px)"
  rate-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  jump-link:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "44px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
  band:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
  band-tint:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
  band-dark:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-dark}"
  closing-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
  footer:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-dark}"
---

# Design System: Stepping Stone Sober Living

## Overview

**Creative North Star: "The Well-Kept House"**

The site should look the way a well-run home feels when you walk in: clean, bright, in order, with nothing fussy on the walls. The owner's direction is to "improve usability and make the look very modern and clean" and "to convey professionality". A woman leaving treatment, or the relative searching for her, should see at once that this is a real and competently run place, what the four houses are, what a room costs, what is asked of her, and how to reach a person.

The system is a white page with light grey-blue alternate bands, deep navy for headings and solid surfaces, and one clay accent that appears only in small amounts. Headings are tight, heavy Manrope; everything read at length or pressed is Inter. Surfaces are white cards with a hairline border and a modest radius; rows inside a list are divided by the same hairline. The page is flat. Movement is limited to colour changes and a small nudge of an arrow.

It replaces four looks the owner rejected in turn: a soft handwritten pastel version, a square ruled serif version, a navy-and-gold version close to nchapterliving.com, and a navy-and-clay serif version. None of their devices return.

**Key Characteristics:**
- Navy on white, with a light grey-blue tint for alternate bands and solid navy for one mid-page band, the closing band and the footer
- A clay accent kept to the lead button of a group, list dots, step labels and check icons
- Manrope at 700 and 800 for headings and figures, set tight; Inter for everything else
- Small radii only: 12px on cards and photos, 8px on buttons, fields and nav links
- One-pixel hairlines for card borders and row dividers; no decorative shadows, gradients or textures
- Photographs level, cover-fitted, clipped to the card radius
- Calling, texting and applying are always in reach: a Call button in the header, a three-button bar fixed to the bottom on small screens, and a navy closing band on every page but the application

## Colors

A cool, near-neutral palette: one deep navy, white, a grey-blue tint, and a warm clay used as punctuation.

### Primary
- **Deep Navy** (`navy`): every heading, the solid button, text links, the mid-page dark band, the closing band, the emergency strip on the resources page, the two-pixel rule above a step, the FAQ chevron, the focus outline on light grounds, the caret and the text selection.
- **Slate Navy** (`navy-soft`): the hover state of the solid navy button. Nothing else.
- **Midnight Navy** (`navy-deep`): the footer ground, one step darker than the closing band that sits directly above it.

### Secondary
- **Clay** (`accent-deep`): the accent on light grounds. The fill of the accent button with white text, the six-pixel dot that leads a list item, the "Step 1" label above a step, and the check icon in an amenity list. Also the fill of the lead button on the navy closing band.
- **Clay Dark** (`accent-hover`): the hover state of any clay-filled button.
- **Pale Clay** (`accent`): the accent on dark grounds only. The check icon on the navy band, the tagline in the footer, and the focus outline on navy surfaces. At 1.9:1 on white it is never used on a light ground.

### Neutral
- **White** (`white`): the page ground, the header, plain bands, every card and panel, form fields, the open mobile menu and the mobile action bar.
- **Tint** (`tint`): the alternate band ground, the hover and current-page ground of a nav link, the tag on a house card, and the placeholder behind a loading photo.
- **Ink** (`ink`): running text. A near-black with a navy cast; never pure black.
- **Soft Ink** (`ink-2`): lead paragraphs, supporting lines, hints, FAQ answers, resting nav links and fine print.
- **Hairline** (`rule`): the one-pixel border of a card and the one-pixel divider between rows and between two plain bands.
- **Strong Hairline** (`rule-strong`): the border of the outlined button, the jump links and the menu button; the scrollbar thumb.
- **White on Navy** (`on-dark`) and **Mist on Navy** (`on-dark-2`): text on navy surfaces. White for headings, links and list items; Mist for lead paragraphs, footer headings and fine print.
- **Error** (`error`): the border of an invalid field, the inline error line and the border of the failed-submission alert.
- **Field Border** (`field-border`), **Placeholder** (`field-placeholder`), **Alert Ground** (`alert-ground`), **Alert Ink** (`alert-ink`): form-only values. In the stylesheet they are written as literals, not custom properties.

Hairlines on navy are white at low opacity (14% in the footer, 16% between amenity rows, 40% for the outlined button's border), also written as literals.

### Named Rules
**The Sparing Clay Rule.** Clay is punctuation. It fills at most one button in a group, and otherwise appears only as a list dot, a step label or a small icon. It is never a band, a card ground, a heading colour or a border.

**The Two Clays Rule.** Clay (`accent-deep`) is for light grounds; Pale Clay (`accent`) is for navy grounds. They do not swap: Pale Clay fails contrast on white, and Clay text on navy is only 3.3:1.

**The Three Grounds Rule.** A band is White, Tint or Deep Navy. Midnight Navy is the footer alone. No other field colours exist.

## Typography

**Display Font:** Manrope (with system-ui, sans-serif), weights 700 and 800
**Body Font:** Inter (with system-ui, sans-serif), weights 400, 500, 600 and 700

**Character:** A geometric, slightly rounded grotesque set heavy and tight for headings, over a neutral workhorse sans for reading. The pairing is quiet and contemporary; the authority comes from weight and spacing, not from ornament.

### Hierarchy
- **Display** (Manrope 800, clamp(2.3rem, 1.4rem + 3.6vw, 3.75rem), 1.06, -0.035em, balanced): the one heading that opens a page. The home headline is capped at 13em. The heading of the closing band uses the same style at a reduced size (clamp(1.8rem, 1.3rem + 2.2vw, 2.7rem)).
- **Title** (Manrope 700, clamp(1.75rem, 1.3rem + 1.8vw, 2.5rem), 1.12, -0.03em): the heading of a band or of one side of a split.
- **House Name** (Manrope 700, clamp(1.3rem, 1.15rem + 0.6vw, 1.55rem), 1.2, -0.02em): the name on a house card.
- **Subtitle** (Manrope 700, clamp(1.15rem, 1.05rem + 0.4vw, 1.3rem), 1.25, -0.015em): the heading of a step, of a panel, or of the lesser side of a split. Resource names, form section headings and the facts-strip headings are the same face and weight at a fixed 1.1 to 1.15rem.
- **Figure** (Manrope 800, clamp(1.8rem, 1.5rem + 1.2vw, 2.3rem), 1, -0.03em, lining tabular numerals, right aligned): the monthly rate. Its qualifier sits beneath in Inter 400 at 0.875rem in Soft Ink.
- **Lead** (Inter 400, clamp(1.08rem, 1rem + 0.35vw, 1.2rem), 1.6, Soft Ink, max 58ch): the paragraph under a Display or Title, 18px beneath it.
- **Body** (Inter 400, 1.0625rem, 1.6, max 68ch in prose): everything else.
- **Label** (Inter 600, 1.0625rem, 1.2): button text. Text links, form labels, the phone number, amenity rows and the FAQ question (1.08rem) share the weight. Nav links are 0.98rem at 500, rising to 600 for the current page. Sentence case throughout; no uppercase and no tracked-out labels.
- **Quiet** (Inter 400, 0.95rem, Soft Ink): fine print, disclaimers and the supporting line in the facts strip.

All headings are Deep Navy on light grounds and White on navy, and balance their line breaks. Leads and summaries use pretty wrapping.

### Named Rules
**The Two Faces Rule.** Manrope sets headings, house names and rates, always at 700 or 800 and always tight. Inter sets everything a reader scans or presses. Emphasis inside text is Inter 600 or 700 in the same colour.

**The One Colour Heading Rule.** A heading is one face, one weight and one colour from first word to last. No italic, script or accent-coloured words inside it.

## Layout

A single centred column (max 1160px) with a fluid gutter (clamp(20px, 5vw, 48px)). A page is a stack of full-width bands, each with the same vertical padding (clamp(64px, 9vw, 120px)). Bands alternate White and Tint; where two White bands meet, a hairline divides them. A band opens with a head capped at 44rem (a Title, an optional Lead) and clamp(32px, 4.5vw, 56px) before its content.

The home page opens with a hero (clamp(40px, 6vw, 88px) of padding): headline, lead and buttons at left, and at right a two-by-two grid of the four house photos, each a link to that house. A four-column facts strip between two hairlines follows. Inner pages open with a white page head (clamp(44px, 6vw, 88px)) closed by a hairline. Every page except the application ends in the navy closing band, then the footer.

Inside the column, content is paired in uneven columns: 6:5 for the hero, 5:6 for a split, 4:7 for a resource group's heading beside its cards, 7:4 for the application beside its aside, 5:3:4 in the footer. House cards and residents' letters sit two across; steps three across; amenities two or three across. Columns align to the top, or to the centre in the hero and the amenity split. Nothing is staggered, rotated or overlapped.

Reading measures are capped in characters: 58ch for leads, 68ch for prose, 60ch for list items and answers, 62ch for letters and resource descriptions.

Responsive behaviour:
- **At 1180px and below:** the nav links collapse behind an outlined button reading "Menu" or "Close", and the header's Call button is hidden.
- **At 980px and below:** the closing band stacks its buttons under its text.
- **At 900px and below:** the application and its aside stack.
- **At 860px and below:** the hero, the letters and the resource groups stack; three-column amenities go to two; a fixed bar of three buttons (Call, Text, Apply) appears at the bottom and the hero's own buttons are hidden because the bar carries them. The body reserves 69px plus the safe-area inset for the bar.
- **At 760px and below:** house cards, steps, splits and the footer go to one column; the facts strip goes to two by two.
- **At 560px and below:** paired form fields go to one column.
- **At 480px and below:** amenities go to one column.

### Named Rules
**The 500 Pixel Rule.** The house photos are 500 by 326 pixels. A photo should not be displayed much wider than 500px, never full-bleed, and never as a background behind text. In the hero grid each photo is about 235px wide and well inside the rule. The house card does not yet obey it: the photo fills the card, which reaches about 564px on a wide screen and about 680px in a single column just under 760px. That is an open defect in the build, not a size to copy; a new surface caps the photo at 500px.

## Elevation & Depth

Flat. Depth is carried by the change between White, Tint and Navy and by hairline borders. Cards do not lift, on rest or on hover. There are no gradients, textures, glows or inner shadows.

### Shadow Vocabulary
Two shadows exist, both under fixed interface that lies over the page at small sizes, both tight, navy-tinted and cast in one direction only.
- **Open menu** (`box-shadow: 0 18px 30px -20px rgba(19, 32, 59, 0.35)`): beneath the mobile menu panel while it is open.
- **Action bar** (`box-shadow: 0 -10px 24px -18px rgba(19, 32, 59, 0.4)`): above the fixed mobile action bar, with a hairline top border.

### Named Rules
**The Flat Page Rule.** A shadow appears only where interface genuinely covers the page: the open mobile menu and the fixed action bar. Cards, photos, buttons and bands never cast one.

## Shapes

Gently rounded rectangles in two steps. Cards, panels, rate rows and hero photos take the larger radius (12px); buttons, fields, nav links, jump links, the skip link and the alert take the smaller (8px). The tag on a house card is 6px. Nothing is a pill, and nothing is rotated; the only circle is the six-pixel list dot.

Borders are one-pixel hairlines. A card is White with a Hairline border; the outlined button and jump link use the Strong Hairline, darkening to Deep Navy on hover. Rows inside a list (agreements, questions, amenities, the facts strip) are divided by a Hairline and are not boxed. The one heavier line is the two-pixel Deep Navy rule above each step. A house photo has no frame of its own: it sits flush at the top of its card and is clipped by the card's radius.

Icons are line-drawn inline SVG at one stroke weight (1.8), in two shapes only: an arrow after a link or button that leads somewhere, and a circled check before an amenity. The FAQ chevron is drawn from two two-pixel strokes.

### Named Rules
**The Card or Row Rule.** A self-contained thing (a house, a letter, a rate, a resource, the application form) is a White card with a Hairline border and a 12px radius. A list of like facts is a set of rows divided by Hairlines. Do not box each row, and do not nest a card in a card.

## Components

Calm and exact: generous touch targets, one visual weight per role, state shown by colour.

### Buttons
- **Shape:** softly squared (8px radius), minimum 52px tall, 12px by 24px padding, one-pixel border. Label in Inter 600. A trailing arrow icon sits 10px after the label where the button leads onward. Groups wrap with a 12px gap.
- **Primary:** Deep Navy with White text. The header's "Call (916) 335-4203", the lead button of a contact group, "Apply online", and the form's submit.
- **Accent:** Clay with White text. One per view at most: "Apply for a bed" in the hero, and "Call" in the mobile action bar.
- **Plain:** White with Deep Navy text and a Strong Hairline border. Follows the lead button: "Text us", "Apply online", "Call (916) 335-4203" beside the hero's Apply.
- **Small:** 44px minimum height, 8px by 18px padding; the header button. In the mobile action bar buttons are 48px with 8px by 10px padding.
- **On navy:** the lead button becomes Clay with White text; the plain button becomes transparent with White text and a 40% white border.
- **Hover:** colour only, over 0.18s. Primary goes to Slate Navy; Clay goes to Clay Dark; the plain border goes to Deep Navy (to White on navy). An arrow icon slides 3px to the right over 0.25s.
- **Disabled (while sending):** 60% opacity, progress cursor.
- **Focus:** a 3px Deep Navy outline offset 3px on every focusable element; Pale Clay in its place on navy surfaces.
- **Text link:** Inter 600 in Deep Navy with no underline at rest, an underline on hover, and an arrow that slides 4px. Links inside running text inherit their colour and keep a one-pixel underline offset 0.2em.

### Cards / Containers
- **Corner Style:** 12px radius.
- **Background:** White, on either a Tint or a White band.
- **Shadow Strategy:** none; see Elevation & Depth.
- **Border:** one-pixel Hairline on all sides.
- **Internal Padding:** clamp(20px, 2.6vw, 30px) for house and resource cards; clamp(24px, 3.4vw, 40px) for letters; clamp(22px, 3.5vw, 40px) for the application panel; 20px by 22px for a rate row.

### House card
The signature component. A photo flush across the top (cover-fitted at 500:300, clipped by the card), then the house name, a small Tint tag saying who the house is for (Inter 600, 0.88rem, Deep Navy, 6px radius), a one-paragraph summary in Soft Ink, a dot list of facts above a Hairline, and an "Apply for [house]" text link with an arrow pinned to the bottom so links align across a row. Static: no hover state on the card itself.

### Hero house grid
Four house photos two by two (4:3, cover-fitted, 12px radius), each a link to that house's card, with the house name beneath in Manrope 700 and who it is for in Soft Ink at 0.9rem. On hover the photo dims to 90% and the name underlines.

### Inputs / Fields
- **Style:** White, one-pixel Field Border, 8px radius, minimum 50px tall, 12px by 14px padding, body type. Label above in Inter 600 with a 6px gap; "(optional)" hints in regular Soft Ink beside the label. Fields stack with a 20px gap, pairing two across above 560px. The form is divided into named sections by a Manrope 700 heading (1.15rem) with a Hairline above.
- **Hover:** border goes to Deep Navy.
- **Focus:** border goes to Deep Navy with a 3px Deep Navy outline offset 1px.
- **Error:** border in Error; a one-line message beneath in Error at Inter 600, 0.95rem. A failed submission shows an alert (one-pixel Error border, 8px radius, Alert Ground, Alert Ink text) that says what happened and gives the phone number.

### Navigation
- **Header:** White, sticky, 72px tall, with a Hairline beneath. The logo at left (clamp(156px, 18vw, 196px) wide); at right, text links in Inter 500 at 0.98rem in Soft Ink (10px by 12px padding, 8px radius) and a small navy Call button. On hover a link turns Deep Navy on a Tint ground; the current page is the same at weight 600.
- **Mobile (1180px and below):** the links collapse behind an outlined button reading "Menu" or "Close" in words. It opens a full-width White panel under the header with larger links (1.08rem, Deep Navy, 15px of vertical padding) divided by Hairlines, with the Open menu shadow. Escape and navigation close it.
- **Mobile action bar (860px and below):** fixed to the bottom on White under a Hairline: equal-width buttons, Call (accent), Text and Apply (plain). Apply is omitted on the application page.
- **Jump links:** on the resources page, a wrapping row of outlined links (44px tall, 8px radius, Strong Hairline border, Inter 600 in Deep Navy) to each group; the border darkens on hover.
- **Footer:** Midnight Navy. The organisation's name set in text (Manrope 700, 1.25rem, White) with the tagline beneath in Pale Clay, a short description in Mist, and two link columns under small Mist headings (Inter 600, 0.95rem); then a 14% white hairline and fine print.

### Lists
- **Dot list:** facts about a house, a move-in or an expectation, each led by a six-pixel Clay dot. 10px between items, 60ch cap.
- **Checklist:** amenities, each a circled check icon in Clay (Pale Clay on navy) beside an Inter 600 line, with a Hairline beneath; two or three columns.
- **Steps:** three numbered steps, each under a two-pixel Deep Navy rule, with "Step 1" in Clay (Inter 600, 0.9rem), a Subtitle and a Soft Ink line.
- **Facts strip:** four facts between two Hairlines, divided by vertical Hairlines; each a Manrope 700 line (1.1rem) over a Quiet line.
- **Rates:** each rate is its own card: the room type at left in Inter 600, the Figure at right with "a month and up" beneath. A Quiet line follows saying rates vary.
- **Agreements:** rows between Hairlines; a Deep Navy line in Inter 600 (1.05rem) over a Soft Ink detail line.
- **Questions:** rows between Hairlines, capped at 48rem; an Inter 600 question in Deep Navy with a small chevron at right that turns over when open (0.25s); the answer is Soft Ink, capped at 60ch.

### Letters
Residents' letters two across, each a White card. The letter is set in body type; the writer's name follows under a Hairline in Inter 600, Deep Navy. No quotation marks, portraits or oversized glyphs.

### Navy bands
- **Mid-page dark band:** Deep Navy with a White Title, a Mist Lead, a White text link and a checklist with Pale Clay icons. Used once, on the home page.
- **Closing band:** the last band on a page: Deep Navy with tighter padding (clamp(56px, 7vw, 88px)), a reduced Display heading in White, a Mist Lead carrying the phone number, and the on-navy button group at right. The application page omits it.
- **Emergency strip:** a slim Deep Navy strip on the resources page with one line of White text and bold links to 911 and 988.

### Motion
Restrained and functional. Colour changes on buttons, nav links, jump links and field borders run 0.18s. Arrow icons and the FAQ chevron move over 0.25s on a decelerating curve (cubic-bezier(0.16, 1, 0.3, 1)). In-page anchors scroll smoothly, stopping 92px below the top to clear the header. Nothing animates on load, on scroll or on a loop. With reduced motion requested, smooth scrolling and every transition are removed.

## Do's and Don'ts

### Do:
- **Do** keep calling and texting one tap away on every screen: the header's Call button, a button group near the top of the page, the closing band, and the fixed bar at 860px and below.
- **Do** set headings, house names and rates in Manrope at 700 or 800 in Deep Navy, and everything else in Inter.
- **Do** build pages from full-width White and Tint bands, with Deep Navy reserved for one feature band, the closing band and the footer.
- **Do** keep clay sparing: one clay button in a group at most, plus list dots, step labels and check icons. Use Clay on light grounds and Pale Clay on navy.
- **Do** use small radii: 12px on cards, panels and photos; 8px on buttons, fields and nav links.
- **Do** separate with one-pixel hairlines and changes of ground, and keep the page flat.
- **Do** show house photos level, cover-fitted and clipped to the card, at about 500px wide or less.
- **Do** use the logo file exactly as supplied, on White. On navy, set the name in Manrope text as the footer does.
- **Do** keep every interactive target at least 44px tall, 52px for main buttons and 50px for form fields.
- **Do** write labels in sentence case and name the action or the destination in the button itself.

### Don't:
- **Don't** use handwriting, script or brush faces anywhere.
- **Don't** set italic or accent-coloured words inside a heading. A heading is one face, one weight, one colour.
- **Don't** use gold, as a colour, a rule or a button.
- **Don't** use pastel section fields. A band is White, the grey-blue Tint or Deep Navy; no peach, blush, sage, lavender or cream grounds.
- **Don't** tilt, rotate, stack or overlap photographs. Photos sit level and apart.
- **Don't** round buttons into full pills. Buttons are 8px.
- **Don't** return to the square, zero-radius, ruled layout: no sharp-cornered boxes, no heavy rules across the top of panels, and no page built only from ruled rows. Hairlines divide rows inside a list; surfaces are rounded cards.
- **Don't** use drop shadows or glows as decoration. Only the open mobile menu and the fixed action bar cast a shadow.
- **Don't** closely imitate nchapterliving.com in palette, layout or type.
- **Don't** redraw, recolour, crop, outline, invert or restyle the logo, and don't place it on navy or over a photo. It is the owner's asset.
- **Don't** display a house photo much wider than 500px, stretch it full-bleed, or use it as a background behind text.
- **Don't** use Pale Clay on a light ground or clay as a band, card ground or heading colour.
- **Don't** animate anything on load, on scroll or on a loop.

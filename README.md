# Lifepoint Health — AEM Edge Delivery Services

EDS demo site for [Lifepoint Health](https://www.lifepointhealth.net/), built on [ise-boilerplate](https://github.com/aemdemos/ise-boilerplate) with DA + Universal Editor dual authoring.

## Preview

- **Live:** `https://main--lifepoint--aemxsc.aem.live/`
- **Preview:** `https://main--lifepoint--aemxsc.hlx.page/`

## Authoring

Content is authored in [DA (Document Authoring)](https://da.live/AEMXSC/lifepoint).

## Brand

| Token | Value |
|-------|-------|
| Primary blue | `#2b6bb2` |
| Purple (headings) | `#6f3aa0` |
| Magenta | `#a51890` |
| Body font | Roboto |
| Heading font | ff-dax-pro (Adobe Fonts) |

> **Note:** `ff-dax-pro` requires an Adobe Fonts (Typekit) embed in `head.html`. Add the Typekit `<link>` tag from your Adobe Fonts kit to activate the heading font.

## Structure

| Section | Block |
|---------|-------|
| Hero | `hero` — full-bleed image with overlay |
| Mission | default content + `columns` |
| Featured Story | `columns` + `blue-gradient` section style |
| Content Blocks | 3× `columns` (alternating image/text) |
| Latest News | `cards` |
| Bottom CTA | `columns` + `cta-split` section style |

## Import Source

Imported from `https://www.lifepointhealth.net/` on 2026-03-25 using the AEM page-import workflow.

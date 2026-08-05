# Product copy — what we could and could not verify

Everything on `/tools` and `/tools/:slug` was written from the GitBook
documentation and the Unity Asset Store publisher page. This file records what
did **not** check out, so nobody re-adds a claim we deliberately left off.

> The Asset Store long-form descriptions are JavaScript-rendered and could not
> be retrieved. **All descriptive copy comes from GitBook only.**

## Things the store says that the docs do not support

| Where | Store says | Docs say | What the site does |
|---|---|---|---|
| AI Dev Kit RESEARCH LAB | "AWS, Azure, Server Proxy" | AWS and Azure appear **only** in the provider matrix. The Enterprise Proxy page does not describe either implementation. No Bedrock docs at all | Lists them as providers, makes no implementation claim |
| Status & Navigation Bar | "(Android / iOS)" | Android only — "32 & 64 bit Android 8.0+" | ~~Android only~~ → **resolved, see below** |
| Background Audio Timer | Product is a "Timer" | Docs describe *Background Music Looper*, with "timing, fading and delay effects" — no timer feature | Described as background audio + looping |

## Resolved

**AI Dev Kit PRO does have full RAG.** Confirmed by the publisher. The GitBook
pages only document the parts (Vector Store under Agent → Memory, the File
Search Tool, the embeddings API) and never use the word, which is why the first
pass avoided it. The site now says "Full RAG — embeddings, a built-in vector
store, and retrieval over your own files".

**Status & Navigation Bar does support iOS.** Confirmed by the publisher: iOS
landed in v2. The GitBook page is stale, not the store listing. The site now
lists `Android 5.0+ · iOS 13.0+`, taken from the current store cover art
(v2-era, updated 2025-07) rather than the older docs page which says Android
8.0+. **If the Android floor is wrong, fix `platforms` in `catalog.js`.**

The GitBook page should be updated to match.

## Name mismatches

- **Store tiers vs doc tiers.** The docs use Studio / Agent / Enterprise;
  the store sells Free / PRO / RESEARCH LAB. The Studio → Free mapping is
  *inferred* (from "the free AI DevKit core" on the Add-ons page), never stated.
- **Package 327128** appears under three titles across Unity's own pages:
  "AI Dev Kit Research Lab", "AI DevKit Enterprise", and
  "AI DevKit RESEARCH LAB - Aws, Azure, Server Proxy". The site uses the
  publisher-page title.
- **Background Audio Timer ↔ Background Music Looper** equivalence is inferred:
  one background-audio product at $14.99 on the store, one background-audio
  plugin in the docs, and the docs page carries no store link.

## Commit Gen is retired

Confirmed by the publisher: the product is discontinued. It is **not on the
site at all** — no catalog row, no bundled-tools entry. The GitBook page still
exists but should be treated as stale; its docs link also points at an old slug
for package 281225, which is now AI Dev Kit PRO.

`BUNDLED_TOOLS` in `src/data/catalog.js` is now an empty array and the Tools
page hides that whole section while it stays empty.

## Not documented anywhere

- Native Media Player: the iOS backend library, and supported file formats
- Serialization Saver: dependencies (still `0.1.3` — early)
- Exact Newtonsoft.Json / UniTask versions for any product

The spec sheet prints "Not documented" for these rather than guessing.

## Stale sources

- AI Dev Kit changelog stops at v5.2.5; the shipping version is 5.5.2
- The UniTask setup guide cites v2.5.4 "as of April 2024"
- The package-tiers page still lists AI Sheets as "coming soon"
- The legacy "Smart Localization" page describes XLIFF and a Suffix Manager
  that the current AI Sheets docs do not mention — treated as legacy
- **AI Pixel Studio** is documented as "coming soon" and is not on the store —
  deliberately not listed as a product

## Small corrections already applied

- AI Sheets is **$24.99** (50% off $49.99), not $25
- The free AI Dev Kit listing reports Built-in + HDRP but **not URP**. Probably a
  listing error, but the site makes no render-pipeline claim either way

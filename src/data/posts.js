// ─────────────────────────────────────────────────────────────
// Posts shown in the "On X" section.
//
// X killed live timeline embeds — the widget needs an authenticated
// page request now, so it renders blank. The API is no worse: the free
// tier allows about 100 reads a month, and the $200 Basic tier stopped
// accepting new signups in February 2026. So this is a hand-kept list.
//
// Add newest first. Keep it to a handful — the section shows three.
// Delete everything and the section collapses to a follow card, so an
// empty list is a valid state, not a broken one.
//
//   date   ISO, printed as-is
//   text   the post body. Line breaks are preserved.
//   url    permalink to the post
//   tag    optional short label (product name, "release", …)
//   media  optional { src, alt } — put the file in public/x/ and
//          reference it as '/x/<file>'. Any aspect ratio; it is
//          cropped to 16:9 in the card.
// ─────────────────────────────────────────────────────────────

export const X_POSTS = []

// Example — copy the shape, drop your own in:
//
// export const X_POSTS = [
//   {
//     id: 'aidevkit-552',
//     date: '2026-07-26',
//     tag: 'AI Dev Kit',
//     text: '5.5.2 is out. Vector store rebuilt, MCP approval handlers, and the Playground Agent no longer eats your API budget on startup.',
//     url: 'https://x.com/Glitch9359327/status/…',
//     media: { src: '/x/aidevkit-552.webp', alt: 'Release notes screenshot' },
//   },
// ]

# Legal documents — provenance and open issues

`/terms-of-service` and `/privacy-policy` are **verbatim ports** of the
documents in the WordPress export (`docs/source-site/`). The text was
re-structured for rendering (headings split into sections, links made
clickable) but **not edited**. Nothing was rewritten, softened, or updated.

## What exists

| Document | Language | Source | Length |
|---|---|---|---|
| Terms of Service | EN | `Specific Pages: Terms of Service (EN)` | 19 clauses |
| Terms of Service | KO | `Specific Pages: Terms of Service (KR)` | 제1장–제6장, 제1조–제29조 |
| Privacy Policy | EN | Divi layout titled "Terms of Service" | 11 sections |
| Privacy Policy | KO | — | **does not exist** |

The Korean page in the export titled 개인정보 처리방침 is WordPress's default
placeholder ("제안된 텍스트: 웹사이트 주소는 http://amaiichigopurin.mycafe24.com/…")
and was **not** ported. The Japanese locale falls back to the English text for
both documents.

## Issues that need a decision

1. **Scope mismatch.** Both documents were written for the Munchkin Production
   mobile game service — they define in-game currency, open markets, accounts,
   game item purchases. They say nothing about a corporate website or Unity
   Asset Store packages. The site puts a scope notice in the sidebar of each
   page saying so, but the documents themselves still need rewriting.

2. **"Akubi Soft" appears twice in the Privacy Policy**, in place of Munchkin
   Productions:
   - "Your email is collected only to keep you informed of new **Akubi Soft**
     products…"
   - "**Akubi Soft** will not charge any fee for your access request…"

   Left as-is because editing legal text is the publisher's call — but this
   should be corrected.

3. **Both documents are dated February 1, 2020** and have not been revised.
   The pages print the date and a notice saying the text is unchanged.

4. **No Korean privacy policy.** If the site is going to serve Korean users
   under PIPA, one is needed.

5. The Privacy Policy names ad networks (AD(X), Unity Ads, Ad Colony, AdMob)
   for a game that has been shut down for years.

## If these get rewritten

Replace the files in `src/content/legal/`. The shape is:

```js
export default {
  updated: 'February 1, 2020',
  sections: [
    { id: 'clause-1', title: '1. Definitions', blocks: ['…', '…'], level: 2 },
  ],
}
```

`level: 1` renders as a chapter heading (used by the Korean 제N장), `level: 2`
or omitted renders as a normal section heading. Sections with an empty `title`
render as untitled body copy and are skipped in the table of contents.

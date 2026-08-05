import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import { Gutter, Reveal, SectionMark } from '../components/Primitives.jsx'

import termsEn from '../content/legal/terms-en.js'
import termsKo from '../content/legal/terms-ko.js'
import privacyEn from '../content/legal/privacy-en.js'

// The Korean terms are a full translation; there is no Korean or
// Japanese privacy policy in the source material, so those fall
// back to the English text rather than inventing one.
const DOCS = {
  terms: { en: termsEn, ko: termsKo, ja: termsEn },
  privacy: { en: privacyEn, ko: privacyEn, ja: privacyEn },
}

const LINK_SPLIT = /(https?:\/\/[^\s,)]+)/g
const IS_LINK = /^https?:\/\//

function Paragraph({ text }) {
  const parts = text.split(LINK_SPLIT)
  return (
    <p className="mt-3 text-sm leading-[1.75] text-muted first:mt-0">
      {parts.map((part, i) =>
        IS_LINK.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-cyan underline decoration-cyan/30 underline-offset-2 transition-colors hover:decoration-cyan"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}

export default function Legal({ doc }) {
  const { t, lang } = useLanguage()
  const content = DOCS[doc][lang] ?? DOCS[doc].en
  const title = doc === 'terms' ? t('legal.terms') : t('legal.privacy')
  const scope = doc === 'terms' ? t('legal.termsScope') : t('legal.privacyScope')
  const other = doc === 'terms' ? 'privacy' : 'terms'
  const otherTitle = doc === 'terms' ? t('legal.privacy') : t('legal.terms')
  const otherHref = doc === 'terms' ? '/privacy-policy' : '/terms-of-service'
  const toc = content.sections.filter((s) => s.title)

  return (
    <>
      {/* ── Masthead ────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-line pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="scanlines pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <Gutter>
          <SectionMark number="§" label={t('legal.mark')} />
          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-[20ch] text-4xl leading-[1.02] font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
              {t('legal.updated')} — {content.updated}
            </p>
          </Reveal>
        </Gutter>
      </section>

      <Gutter className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          {/* ── Sidebar ─────────────────────────── */}
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100svh-9rem)] lg:self-start lg:overflow-y-auto">
            <Reveal>
              <div className="brackets border border-magenta/40 bg-night/50 p-5">
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="size-3.5 shrink-0 text-magenta" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-magenta uppercase">
                    {t('legal.noticeTitle')}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">{scope}</p>
                <p className="mt-3 text-xs leading-relaxed text-faint">
                  {t('legal.staleNotice')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <nav className="mt-8">
                <span className="kicker">{t('legal.tocTitle')}</span>
                <ol className="mt-4 space-y-1.5">
                  {toc.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block text-xs leading-snug text-faint transition-colors hover:text-cyan ${
                          s.level === 2 ? 'pl-3' : ''
                        }`}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 border-t border-line pt-5">
                <span className="kicker">{t('legal.switchDoc')}</span>
                <div className="mt-4 space-y-2">
                  <Link
                    to={otherHref}
                    className="block font-mono text-xs text-muted transition-colors hover:text-cyan"
                  >
                    {otherTitle}
                  </Link>
                  <Link
                    to="/"
                    className="block font-mono text-xs text-muted transition-colors hover:text-cyan"
                  >
                    {t('legal.backHome')}
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>

          {/* ── Document ────────────────────────── */}
          <article className="max-w-[62ch] min-w-0">
            {content.sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28 border-b border-line py-7 first:pt-0 last:border-b-0"
              >
                {s.title && (
                  <h2
                    className={`mb-4 tracking-tight ${
                      s.level === 1
                        ? 'text-2xl font-black text-ink'
                        : 'text-lg font-bold text-ink'
                    }`}
                  >
                    {s.title}
                  </h2>
                )}
                {s.blocks.map((b, i) => (
                  <Paragraph key={i} text={b} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </Gutter>
    </>
  )
}

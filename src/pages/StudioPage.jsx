import { Check } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import {
  Gutter,
  Reveal,
  PageMasthead,
  ActionLink,
} from '../components/Primitives.jsx'
import { LINKS } from '../data/catalog.js'

export default function StudioPage() {
  const { t } = useLanguage()
  const timeline = t('studioPage.timeline')
  const how = t('studioPage.how')
  const values = t('studio.values')

  return (
    <>
      <PageMasthead number="04" label={t('studioPage.mark')} wide>
        {t('studioPage.headA')}
        <br />
        <span className="text-outline">{t('studioPage.headB')}</span>
        <br />
        {t('studioPage.headC')}
      </PageMasthead>

      {/* ── Statement ───────────────────────────────── */}
      <Gutter className="pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-display text-2xl leading-snug font-bold md:text-3xl">
                {t('studioPage.lead')}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                {t('studioPage.body')}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <figure className="brackets border border-line bg-night/40 p-7 md:p-9">
              <blockquote className="text-[0.95rem] leading-relaxed text-ink italic">
                “{t('studioPage.quote')}”
              </blockquote>
              <figcaption className="mt-5 font-mono text-[10px] tracking-[0.18em] text-faint uppercase">
                {t('studioPage.quoteAttr')}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Gutter>

      {/* ── Timeline ────────────────────────────────── */}
      <section className="border-y border-line bg-night/40 py-20 md:py-28">
        <Gutter>
          <Reveal>
            <span className="kicker">{t('studioPage.timelineTitle')}</span>
          </Reveal>
          <div className="mt-8 border-t border-line">
            {(Array.isArray(timeline) ? timeline : []).map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div className="group grid grid-cols-[4.5rem_1fr] gap-x-6 border-b border-line py-7 transition-colors duration-200 hover:bg-lilac/[0.04] md:grid-cols-[8rem_minmax(0,18rem)_1fr] md:gap-x-10 md:py-8">
                  <span className="font-poster text-3xl leading-none text-magenta/50 transition-colors duration-300 group-hover:text-magenta md:text-4xl">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                  <p className="col-span-2 mt-2 text-sm leading-relaxed text-muted md:col-span-1 md:mt-0 md:max-w-lg">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Gutter>
      </section>

      {/* ── How we work + values ────────────────────── */}
      <Gutter className="py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="kicker">{t('studioPage.howTitle')}</span>
            </Reveal>
            <div className="mt-6 space-y-px bg-line">
              {(Array.isArray(how) ? how : []).map((item, i) => (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="bg-void py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-magenta">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-lg pl-8 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <Reveal>
              <span className="kicker">{t('studioPage.valuesTitle')}</span>
            </Reveal>
            <ol className="mt-6 border-t border-line">
              {(Array.isArray(values) ? values : []).map((v, i) => (
                <Reveal key={v} delay={i * 0.05}>
                  <li className="group flex gap-4 border-b border-line py-4">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-magenta/70 transition-colors group-hover:text-magenta"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm leading-relaxed text-muted transition-colors group-hover:text-ink">
                      {v}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Gutter>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="border-t border-line bg-night/40 py-16 md:py-20">
        <Gutter>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Reveal>
                <h2 className="display-heading max-w-[18ch] text-3xl sm:text-4xl">
                  {t('studioPage.ctaTitle')}
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {t('studioPage.ctaBody')}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap gap-3">
                <ActionLink href="/#contact">
                  {t('studioPage.ctaButton')}
                </ActionLink>
                <ActionLink
                  href={LINKS.discord}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </Gutter>
      </section>
    </>
  )
}

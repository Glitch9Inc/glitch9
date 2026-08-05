import { useLanguage } from '../i18n/index.jsx'
import { TITLE_ART } from '../components/KeyArt.jsx'
import { LINKS } from '../data/catalog.js'
import {
  Section,
  SectionMark,
  DisplayHeading,
  Reveal,
  Gutter,
  ActionLink,
} from '../components/Primitives.jsx'

function StatusLine({ status, platform, accent }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={`size-1.5 ${accent}`} />
      <span className="kicker !text-muted">{status}</span>
      <span className="h-px w-6 bg-line" />
      <span className="kicker">{platform}</span>
    </div>
  )
}

// Secondary titles shown under the featured ROUTiNA panel. Each id needs
// matching copy in titles.<id> and an entry in TITLE_ART.
const PANELS = [
  {
    id: 'citychat',
    statusKey: 'concept',
    platform: 'TBA',
    dot: 'bg-cyan',
    text: 'text-cyan',
  },
]

export default function Titles() {
  const { t } = useLanguage()

  return (
    <Section id="titles" bleed className="py-24 md:py-32">
      <Gutter>
        <div>
          <SectionMark number="01" label={t('titles.mark')} />
          <DisplayHeading className="mt-7 max-w-[16ch]">
            {t('titles.headA')}
            <br />
            <span className="text-outline-magenta">{t('titles.headB')}</span>
          </DisplayHeading>
        </div>
      </Gutter>

      {/* ── Featured: ROUTiNA ───────────────────────── */}
      <Reveal>
        <article className="relative mt-14 grid min-h-[34rem] overflow-hidden border-y border-line lg:min-h-[40rem]">
          <img
            src="/images/illust_ivy-1672.webp"
            srcSet="/images/illust_ivy-760.webp 760w, /images/illust_ivy-1100.webp 1100w, /images/illust_ivy-1672.webp 1672w"
            sizes="100vw"
            alt={t('hero.characterIvy')}
            loading="lazy"
            width="1672"
            height="941"
            className="absolute inset-0 size-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          <div className="absolute inset-0 scanlines opacity-60" />

          <Gutter className="relative flex w-full items-end py-12 md:py-16">
            <div className="max-w-lg">
              <StatusLine
                status={t('titles.status.inDevelopment')}
                platform="iOS · Android"
                accent="bg-magenta"
              />
              <h3 className="mt-5 text-5xl leading-none font-black tracking-[-0.04em] md:text-7xl">
                {t('titles.routina.name')}
              </h3>
              <p className="mt-3 text-base font-medium text-magenta md:text-lg">
                {t('titles.routina.tagline')}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t('titles.routina.body')}
              </p>
            </div>
          </Gutter>
        </article>
      </Reveal>

      {/* ── Secondary art panels ────────────────────── */}
      <div
        className={`grid gap-px border-b border-line bg-line ${
          PANELS.length > 1 ? 'md:grid-cols-2' : ''
        }`}
      >
        {PANELS.map((panel, i) => {
          const Art = TITLE_ART[panel.id]
          return (
            <Reveal key={panel.id} delay={i * 0.08}>
              <article className="group relative flex h-full min-h-[30rem] flex-col justify-end overflow-hidden bg-void md:min-h-[34rem]">
                <Art className="absolute inset-0 size-full scale-105 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/5" />
                <div className="absolute inset-0 scanlines opacity-50" />
                <div className="absolute inset-0 bg-grid opacity-15" />

                <div
                  className={
                    PANELS.length > 1
                      ? 'relative p-8 md:p-11'
                      : 'relative mx-auto w-full max-w-[88rem] px-6 py-10 md:px-10 md:py-14 lg:px-16 xl:px-20'
                  }
                >
                  <StatusLine
                    status={t(`titles.status.${panel.statusKey}`)}
                    platform={panel.platform}
                    accent={panel.dot}
                  />
                  <h3 className="mt-5 text-4xl leading-none font-black tracking-[-0.04em] md:text-6xl">
                    {t(`titles.${panel.id}.name`)}
                  </h3>
                  <p className={`mt-3 text-sm font-medium ${panel.text}`}>
                    {t(`titles.${panel.id}.tagline`)}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                    {t(`titles.${panel.id}.body`)}
                  </p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      {/* ── Follow-along CTA ────────────────────────── */}
      <Gutter>
        <Reveal>
          <div className="mt-14 grid gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="display-heading max-w-[20ch] text-2xl sm:text-3xl">
                {t('titles.ctaTitle')}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {t('titles.ctaBody')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionLink
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('titles.ctaButton')}
              </ActionLink>
              <ActionLink
                href={LINKS.x}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {LINKS.xHandle}
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </Gutter>
    </Section>
  )
}

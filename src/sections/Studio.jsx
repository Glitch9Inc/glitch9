import { useLanguage } from '../i18n/index.jsx'
import {
  Section,
  SectionMark,
  DisplayHeading,
  Reveal,
  ActionRoute,
} from '../components/Primitives.jsx'

export default function Studio() {
  const { t } = useLanguage()
  const values = t('studio.values')

  const figures = [
    { value: '10', label: t('studio.figures.releases') },
    { value: '500K', label: t('studio.figures.downloads') },
    { value: '2021', label: t('studio.figures.since') },
    { value: '3', label: t('studio.figures.languages') },
  ]

  return (
    <Section
      id="studio"
      className="border-t border-line bg-night/40 py-24 md:py-32"
    >
      <SectionMark number="04" label={t('studio.mark')} />

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <DisplayHeading className="max-w-[16ch]">
            {t('studio.headA')}
            <br />
            <span className="text-outline">{t('studio.headB')}</span>
          </DisplayHeading>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-lg text-[0.95rem] leading-relaxed text-muted">
              {t('studio.body')}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8">
              <ActionRoute to="/studio" variant="outline">
                {t('nav.about')}
              </ActionRoute>
            </div>
          </Reveal>

          {/* ── Figures ───────────────────────────── */}
          <Reveal delay={0.18}>
            <div className="mt-12">
              <span className="kicker">{t('studio.figuresTitle')}</span>
              <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
                {figures.map((f) => (
                  <div key={f.label} className="bg-void px-4 py-6">
                    <div className="font-poster text-4xl leading-none text-ink md:text-5xl">
                      {f.value}
                    </div>
                    <div className="mt-2 font-mono text-[10px] leading-snug tracking-[0.12em] text-faint uppercase">
                      {f.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Values ──────────────────────────────── */}
        <div className="lg:pt-4">
          <Reveal>
            <span className="kicker">{t('studio.valuesTitle')}</span>
          </Reveal>
          <ol className="mt-5 border-t border-line">
            {(Array.isArray(values) ? values : []).map((v, i) => (
              <Reveal key={v} delay={i * 0.05}>
                <li className="group flex gap-5 border-b border-line py-4 transition-colors duration-200 hover:bg-lilac/[0.04]">
                  <span className="font-mono text-[11px] text-magenta/70 transition-colors group-hover:text-magenta">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-muted transition-colors group-hover:text-ink">
                    {v}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

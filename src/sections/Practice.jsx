import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import {
  Section,
  SectionMark,
  DisplayHeading,
  Reveal,
} from '../components/Primitives.jsx'

// Order mirrors practice.items in the locales: Games, Apps, Developer Tools.
const HREFS = ['#titles', '#titles', '#tools']
const ACCENTS = ['text-magenta', 'text-cyan', 'text-lilac']
const HOVER = [
  'hover:bg-magenta/[0.045]',
  'hover:bg-cyan/[0.045]',
  'hover:bg-lilac/[0.045]',
]

export default function Practice() {
  const { t } = useLanguage()
  const items = t('practice.items')

  return (
    <Section id="practice" className="py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionMark number="02" label={t('practice.mark')} />
          <DisplayHeading className="mt-7 max-w-[11ch]">
            {t('practice.headA')}
            <br />
            <span className="text-magenta">{t('practice.headB')}</span>
            <br />
            {t('practice.headC')}
          </DisplayHeading>
        </div>

        <div className="border-t border-line">
          {(Array.isArray(items) ? items : []).map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <a
                href={HREFS[i]}
                className={`group grid grid-cols-[auto_1fr] gap-x-6 border-b border-line py-8 transition-colors duration-300 md:grid-cols-[5rem_1fr_auto] md:gap-x-10 md:py-10 ${HOVER[i]}`}
              >
                <span
                  className={`font-poster text-4xl leading-none md:text-6xl ${ACCENTS[i]} opacity-45 transition-opacity duration-300 group-hover:opacity-100`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <h3 className="text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase ${ACCENTS[i]}`}
                  >
                    {item.link}
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <ArrowUpRight className="col-start-2 hidden size-6 self-center text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink md:col-start-3 md:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

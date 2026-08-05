import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/index.jsx'
import { PRODUCTS, LINKS } from '../data/catalog.js'
import {
  Section,
  SectionMark,
  DisplayHeading,
  Reveal,
  ActionLink,
  ActionRoute,
} from '../components/Primitives.jsx'

function Row({ product, index, freeLabel }) {
  const isFree = product.price === 'Free'
  return (
    <Link
      to={`/tools/${product.slug}`}
      className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-line py-5 transition-colors duration-200 hover:bg-lilac/[0.05] md:grid-cols-[3.5rem_minmax(0,1.1fr)_minmax(0,1fr)_7rem_2rem] md:items-center md:gap-x-6 md:py-6"
    >
      {/* left magenta indicator */}
      <span className="absolute top-0 bottom-0 left-0 w-px scale-y-0 bg-magenta transition-transform duration-300 group-hover:scale-y-100" />

      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-magenta">
        {String(index + 1).padStart(2, '0')}
      </span>

      <h4 className="text-lg font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
        {product.name}
        {product.featured && (
          <span className="ml-2.5 align-middle font-mono text-[9px] tracking-[0.18em] text-magenta">
            ★
          </span>
        )}
      </h4>

      <div className="col-span-2 mt-2 flex flex-wrap gap-x-2.5 gap-y-1 md:col-span-1 md:mt-0">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`col-start-3 row-start-1 justify-self-end font-mono text-xs tracking-wider md:col-start-4 md:row-start-auto md:justify-self-start ${
          isFree ? 'text-cyan' : 'text-muted'
        }`}
      >
        {isFree ? freeLabel : product.price}
      </span>

      <ArrowRight className="hidden size-4 text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-ink md:block" />
    </Link>
  )
}

export default function Tools() {
  const { t } = useLanguage()
  const freeLabel = t('products.free')

  const groups = [
    { key: 'ai', label: t('products.groupAi') },
    { key: 'mobile', label: t('products.groupMobile') },
  ]

  let counter = -1

  return (
    <Section id="tools" className="border-y border-line bg-night/40 py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <SectionMark number="02" label={t('products.mark')} />
          <DisplayHeading className="mt-7 max-w-[14ch]">
            {t('products.headA')}
            <br />
            <span className="text-outline-magenta">{t('products.headB')}</span>
          </DisplayHeading>
        </div>
        <Reveal delay={0.12}>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {t('products.body')}
          </p>
        </Reveal>
      </div>

      <div className="mt-16">
        {groups.map((group) => (
          <div key={group.key} className="mb-10 last:mb-0">
            <Reveal>
              <div className="flex items-center gap-4 border-b border-line pb-3">
                <span className="kicker">{group.label}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="font-mono text-[10px] text-faint">
                  {PRODUCTS.filter((p) => p.group === group.key).length} pkg
                </span>
              </div>
            </Reveal>
            {PRODUCTS.filter((p) => p.group === group.key).map((p) => {
              counter += 1
              return (
                <Reveal key={p.id} delay={0.03}>
                  <Row product={p} index={counter} freeLabel={freeLabel} />
                </Reveal>
              )
            })}
          </div>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <ActionRoute to="/tools">{t('nav.products')}</ActionRoute>
          <ActionLink
            href={LINKS.assetStore}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('products.viewAll')}
          </ActionLink>
        </div>
      </Reveal>
    </Section>
  )
}

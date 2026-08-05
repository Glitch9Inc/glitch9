import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import {
  PRODUCTS,
  BUNDLED_TOOLS,
  SUPPORT_GUIDES,
  LINKS,
  coverSrc,
} from '../data/catalog.js'
import {
  Gutter,
  Reveal,
  PageMasthead,
  ActionLink,
} from '../components/Primitives.jsx'

function Row({ product, index, t }) {
  const isFree = product.price === 'Free'
  const cover = coverSrc(product.slug, 480)
  return (
    <Link
      to={`/tools/${product.slug}`}
      className="group relative grid grid-cols-[2.5rem_1fr] items-start gap-x-4 border-b border-line py-6 transition-colors duration-200 hover:bg-lilac/[0.05] md:grid-cols-[3.5rem_9rem_minmax(0,1fr)_7rem_2rem] md:items-center md:gap-x-8"
    >
      <span className="absolute top-0 bottom-0 left-0 w-px scale-y-0 bg-magenta transition-transform duration-300 group-hover:scale-y-100" />

      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-magenta">
        {String(index + 1).padStart(2, '0')}
      </span>

      {cover && (
        <div className="col-span-2 mb-3 overflow-hidden border border-line md:col-span-1 md:mb-0">
          <img
            src={cover}
            alt=""
            loading="lazy"
            width="480"
            height="320"
            className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="min-w-0">
        <h3 className="text-lg font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
          {product.name}
          {product.featured && (
            <span className="ml-2.5 align-middle font-mono text-[9px] text-magenta">
              ★
            </span>
          )}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
          {t(`productCopy.${product.id}.oneLiner`)}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span
        className={`justify-self-start font-mono text-xs tracking-wider ${
          isFree ? 'text-cyan' : 'text-muted'
        }`}
      >
        {isFree ? t('tools.detail.free') : product.price}
      </span>

      <ArrowRight className="hidden size-4 text-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-ink md:block" />
    </Link>
  )
}

export default function Tools() {
  const { t } = useLanguage()
  const groups = [
    { key: 'ai', label: t('tools.groupAi') },
    { key: 'mobile', label: t('tools.groupMobile') },
  ]
  let counter = -1

  return (
    <>
      <PageMasthead number="03" label={t('tools.mark')} lede={t('tools.body')} wide>
        {t('tools.headA')}
        <br />
        <span className="text-outline-magenta">{t('tools.headB')}</span>
      </PageMasthead>

      <Gutter className="pb-24 md:pb-32">
        {groups.map((group) => (
          <div key={group.key} className="mb-14 last:mb-0">
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
                  <Row product={p} index={counter} t={t} />
                </Reveal>
              )
            })}
          </div>
        ))}

        {/* ── Bundled tools (hidden when there are none) ── */}
        {BUNDLED_TOOLS.length > 0 && (
        <Reveal>
          <div className="mt-16 border border-line bg-night/40 p-7 md:p-9">
            <span className="kicker">{t('tools.bundledTitle')}</span>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              {t('tools.bundledBody')}
            </p>
            <div className="mt-6 space-y-4">
              {BUNDLED_TOOLS.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-line pt-4"
                >
                  <h3 className="text-base font-bold tracking-tight transition-colors group-hover:text-cyan">
                    {tool.name}
                  </h3>
                  <p className="min-w-0 flex-1 text-sm text-muted">
                    {t(`productCopy.${tool.id}.oneLiner`)}
                  </p>
                  <ArrowUpRight className="size-4 shrink-0 text-faint transition-colors group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        )}

        {/* ── Setup guides ──────────────────────────── */}
        <Reveal>
          <div className="mt-10">
            <span className="kicker">{t('tools.supportTitle')}</span>
            <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
              {SUPPORT_GUIDES.map((g) => (
                <a
                  key={g.id}
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 bg-void px-5 py-4 transition-colors hover:bg-elevated/40"
                >
                  <span className="font-mono text-xs text-muted transition-colors group-hover:text-cyan">
                    {g.title}
                  </span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-colors group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            <ActionLink
              href={LINKS.assetStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('tools.detail.buy')}
            </ActionLink>
            <ActionLink
              href={LINKS.docs}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('tools.detail.docs')}
            </ActionLink>
          </div>
        </Reveal>
      </Gutter>
    </>
  )
}

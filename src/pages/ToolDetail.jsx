import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import { PRODUCTS, bySlug } from '../data/catalog.js'
import { Gutter, Reveal, SectionMark } from '../components/Primitives.jsx'

function SpecRow({ label, children }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3.5 last:border-b-0 md:grid-cols-[9rem_1fr]">
      <dt className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
        {label}
      </dt>
      <dd className="min-w-0 text-sm text-muted">{children}</dd>
    </div>
  )
}

export default function ToolDetail() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const product = bySlug(slug)

  if (!product) return <Navigate to="/tools" replace />

  const isFree = product.price === 'Free'
  const copy = `productCopy.${product.id}`
  const features = t(`${copy}.features`)
  const siblings = PRODUCTS.filter(
    (p) => p.group === product.group && p.id !== product.id,
  ).slice(0, 4)

  return (
    <>
      {/* ── Masthead ────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-line pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_70%_at_25%_40%,#000_10%,transparent_75%)]" />
        <div className="scanlines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[30rem] rounded-full bg-magenta/10 blur-[130px]" />

        <Gutter>
          <Reveal>
            <Link
              to="/tools"
              className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-faint uppercase transition-colors hover:text-magenta"
            >
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              {t('tools.detail.back')}
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 max-w-[20ch] text-4xl leading-[1.02] font-black tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {product.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-lilac">
              {t(`${copy}.oneLiner`)}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span
                className={`font-poster text-3xl leading-none ${isFree ? 'text-cyan' : 'text-ink'}`}
              >
                {isFree ? t('tools.detail.free') : product.price}
              </span>
              <span className="h-6 w-px bg-line" />
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 border border-magenta bg-magenta px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-void uppercase transition-colors duration-200 hover:border-cyan hover:bg-cyan"
              >
                {t('tools.detail.buy')}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {product.docsUrl && (
                <a
                  href={product.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 border border-line bg-white/[0.015] px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 hover:border-cyan hover:text-cyan"
                >
                  {t('tools.detail.docs')}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </Reveal>
        </Gutter>
      </section>

      {/* ── Body ────────────────────────────────────── */}
      <Gutter className="py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="kicker">{t('tools.detail.overview')}</span>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
                {t(`${copy}.summary`)}
              </p>
            </Reveal>

            {Array.isArray(features) && features.length > 0 && (
              <div className="mt-12">
                <Reveal>
                  <span className="kicker">{t('tools.detail.features')}</span>
                </Reveal>
                <ul className="mt-5 border-t border-line">
                  {features.map((f, i) => (
                    <Reveal key={f} delay={i * 0.04}>
                      <li className="group flex gap-4 border-b border-line py-4">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-magenta"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm leading-relaxed text-muted transition-colors group-hover:text-ink">
                          {f}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Spec sheet ────────────────────────── */}
          <div className="lg:pt-1">
            <Reveal>
              <div className="brackets border border-line bg-night/40 p-6 md:p-7">
                <span className="kicker">{t('tools.detail.spec')}</span>
                <dl className="mt-5">
                  <SpecRow label={t('tools.detail.version')}>
                    <span className="font-mono text-xs">{product.version}</span>
                  </SpecRow>
                  {product.updated && (
                    <SpecRow label={t('tools.detail.updated')}>
                      <span className="font-mono text-xs">
                        {product.updated}
                      </span>
                    </SpecRow>
                  )}
                  <SpecRow label={t('tools.detail.minUnity')}>
                    <span className="font-mono text-xs">
                      {product.minUnity}+
                    </span>
                  </SpecRow>
                  <SpecRow label={t('tools.detail.platforms')}>
                    {product.platforms?.length ? (
                      <span className="text-xs">
                        {product.platforms.join(' · ')}
                      </span>
                    ) : (
                      <span className="text-xs text-faint">
                        {t('tools.detail.undocumented')}
                      </span>
                    )}
                  </SpecRow>
                  <SpecRow label={t('tools.detail.dependencies')}>
                    {product.dependencies?.length ? (
                      <span className="font-mono text-xs">
                        {product.dependencies.join(', ')}
                      </span>
                    ) : (
                      <span className="text-xs text-faint">
                        {t('tools.detail.undocumented')}
                      </span>
                    )}
                  </SpecRow>
                  {product.providers?.length > 0 && (
                    <SpecRow label={t('tools.detail.providers')}>
                      <span className="text-xs leading-relaxed">
                        {product.providers.join(' · ')}
                      </span>
                    </SpecRow>
                  )}
                </dl>
              </div>
            </Reveal>

            {siblings.length > 0 && (
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <span className="kicker">{t('tools.detail.alsoSee')}</span>
                  <div className="mt-4 border-t border-line">
                    {siblings.map((s) => (
                      <Link
                        key={s.id}
                        to={`/tools/${s.slug}`}
                        className="group flex items-center justify-between gap-4 border-b border-line py-3.5 transition-colors hover:bg-lilac/[0.04]"
                      >
                        <span className="text-sm text-muted transition-colors group-hover:text-ink">
                          {s.name}
                        </span>
                        <span className="font-mono text-[11px] text-faint">
                          {s.price === 'Free'
                            ? t('tools.detail.free')
                            : s.price}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Gutter>
    </>
  )
}

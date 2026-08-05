import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../i18n/index.jsx'
import { ActionLink, Glitch, Gutter } from '../components/Primitives.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const artY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        }

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* ── Key art ─────────────────────────────────── */}
      <motion.div
        style={reduce ? undefined : { y: artY, scale: artScale }}
        className="absolute inset-y-0 right-0 -z-10 w-full origin-top lg:w-[58%]"
      >
        <img
          src="/images/illust_aimi-1536.webp"
          srcSet="/images/illust_aimi-768.webp 768w, /images/illust_aimi-1024.webp 1024w, /images/illust_aimi-1536.webp 1536w"
          sizes="(max-width: 1024px) 100vw, 58vw"
          alt={t('hero.characterAimi')}
          className="size-full object-cover object-[56%_center]"
          fetchPriority="high"
        />
        {/* scrims: fade into the page on the left and at the edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/20 lg:from-void lg:via-void/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
      </motion.div>

      {/* full-bleed texture so the art container has no visible seam */}
      <div className="scanlines pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:linear-gradient(to_right,#000_0%,transparent_55%)]" />

      {/* ── Vertical rail ───────────────────────────── */}
      <div className="pointer-events-none absolute top-1/2 left-3 hidden -translate-y-1/2 xl:block">
        <span className="vertical-rail kicker">{t('hero.rail')}</span>
      </div>

      <Gutter className="relative w-full">
        <motion.h1
          className="hero-title max-w-[56rem]"
          style={{ textShadow: '0 6px 44px rgba(6,6,22,0.92)' }}
        >
          <motion.span {...rise(0.05)} className="block">
            {t('hero.line1')}
          </motion.span>
          <motion.span {...rise(0.15)} className="text-outline block">
            {t('hero.line2')}
          </motion.span>
          <motion.span {...rise(0.25)} className="block">
            <Glitch>{t('hero.line3')}</Glitch>
          </motion.span>
        </motion.h1>

        <motion.p
          {...rise(0.4)}
          className="mt-9 max-w-md text-[0.95rem] leading-relaxed text-muted"
          style={{ textShadow: '0 2px 24px rgba(6,6,22,0.9)' }}
        >
          {t('hero.body')}
        </motion.p>

        <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap gap-3">
          <ActionLink href="#titles">{t('hero.ctaPrimary')}</ActionLink>
          <ActionLink href="#tools" variant="outline">
            {t('hero.ctaSecondary')}
          </ActionLink>
        </motion.div>
      </Gutter>

      {/* ── Scroll cue ──────────────────────────────── */}
      <motion.div
        {...rise(0.7)}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex"
      >
        <span className="kicker">{t('hero.scroll')}</span>
        <span className="h-8 w-px bg-gradient-to-b from-magenta to-transparent" />
      </motion.div>
    </section>
  )
}

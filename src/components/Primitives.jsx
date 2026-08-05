import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ── Reveal ───────────────────────────────────────────── */
export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

/* ── Glitch text ──────────────────────────────────────── */
export function Glitch({ children, className = '' }) {
  return (
    <span className={`glitch ${className}`} data-text={children}>
      {children}
    </span>
  )
}

/* ── Section marker: 01 ─── LABEL ─────────────────────── */
export function SectionMark({ number, label }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-poster text-2xl leading-none text-magenta">
          {number}
        </span>
        <span className="h-px w-12 bg-magenta/60" />
        <span className="kicker">{label}</span>
      </div>
    </Reveal>
  )
}

/* ── Big display heading ──────────────────────────────── */
export function DisplayHeading({ children, className = '' }) {
  return (
    <Reveal delay={0.06}>
      <h2
        className={`display-heading text-[2.1rem] leading-[0.98] sm:text-5xl md:text-6xl lg:text-[4rem] ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  )
}

/* ── Action link (hard-edged, bracketed) ──────────────── */
export function ActionLink({
  children,
  variant = 'solid',
  className = '',
  ...props
}) {
  const styles = {
    solid:
      'bg-magenta text-void hover:bg-cyan hover:text-void border-magenta hover:border-cyan',
    outline:
      'border-line text-ink hover:border-cyan hover:text-cyan bg-white/[0.015]',
  }
  return (
    <a
      className={`group inline-flex items-center gap-2.5 border px-6 py-3.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

/* ── Same look, but a client-side route ───────────────── */
export function ActionRoute({ to, children, variant = 'solid', className = '' }) {
  const styles = {
    solid:
      'bg-magenta text-void hover:bg-cyan hover:text-void border-magenta hover:border-cyan',
    outline:
      'border-line text-ink hover:border-cyan hover:text-cyan bg-white/[0.015]',
  }
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 border px-6 py-3.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  )
}

/* ── Page masthead, shared by the sub-pages ───────────── */
export function PageMasthead({ number, label, children, lede, wide = false }) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_70%_at_25%_40%,#000_10%,transparent_75%)]" />
      <div className="scanlines pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[32rem] rounded-full bg-magenta/10 blur-[130px]" />
      <Gutter>
        <SectionMark number={number} label={label} />
        <Reveal delay={0.06}>
          <h1
            className={`hero-title mt-7 ${wide ? 'max-w-[58rem]' : 'max-w-[46rem]'}`}
          >
            {children}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-xl text-[0.95rem] leading-relaxed text-muted">
              {lede}
            </p>
          </Reveal>
        )}
      </Gutter>
    </section>
  )
}

/* ── Section wrapper ──────────────────────────────────── */
export function Section({ id, className = '', children, bleed = false }) {
  return (
    <section id={id} className={`relative scroll-mt-20 ${className}`}>
      {bleed ? children : <Gutter>{children}</Gutter>}
    </section>
  )
}

export function Gutter({ className = '', children }) {
  return (
    <div
      className={`mx-auto max-w-[88rem] px-6 md:px-10 lg:px-16 xl:px-20 ${className}`}
    >
      {children}
    </div>
  )
}

/* ── Marquee strip ────────────────────────────────────── */
export function Marquee({ items, className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div
      className={`overflow-hidden border-y border-line bg-night/60 py-3.5 ${className}`}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center font-mono text-[11px] tracking-[0.22em] whitespace-nowrap text-muted uppercase"
          >
            {item}
            <span className="mx-6 text-magenta">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

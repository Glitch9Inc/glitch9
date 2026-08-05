import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import { LINKS } from '../data/catalog.js'
import { X_POSTS } from '../data/posts.js'
import { Section, Reveal } from '../components/Primitives.jsx'

export function XMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.81-5.96 6.81H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.05 4.13H5.09l11.99 15.64Z" />
    </svg>
  )
}

function FollowCard({ t, wide = false }) {
  return (
    <a
      href={LINKS.x}
      target="_blank"
      rel="noopener noreferrer"
      className={`brackets group flex h-full flex-col justify-between border border-line bg-night/40 p-7 transition-colors duration-200 hover:border-magenta/50 hover:bg-magenta/[0.04] ${
        wide ? 'md:p-10' : ''
      }`}
    >
      <div>
        <XMark className="size-6 text-ink transition-colors group-hover:text-magenta" />
        <p
          className={`mt-5 font-bold tracking-tight ${wide ? 'text-2xl md:text-3xl' : 'text-lg'}`}
        >
          {LINKS.xHandle}
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          {t('onx.followBody')}
        </p>
      </div>
      <span className="mt-7 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-magenta uppercase">
        {t('onx.follow')}
        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  )
}

export default function OnX() {
  const { t } = useLanguage()
  const posts = X_POSTS.slice(0, 3)

  return (
    <Section id="onx" className="border-t border-line py-20 md:py-24">
      <Reveal>
        <div className="flex flex-wrap items-center gap-4 border-b border-line pb-4">
          <XMark className="size-3.5 text-magenta" />
          <span className="kicker">{t('onx.mark')}</span>
          <span className="h-px flex-1 bg-line" />
          <a
            href={LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] text-faint transition-colors hover:text-magenta"
          >
            {LINKS.xHandle}
          </a>
        </div>
      </Reveal>

      {posts.length === 0 ? (
        <Reveal delay={0.06}>
          <div className="mt-8">
            <FollowCard t={t} wide />
          </div>
        </Reveal>
      ) : (
        <div className="mt-8 grid gap-px bg-line [grid-template-columns:repeat(auto-fit,minmax(19rem,1fr))]">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.06} className="h-full">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col bg-void p-7 transition-colors duration-200 hover:bg-magenta/[0.04]"
              >
                <div className="flex items-center gap-3">
                  <time className="font-mono text-[11px] text-faint">
                    {post.date}
                  </time>
                  {post.tag && (
                    <>
                      <span className="h-px w-4 bg-line" />
                      <span className="font-mono text-[10px] tracking-[0.14em] text-magenta uppercase">
                        {post.tag}
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-muted transition-colors group-hover:text-ink">
                  {post.text}
                </p>

                {post.media && (
                  <div className="mt-5 overflow-hidden border border-line">
                    <img
                      src={post.media.src}
                      alt={post.media.alt || ''}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <span className="flex-1" />
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.16em] text-faint uppercase transition-colors group-hover:text-magenta">
                  {t('onx.read')}
                  <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={posts.length * 0.06} className="h-full">
            <FollowCard t={t} />
          </Reveal>
        </div>
      )}
    </Section>
  )
}

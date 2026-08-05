import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/index.jsx'
import {
  Section,
  SectionMark,
  DisplayHeading,
  Reveal,
} from '../components/Primitives.jsx'

// Placeholder feed. Replace with markdown/CMS-driven posts.
const POSTS = [
  {
    id: 'routina-beta',
    date: '2026.07.28',
    tag: 'ROUTiNA',
    title: 'Welcome to ROUTiNA',
    excerpt:
      'We are opening the beta. Here is what the first build does, and what it deliberately does not do yet.',
  },
  {
    id: 'aidevkit-local',
    date: '2026.06.11',
    tag: 'AI Dev Kit',
    title: 'Local models, RAG and tool calling',
    excerpt:
      'The PRO release brings three local inference backends, a built-in vector store, and typed tool definitions.',
  },
  {
    id: 'ai-sheets',
    date: '2026.05.02',
    tag: 'AI Sheets',
    title: 'Spreadsheet-driven localization',
    excerpt:
      'Generate, translate and version game text in a familiar grid — without leaving the Unity editor.',
  },
]

export default function Log() {
  const { t } = useLanguage()

  return (
    <Section id="news" className="py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionMark number="05" label={t('news.mark')} />
          <DisplayHeading className="mt-7 max-w-[12ch]">
            {t('news.headA')}
            <br />
            {t('news.headB')}
          </DisplayHeading>
        </div>

        <div className="border-t border-line">
          {POSTS.length === 0 ? (
            <p className="py-8 text-sm text-faint">{t('news.empty')}</p>
          ) : (
            POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.07}>
                <a
                  href="#news"
                  className="group grid gap-x-8 border-b border-line py-7 transition-colors duration-200 hover:bg-cyan/[0.04] md:grid-cols-[7rem_1fr_auto] md:items-baseline"
                >
                  <div className="flex items-center gap-3 md:block">
                    <time className="font-mono text-[11px] text-faint">
                      {post.date}
                    </time>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-cyan uppercase md:mt-1.5 md:block">
                      {post.tag}
                    </span>
                  </div>

                  <div className="mt-3 min-w-0 md:mt-0">
                    <h3 className="text-xl transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-4 size-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan md:mt-0" />
                </a>
              </Reveal>
            ))
          )}
        </div>
      </div>
    </Section>
  )
}

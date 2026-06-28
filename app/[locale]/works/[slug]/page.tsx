import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '../../../data/projects'
import basePath from '../../../basePath'
import type { Locale } from '../../../i18n/config'
import { locales } from '../../../i18n/config'

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params
  const locale = (rawLocale === 'en' ? 'en' : 'zh') as Locale
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const t = {
    home: locale === 'zh' ? '首页' : 'Home',
    works: locale === 'zh' ? '作品' : 'Works',
    background: locale === 'zh' ? '项目背景' : 'Background',
    features: locale === 'zh' ? '核心功能' : 'Features',
    highlights: locale === 'zh' ? '功能亮点' : 'Highlights',
    techStack: locale === 'zh' ? '技术栈' : 'Tech Stack',
    duration: locale === 'zh' ? '开发周期' : 'Timeline',
    cta: locale === 'zh' ? '想做类似项目？' : 'Want something similar?',
    contact: locale === 'zh' ? '免费咨询' : 'Get in Touch',
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <nav className="flex items-center gap-2 text-sm text-[#888888] mb-8">
        <Link href={`/${locale}`} className="hover:text-[#171717]">{t.home}</Link>
        <span>/</span>
        <Link href={`/${locale}/works`} className="hover:text-[#171717]">{t.works}</Link>
        <span>/</span>
        <span className="text-[#171717]">{project.title}</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl font-semibold tracking-tight text-[#171717]">{project.title}</h1>
          <span className={`text-xs px-2.5 py-1 rounded-full ${
            project.status === '已上线' ? 'bg-green-50 text-green-600' :
            project.status === '开发中' ? 'bg-yellow-50 text-yellow-600' :
            'bg-blue-50 text-blue-600'
          }`}>{project.status}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      {project.images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {project.images.map((img, i) => (
            <img key={i} src={`${basePath}${img}`} alt={`${project.title} ${i + 1}`}
              className="w-full rounded-xl border border-[#ebebeb] object-cover" />
          ))}
        </div>
      ) : (
        <div className="h-64 rounded-xl bg-gradient-to-br from-[#0070f3]/20 to-[#0070f3]/5 flex items-center justify-center text-[#888888] text-sm mb-10">
          Screenshots coming soon...
        </div>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">{t.background}</h2>
        <p className="text-[#4d4d4d] leading-relaxed">{project.background}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">{t.features}</h2>
        <ul className="space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[#4d4d4d] text-sm">
              <span className="text-[#0070f3] mt-0.5">•</span>{f}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-4">{t.highlights}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((h) => (
            <div key={h.title} className="bg-white border border-[#ebebeb] rounded-xl p-6">
              <h3 className="font-semibold text-[#171717] mb-1">{h.title}</h3>
              <p className="text-sm text-[#4d4d4d]">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">{t.techStack}</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-2">{t.duration}</h2>
        <p className="text-[#4d4d4d]">{project.duration}</p>
      </section>

      <section className="text-center py-10 border-t border-[#ebebeb]">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">{t.cta}</h2>
        <Link href={`/${locale}/services`} className="bg-[#0070f3] text-white rounded-full px-6 py-2.5 text-sm font-medium">
          {t.contact}
        </Link>
      </section>
    </div>
  )
}

import type { Locale } from '../../i18n/config'
import { getDictionary } from '../../i18n/dictionaries'

const techGroups = [
  { label: { zh: '后端', en: 'Backend' }, items: ['Go', 'Gin', 'GORM', 'Python', 'FastAPI'] },
  { label: { zh: '前端', en: 'Frontend' }, items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', '微信小程序'] },
  { label: { zh: 'AI', en: 'AI' }, items: ['LangChain', 'LangGraph', 'RAG', 'Prompt工程', 'Agent'] },
  { label: { zh: '部署', en: 'DevOps' }, items: ['Docker', 'Nginx', 'CI/CD', '腾讯云', 'Vercel'] },
  { label: { zh: '数据', en: 'Data' }, items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'COS/OSS'] },
]

const workflow = {
  zh: ['深度沟通需求与目标', '输出原型与技术方案', '敏捷开发每周可见进度', '部署上线持续跟进'],
  en: ['Deep-dive into requirements', 'Deliver prototype & tech plan', 'Agile dev with weekly demos', 'Deploy & ongoing support'],
}

const industries = {
  zh: ['教育培训', '医疗健康', '电商零售', '企业服务', '航空科技', '文化传媒', '餐饮服务', 'AI/SaaS'],
  en: ['Education', 'Healthcare', 'E-commerce', 'Enterprise', 'Aviation', 'Culture & Media', 'F&B', 'AI/SaaS'],
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  const locale = (rawLocale === 'en' ? 'en' : 'zh') as Locale
  const dict = await getDictionary(locale)
  const lang = locale === 'en' ? 'en' : 'zh'

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[#171717] mb-6">{dict.about.title}</h1>
      <p className="text-[#4d4d4d] leading-relaxed mb-12">{dict.about.intro}</p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6">{dict.about.techStack}</h2>
        <div className="space-y-4">
          {techGroups.map((g) => (
            <div key={g.label.zh}>
              <span className="text-sm font-medium text-[#171717] mr-3">{g.label[lang]}</span>
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {g.items.map((t) => (
                  <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6">{dict.about.workflow}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflow[lang].map((step, i) => (
            <div key={step} className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#0070f3] text-white flex items-center justify-center text-sm font-medium shrink-0">
                {i + 1}
              </div>
              <span className="text-[#4d4d4d] text-sm">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4">{dict.about.industries}</h2>
        <div className="flex flex-wrap gap-2">
          {industries[lang].map((ind) => (
            <span key={ind} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{ind}</span>
          ))}
        </div>
      </section>
    </div>
  )
}

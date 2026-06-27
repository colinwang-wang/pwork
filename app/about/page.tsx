const techGroups = [
  { label: '后端', items: ['Go', 'Gin', 'GORM', 'Python', 'FastAPI'] },
  { label: '前端', items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', '微信小程序'] },
  { label: 'AI', items: ['LangChain', 'LangGraph', 'RAG', 'Prompt工程', 'Agent'] },
  { label: '部署', items: ['Docker', 'Nginx', 'CI/CD', '腾讯云', 'Vercel'] },
  { label: '数据', items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'COS/OSS'] },
]

const workflow = ['深度沟通需求与目标', '输出原型与技术方案', '敏捷开发每周可见进度', '部署上线持续跟进']

const industries = ['教育培训', '医疗健康', '电商零售', '企业服务', '航空科技', '文化传媒', '餐饮服务', 'AI/SaaS']

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[#171717] mb-6">关于我</h1>

      {/* Intro */}
      <p className="text-[#4d4d4d] leading-relaxed mb-12">
        独立全栈开发者，15年开发经验。专注中小企业数字化，擅长将AI能力融入实际业务场景。
        从需求分析到上线部署全流程独立交付，累计完成32+商业项目，覆盖教育、医疗、电商、企业服务等8+行业。
        信奉"小团队大产出"理念，凭借15年全栈经验为客户提供高性价比的技术解决方案。
      </p>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6">技术栈全景</h2>
        <div className="space-y-4">
          {techGroups.map((g) => (
            <div key={g.label}>
              <span className="text-sm font-medium text-[#171717] mr-3">{g.label}</span>
              <div className="inline-flex flex-wrap gap-2 mt-1">
                {g.items.map((t) => (
                  <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6">工作方式</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workflow.map((step, i) => (
            <div key={step} className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-[#0070f3] text-white flex items-center justify-center text-sm font-medium shrink-0">
                {i + 1}
              </div>
              <span className="text-[#4d4d4d] text-sm">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4">行业经验</h2>
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <span key={ind} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{ind}</span>
          ))}
        </div>
      </section>
    </div>
  )
}

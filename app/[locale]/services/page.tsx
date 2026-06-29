import type { Locale } from '../../i18n/config'
import { getDictionary } from '../../i18n/dictionaries'
import FaqAccordion from '../../components/FaqAccordion'

const serviceCategories = {
  zh: [
    {
      icon: '📱',
      title: 'APP开发',
      items: ['iOS/Android原生开发', '跨平台APP（UniApp/Flutter）', '系统维护与版本迭代', '二次开发与功能扩展'],
    },
    {
      icon: '💬',
      title: '小程序开发',
      items: ['微信/支付宝/抖音小程序', '源码搭建与环境部署', '第三方接口对接', '现有系统适配小程序端'],
    },
    {
      icon: '🌐',
      title: 'H5/Web开发',
      items: ['响应式网站与H5页面', '管理后台与数据看板', 'BUG修复与性能优化', '服务器部署与运维'],
    },
    {
      icon: '⚙️',
      title: '定制开发',
      items: ['按需求深度定制', '完整源码交付', '专属版权归客户所有', '长期技术支持保障'],
    },
  ],
  en: [
    {
      icon: '📱',
      title: 'APP Development',
      items: ['iOS/Android native', 'Cross-platform (UniApp/Flutter)', 'System maintenance & iteration', 'Feature extension'],
    },
    {
      icon: '💬',
      title: 'Mini Programs',
      items: ['WeChat/Alipay/Douyin', 'Source code deployment', 'Third-party API integration', 'Existing system adaptation'],
    },
    {
      icon: '🌐',
      title: 'H5/Web Development',
      items: ['Responsive sites & H5 pages', 'Admin panels & dashboards', 'Bug fixes & optimization', 'Server deployment & ops'],
    },
    {
      icon: '⚙️',
      title: 'Custom Development',
      items: ['Tailored to your needs', 'Full source code delivery', 'Exclusive IP ownership', 'Long-term tech support'],
    },
  ],
}

const techStacks = ['PHP', 'Java', 'Python', 'Go', 'UniApp', 'Vue', 'React', 'Next.js', 'HTML5', 'Node.js', 'MySQL', 'Redis', 'Docker', 'Nginx']

const advantages = {
  zh: [
    { icon: '👨‍💻', title: '纯技术团队', desc: '非中介非外包转包，每一行代码都由我们自己完成' },
    { icon: '🏢', title: '正规机构', desc: '专业软件开发机构，持有营业执照，合作正规有保障' },
    { icon: '📋', title: '需求沟通细致', desc: '深入理解业务场景，确保开发方向与预期一致' },
    { icon: '📦', title: '源码完整交付', desc: '项目源码100%交付，不绑定不依赖，自主可控' },
    { icon: '🛡️', title: '售后有保障', desc: '免费维护期+长期技术支持，上线后持续跟进' },
  ],
  en: [
    { icon: '👨‍💻', title: 'Direct Tech Team', desc: 'No middlemen — every line of code written by us' },
    { icon: '🏢', title: 'Licensed Company', desc: 'Registered software firm with business license' },
    { icon: '📋', title: 'Thorough Communication', desc: 'Deep understanding of your business before coding' },
    { icon: '📦', title: 'Full Source Delivery', desc: '100% source code handover, no lock-in' },
    { icon: '🛡️', title: 'After-sales Support', desc: 'Free maintenance period + long-term tech support' },
  ],
}

const steps = {
  zh: [
    { num: '01', title: '提供需求说明', desc: '描述项目功能、参考案例、预算周期' },
    { num: '02', title: '制定开发方案', desc: '输出技术方案、报价与排期计划' },
    { num: '03', title: '按阶段交付成果', desc: '每周可见进度，阶段性验收确认' },
    { num: '04', title: '提供技术支持', desc: '部署上线 + 免费维护 + 长期响应' },
  ],
  en: [
    { num: '01', title: 'Submit Requirements', desc: 'Describe features, references & budget' },
    { num: '02', title: 'Development Plan', desc: 'Tech proposal, quote & timeline' },
    { num: '03', title: 'Phased Delivery', desc: 'Weekly progress, staged acceptance' },
    { num: '04', title: 'Tech Support', desc: 'Deployment + free maintenance + ongoing support' },
  ],
}

const plans = [
  {
    name: { zh: '轻量版', en: 'Lite' },
    price: '¥200',
    desc: { zh: '展示型网站 / 单页应用', en: 'Showcase sites / single-page apps' },
    features: {
      zh: ['单端应用（H5或小程序）', '基础功能开发', '1-2天交付', '源码交付', '1个月免费维护'],
      en: ['Single platform (H5 or Mini Program)', 'Core features', '1-2 day delivery', 'Source code delivery', '1 month free maintenance'],
    },
  },
  {
    name: { zh: '标准版', en: 'Standard' },
    price: '¥1,000',
    desc: { zh: '带后台的业务系统', en: 'Business system with admin panel' },
    recommended: true,
    features: {
      zh: ['多端应用（小程序+管理后台）', '完整业务流程开发', '支付/接口等能力集成', '3-5天交付', '源码交付', '1个月免费维护'],
      en: ['Multi-platform (App + Admin)', 'Complete business logic', 'Payment / API integration', '3-5 day delivery', 'Source code delivery', '1 month free maintenance'],
    },
  },
  {
    name: { zh: '定制版', en: 'Custom' },
    price: '¥2,500',
    desc: { zh: '复杂系统 / 多端全栈', en: 'Complex systems / full-stack multi-platform' },
    features: {
      zh: ['APP+小程序+Web全端开发', 'AI能力深度集成', '多角色权限体系', '按阶段交付', '源码交付+部署文档', '专属技术顾问', '1个月免费维护'],
      en: ['APP + Mini Program + Web', 'Deep AI integration', 'Multi-role permissions', 'Phased delivery', 'Source + deployment docs', 'Dedicated tech advisor', '1 month free maintenance'],
    },
  },
]

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  const locale = (rawLocale === 'en' ? 'en' : 'zh') as Locale
  const dict = await getDictionary(locale)
  const lang = locale === 'en' ? 'en' : 'zh'

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#171717] mb-4">
          {lang === 'zh' ? '软件开发服务' : 'Software Development Services'}
        </h1>
        <p className="text-[#4d4d4d] text-lg max-w-2xl mx-auto">
          {lang === 'zh'
            ? '纯个人技术团队，非中介，多年项目经验。支持APP、小程序、H5等多端开发，系统维护、二次开发、定制开发都可以做。'
            : 'Direct tech team with years of experience. APP, Mini Program, H5 multi-platform development, maintenance, and custom solutions.'}
        </p>
      </div>

      {/* Service Categories */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8 text-center">
          {lang === 'zh' ? '服务内容' : 'What We Do'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories[lang].map((cat) => (
            <div key={cat.title} className="bg-white border border-[#ebebeb] rounded-xl p-6 hover:shadow-sm transition">
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-[#171717] mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-[#4d4d4d] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#0070f3] shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4 text-center">
          {lang === 'zh' ? '技术方向' : 'Tech Stack'}
        </h2>
        <p className="text-center text-[#888888] text-sm mb-6">
          {lang === 'zh' ? '覆盖主流技术栈，各类管理系统、后台对接、API开发' : 'Covering mainstream technologies for admin systems, backend APIs & more'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techStacks.map((tech) => (
            <span key={tech} className="bg-[#fafafa] text-[#171717] text-sm font-medium px-4 py-2 rounded-full border border-[#ebebeb]">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8 text-center">
          {lang === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {advantages[lang].map((adv) => (
            <div key={adv.title} className="text-center p-5 bg-white border border-[#ebebeb] rounded-xl">
              <div className="text-3xl mb-3">{adv.icon}</div>
              <h3 className="font-semibold text-[#171717] mb-1 text-sm">{adv.title}</h3>
              <p className="text-xs text-[#888888]">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8 text-center">
          {lang === 'zh' ? '合作流程' : 'How We Work'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps[lang].map((step, i) => (
            <div key={step.num} className="relative bg-white border border-[#ebebeb] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#0070f3]/20 mb-2">{step.num}</div>
              <h3 className="font-semibold text-[#171717] text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-[#888888]">{step.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 text-[#ebebeb]">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4 text-center">
          {lang === 'zh' ? '服务报价' : 'Pricing'}
        </h2>
        <p className="text-center text-[#888888] text-sm mb-8">
          {lang === 'zh' ? '透明定价，按需选择，所有方案均含源码交付' : 'Transparent pricing with source code delivery included'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name.zh} className={`bg-white border rounded-xl p-6 ${plan.recommended ? 'border-[#0070f3] ring-1 ring-[#0070f3] relative' : 'border-[#ebebeb]'}`}>
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[#0070f3] text-white px-3 py-1 rounded-full">
                  {lang === 'zh' ? '推荐' : 'Popular'}
                </span>
              )}
              <h3 className="text-xl font-semibold text-[#171717] mt-2">{plan.name[lang]}</h3>
              <div className="text-3xl font-bold text-[#171717] mt-3">
                {plan.price}<span className="text-sm text-[#888888] font-normal ml-1">{lang === 'zh' ? '起' : '+'}</span>
              </div>
              <p className="text-sm text-[#888888] mt-1 mb-5">{plan.desc[lang]}</p>
              <ul className="space-y-2.5">
                {plan.features[lang].map((f) => (
                  <li key={f} className="text-sm text-[#4d4d4d] flex items-start gap-2">
                    <span className="text-[#0070f3] shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6 text-center">
          {lang === 'zh' ? '常见问题' : 'FAQ'}
        </h2>
        <FaqAccordion />
      </section>
    </div>
  )
}

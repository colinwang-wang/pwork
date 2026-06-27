import FaqAccordion from '../components/FaqAccordion'

const plans = [
  {
    name: '轻量版',
    price: '¥200',
    desc: '适合个人/初创项目',
    features: ['单端应用（小程序或Web）', '基础功能模块', '1天交付', '1个月免费维护'],
  },
  {
    name: '标准版',
    price: '¥1,000',
    desc: '适合中小企业核心业务',
    recommended: true,
    features: ['多端应用（小程序+管理后台）', '完整业务流程', '支付/IM等能力集成', '3天交付', '1个月免费维护'],
  },
  {
    name: '定制版',
    price: '¥2,500',
    desc: '适合复杂业务系统',
    features: ['全端定制开发', 'AI能力深度集成', '多角色权限体系', '5天交付', '1个月免费维护', '专属技术顾问'],
  },
]

const extras = ['UI/UX设计', '域名与服务器代购', '微信支付商户号申请', 'ICP备案代办', 'SSL证书配置', 'GEO基础优化']

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[#171717] mb-4 text-center">服务与定价</h1>
      <p className="text-center text-[#4d4d4d] mb-12">透明定价，按需选择</p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white border rounded-xl p-6 ${plan.recommended ? 'border-[#0070f3] ring-1 ring-[#0070f3]' : 'border-[#ebebeb]'}`}>
            {plan.recommended && (
              <span className="text-xs bg-[#0070f3] text-white px-2.5 py-1 rounded-full">推荐</span>
            )}
            <h3 className="text-xl font-semibold text-[#171717] mt-3">{plan.name}</h3>
            <div className="text-2xl font-semibold text-[#171717] mt-2">{plan.price}<span className="text-sm text-[#888888] font-normal">起</span></div>
            <p className="text-sm text-[#888888] mt-1 mb-4">{plan.desc}</p>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="text-sm text-[#4d4d4d] flex items-start gap-2">
                  <span className="text-[#0070f3]">✓</span>{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Extras */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4">附加服务</h2>
        <div className="flex flex-wrap gap-3">
          {extras.map((e) => (
            <span key={e} className="bg-[#fafafa] text-[#4d4d4d] text-sm px-4 py-2 rounded-full border border-[#ebebeb]">{e}</span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-6">常见问题</h2>
        <FaqAccordion />
      </section>
    </div>
  )
}

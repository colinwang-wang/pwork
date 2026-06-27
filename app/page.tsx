import Link from 'next/link'
import { projects } from './data/projects'

const stats = [
  { num: '32+', label: '项目' },
  { num: '8+', label: '行业' },
  { num: '15年', label: '开发经验' },
]

const capabilities = [
  { title: '经验丰富', desc: '15年开发经验，深谙各行业业务逻辑，快速理解需求并落地' },
  { title: '全栈交付', desc: '前后端+小程序+部署一人搞定，沟通零损耗，交付更高效' },
  { title: '性价比高', desc: '独立开发者模式，无团队冗余成本，同等质量价格更优' },
]

const steps = ['需求沟通', '原型确认', '开发测试', '部署上线']

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171717] leading-tight">
          15年全栈经验，7天把想法变成产品
        </h1>
        <p className="mt-4 text-[#4d4d4d] text-base md:text-lg px-4">
          专注中小企业数字化 | 微信小程序 · 管理后台 · 企业官网 · AI应用
        </p>
        <div className="flex justify-center gap-6 md:gap-10 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl md:text-2xl font-semibold text-[#171717]">{s.num}</div>
              <div className="text-xs md:text-sm text-[#888888]">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 md:gap-4 mt-8">
          <Link href="/works" className="bg-[#0070f3] text-white rounded-full px-5 md:px-6 py-2.5 text-sm font-medium">
            查看作品
          </Link>
          <Link href="/services" className="border border-[#ebebeb] rounded-full px-5 md:px-6 py-2.5 text-sm font-medium text-[#171717]">
            了解服务
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8">精选项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link key={p.slug} href={`/works/${p.slug}`} className="bg-white border border-[#ebebeb] rounded-xl p-6 hover:shadow-md transition">
              {p.images.length > 0 ? (
                <img src={p.images[0]} alt={p.title} className="h-32 w-full rounded-lg object-cover mb-4" />
              ) : (
                <div className="h-32 rounded-lg bg-gradient-to-br from-[#0070f3]/20 to-[#0070f3]/5 mb-4" />
              )}
              <h3 className="font-semibold text-[#171717] mb-1">{p.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <p className="text-sm text-[#888888] line-clamp-2">{p.subtitle}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/works" className="text-[#0070f3] text-sm font-medium">查看全部项目 →</Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8">为什么选择我</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="bg-white border border-[#ebebeb] rounded-xl p-6">
              <h3 className="font-semibold text-[#171717] mb-2">{c.title}</h3>
              <p className="text-sm text-[#4d4d4d]">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-8">开发流程</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-[#0070f3] text-white flex items-center justify-center text-sm font-medium">
                {i + 1}
              </div>
              <span className="text-[#171717] font-medium text-sm">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] mb-4">有想法？聊聊看</h2>
        <p className="text-[#4d4d4d] mb-6">无论是微信小程序、管理后台还是AI应用，都可以聊聊</p>
        <Link href="/services" className="bg-[#0070f3] text-white rounded-full px-6 py-2.5 text-sm font-medium">
          免费咨询
        </Link>
      </section>
    </div>
  )
}

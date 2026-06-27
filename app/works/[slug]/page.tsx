import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '../../data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#888888] mb-8">
        <Link href="/" className="hover:text-[#171717]">首页</Link>
        <span>/</span>
        <Link href="/works" className="hover:text-[#171717]">作品</Link>
        <span>/</span>
        <span className="text-[#171717]">{project.title}</span>
      </nav>

      {/* Header */}
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

      {/* Screenshots */}
      {project.images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} 截图 ${i + 1}`}
              className="w-full rounded-xl border border-[#ebebeb] object-cover" />
          ))}
        </div>
      ) : (
        <div className="h-64 rounded-xl bg-gradient-to-br from-[#0070f3]/20 to-[#0070f3]/5 flex items-center justify-center text-[#888888] text-sm mb-10">
          截图准备中...
        </div>
      )}

      {/* Background */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">项目背景</h2>
        <p className="text-[#4d4d4d] leading-relaxed">{project.background}</p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">核心功能</h2>
        <ul className="space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[#4d4d4d] text-sm">
              <span className="text-[#0070f3] mt-0.5">•</span>{f}
            </li>
          ))}
        </ul>
      </section>

      {/* Highlights */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-4">功能亮点</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((h) => (
            <div key={h.title} className="bg-white border border-[#ebebeb] rounded-xl p-6">
              <h3 className="font-semibold text-[#171717] mb-1">{h.title}</h3>
              <p className="text-sm text-[#4d4d4d]">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">技术栈</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </section>

      {/* Duration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-2">开发周期</h2>
        <p className="text-[#4d4d4d]">{project.duration}</p>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-[#ebebeb]">
        <h2 className="text-xl font-semibold tracking-tight text-[#171717] mb-3">想做类似项目？</h2>
        <Link href="/services" className="bg-[#0070f3] text-white rounded-full px-6 py-2.5 text-sm font-medium">
          免费咨询
        </Link>
      </section>
    </div>
  )
}

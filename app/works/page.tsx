"use client"
import Link from 'next/link'
import { useState } from 'react'
import { projects } from '../data/projects'

const categories = [
  { id: 'all', label: '全部' },
  { id: 'education', label: '教育' },
  { id: 'health', label: '医疗健康' },
  { id: 'ecommerce', label: '电商/生活' },
  { id: 'corporate', label: '企业官网' },
  { id: 'ai', label: 'AI应用' },
]

export default function WorksPage() {
  const [category, setCategory] = useState('all')
  const filtered = category === 'all' ? projects : projects.filter((p) => p.category === category)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-[#171717] mb-8">全部作品</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button key={c.id} onClick={() => setCategory(c.id)}
            className={`px-4 py-1.5 text-sm rounded-full transition ${category === c.id ? 'bg-[#171717] text-white' : 'bg-[#fafafa] text-[#4d4d4d] hover:bg-[#ebebeb]'}`}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/works/${p.slug}`} className="bg-white border border-[#ebebeb] rounded-xl p-6 hover:shadow-md transition">
            {p.images.length > 0 ? (
              <img src={p.images[0]} alt={p.title} className="h-32 w-full rounded-lg object-cover mb-4" />
            ) : (
              <div className="h-32 rounded-lg bg-gradient-to-br from-[#0070f3]/20 to-[#0070f3]/5 mb-4" />
            )}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-[#171717]">{p.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                p.status === '已上线' ? 'bg-green-50 text-green-600' :
                p.status === '开发中' ? 'bg-yellow-50 text-yellow-600' :
                'bg-blue-50 text-blue-600'
              }`}>{p.status}</span>
            </div>
            <p className="text-sm text-[#888888] mb-3 line-clamp-2">{p.subtitle}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span key={t} className="bg-[#fafafa] text-[#4d4d4d] text-xs px-2.5 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

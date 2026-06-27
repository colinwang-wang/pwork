'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { categories } from '../data/projects'

export default function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const current = searchParams.get('category') || 'all'

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => router.push(cat.id === 'all' ? '/works' : `/works?category=${cat.id}`)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            current === cat.id
              ? 'bg-[#0070f3] text-white'
              : 'bg-[#fafafa] text-[#4d4d4d] hover:bg-[#ebebeb]'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

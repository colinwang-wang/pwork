'use client'

import { useState } from 'react'

const faqs = [
  { q: '项目开发周期一般多久？', a: '根据复杂度不同，轻量项目1-2天，标准项目4-6天，定制项目8-12天。开发前会提供详细排期表。' },
  { q: '开发过程中可以修改需求吗？', a: '原型确认前可免费调整。进入开发阶段后，小幅调整免费，较大变更会评估影响并协商。' },
  { q: '项目上线后提供维护吗？', a: '所有项目含1个月免费维护期，包括Bug修复和小幅优化。之后可选择按月维护套餐。' },
  { q: '源码归属和部署方式？', a: '项目完成后源码100%交付归客户所有。支持客户自有服务器部署，也可代为托管。' },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#ebebeb] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center p-5 text-left text-[#171717] font-medium"
          >
            {faq.q}
            <span className="text-[#888888] ml-4">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-[#4d4d4d] text-sm leading-relaxed">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

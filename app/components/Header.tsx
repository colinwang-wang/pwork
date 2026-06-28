"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import basePath from "../basePath";
import type { Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/dictionaries";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: dict.nav.works, href: `/${locale}/works` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.about, href: `/${locale}/about` },
  ];

  // 切换语言：替换 pathname 中的 locale 段
  const switchedLocale = locale === 'zh' ? 'en' : 'zh';
  const switchedPath = pathname.replace(`/${locale}`, `/${switchedLocale}`) || `/${switchedLocale}`;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-[#ebebeb]">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href={`/${locale}`} className="text-lg font-bold text-[#171717]">
            {locale === 'zh' ? '老王的AI局' : 'AI Wang'}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-[#4d4d4d] hover:text-[#171717] transition-colors">{l.label}</Link>
            ))}
            <Link href={switchedPath} className="text-sm text-[#888888] hover:text-[#171717] border border-[#ebebeb] rounded-full px-3 py-1">
              {locale === 'zh' ? 'EN' : '中'}
            </Link>
            <button onClick={() => setShowContact(true)} className="rounded-full bg-[#0070f3] px-5 py-2 text-sm text-white font-medium hover:bg-[#005cc8] transition-colors">
              {dict.nav.contact}
            </button>
          </div>
          <button className="md:hidden text-[#171717]" onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-[#ebebeb] bg-white px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#4d4d4d]" onClick={() => setMenuOpen(false)}>{l.label}</Link>
            ))}
            <Link href={switchedPath} className="text-[#888888]" onClick={() => setMenuOpen(false)}>
              {locale === 'zh' ? 'Switch to English' : '切换到中文'}
            </Link>
            <button onClick={() => { setShowContact(true); setMenuOpen(false); }} className="rounded-full bg-[#0070f3] px-5 py-2 text-sm text-white font-medium text-center">
              {dict.nav.contact}
            </button>
          </div>
        )}
      </header>

      {/* 微信名片弹窗 */}
      {showContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50" onClick={() => setShowContact(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#171717]">
                {locale === 'zh' ? '添加微信咨询' : 'Contact via WeChat'}
              </h3>
              <button onClick={() => setShowContact(false)} className="text-[#888888] hover:text-[#171717]">✕</button>
            </div>
            <img src={`${basePath}/wechat/contact.png`} alt="微信名片" className="w-full rounded-lg" />
            <p className="text-sm text-[#888888] text-center mt-3">
              {locale === 'zh' ? '扫码或长按识别，免费沟通需求' : 'Scan QR code to connect'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

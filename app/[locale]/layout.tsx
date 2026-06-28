import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { locales, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'zh' ? "老王的AI局 | 全栈技术合伙人" : "AI Wang | Full-Stack Tech Partner",
    description: locale === 'zh'
      ? "用AI+全栈技术，帮中小企业和创业者把想法快速变成可运行的产品。30+商业项目交付经验。"
      : "Turning ideas into products with AI + full-stack skills. 30+ commercial projects delivered.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale === 'en' ? 'en' : 'zh') as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header locale={locale} dict={dict} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}

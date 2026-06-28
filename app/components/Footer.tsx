import type { Dictionary } from "../i18n/dictionaries";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-[#ebebeb] py-8 text-center text-sm text-[#888888]">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#171717]">抖音</a>
          <a href="#" className="hover:text-[#171717]">小红书</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#171717]">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} 老王的AI局. {dict.footer.rights}</p>
      </div>
    </footer>
  );
}

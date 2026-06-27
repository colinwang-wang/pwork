export default function Footer() {
  return (
    <footer className="border-t border-hairline py-8 text-center text-sm text-mute">
      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <a href="#" className="hover:text-ink">抖音</a>
          <a href="#" className="hover:text-ink">小红书</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} 老王的AI局. All rights reserved.</p>
      </div>
    </footer>
  );
}

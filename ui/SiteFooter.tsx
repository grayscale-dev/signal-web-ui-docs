export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <signal-layout gap="16" justify="space-between" align="center">
          <signal-text>
            © 2026 Signal Web UI. Built for teams shipping accessible interfaces.
          </signal-text>
          <signal-layout gap="12" align="center" wrap>
            <a
              href="https://github.com/signalapp"
              className="transition hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/org/signal-web-ui"
              className="transition hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>
            <a
              href="https://signal.org"
              className="transition hover:text-slate-200"
              target="_blank"
              rel="noreferrer"
            >
              Signal
            </a>
          </signal-layout>
        </signal-layout>
      </div>
    </footer>
  );
}

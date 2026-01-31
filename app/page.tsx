import Link from 'next/link';

export default function HomePage() {
  return (
    <signal-layout gap="24" direction="column">
      <signal-section heading="Signal Web UI" subtitle="Component docs">
        <signal-layout gap="16" direction="column">
          <signal-heading level={1}>
            A unified component system for Signal web experiences.
          </signal-heading>
          <signal-text>
            This site documents the core web components in{' '}
            <strong>@signal-web-ui/core</strong> and the framework wrappers for
            React, Vue, Angular, and Ember. Use it to learn installation,
            theming, CDN loading, and the recommended integration patterns for
            each framework.
          </signal-text>
          <signal-layout gap="12" wrap>
            <Link href="/getting-started">
              <signal-button variant="primary">Get started</signal-button>
            </Link>
            <Link href="/components">
              <signal-button variant="ghost">Browse components</signal-button>
            </Link>
          </signal-layout>
        </signal-layout>
      </signal-section>

      <signal-layout gap="16" columns="3" min-item-width="240">
        {[
          {
            title: 'Core + Wrappers',
            body: 'Use @signal-web-ui/core for standards-based custom elements, then opt into React/Vue/Angular/Ember wrappers as needed.'
          },
          {
            title: 'Theme-ready',
            body: 'Switch themes via data-signal-theme and tune with CSS variables like --signal-color-primary.'
          },
          {
            title: 'Static-friendly',
            body: 'Built on Next.js App Router with MDX content, so you can deploy to Vercel or any static host.'
          }
        ].map((card) => (
          <signal-card key={card.title} heading={card.title} padded>
            <signal-text>{card.body}</signal-text>
          </signal-card>
        ))}
      </signal-layout>

      <signal-card padded>
        <signal-layout gap="12" justify="space-between" align="center" wrap>
          <signal-layout gap="8" direction="column">
            <signal-text>Quick start</signal-text>
            <signal-heading level={2}>Install and ship in minutes</signal-heading>
          </signal-layout>
          <Link href="/installation">
            <signal-button variant="secondary">Installation guide</signal-button>
          </Link>
        </signal-layout>
        <pre className="mt-4 text-sm text-slate-100">
{`npm install @signal-web-ui/core
npm install @signal-web-ui/react`}
        </pre>
      </signal-card>
    </signal-layout>
  );
}

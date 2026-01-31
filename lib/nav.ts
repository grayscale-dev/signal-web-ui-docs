export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Getting Started', href: '/getting-started' },
      { title: 'Components', href: '/components' },
      { title: 'Playground', href: '/playground' }
    ]
  },
  {
    title: 'Components',
    items: [
      { title: 'signal-accessibility-helpers', href: '/components/signal-accessibility-helpers' },
      { title: 'signal-app-shell', href: '/components/signal-app-shell' },
      { title: 'signal-badge', href: '/components/signal-badge' },
      { title: 'signal-behavioral-primitives', href: '/components/signal-behavioral-primitives' },
      { title: 'signal-breadcrumbs', href: '/components/signal-breadcrumbs' },
      { title: 'signal-button', href: '/components/signal-button' },
      { title: 'signal-card', href: '/components/signal-card' },
      { title: 'signal-checkbox', href: '/components/signal-checkbox' },
      { title: 'signal-combobox', href: '/components/signal-combobox' },
      { title: 'signal-data-table', href: '/components/signal-data-table' },
      { title: 'signal-drawer', href: '/components/signal-drawer' },
      { title: 'signal-dropdown', href: '/components/signal-dropdown' },
      { title: 'signal-feature-table', href: '/components/signal-feature-table' },
      { title: 'signal-file-upload', href: '/components/signal-file-upload' },
      { title: 'signal-heading', href: '/components/signal-heading' },
      { title: 'signal-input', href: '/components/signal-input' },
      { title: 'signal-layout', href: '/components/signal-layout' },
      { title: 'signal-list-item', href: '/components/signal-list-item' },
      { title: 'signal-modal', href: '/components/signal-modal' },
      { title: 'signal-navbar', href: '/components/signal-navbar' },
      { title: 'signal-page', href: '/components/signal-page' },
      { title: 'signal-popover', href: '/components/signal-popover' },
      { title: 'signal-progress', href: '/components/signal-progress' },
      { title: 'signal-radio-group', href: '/components/signal-radio-group' },
      { title: 'signal-responsive-config', href: '/components/signal-responsive-config' },
      { title: 'signal-section', href: '/components/signal-section' },
      { title: 'signal-select', href: '/components/signal-select' },
      { title: 'signal-sidebar', href: '/components/signal-sidebar' },
      { title: 'signal-skeleton', href: '/components/signal-skeleton' },
      { title: 'signal-slider', href: '/components/signal-slider' },
      { title: 'signal-snackbar', href: '/components/signal-snackbar' },
      { title: 'signal-split-view', href: '/components/signal-split-view' },
      { title: 'signal-switch', href: '/components/signal-switch' },
      { title: 'signal-table', href: '/components/signal-table' },
      { title: 'signal-tabs', href: '/components/signal-tabs' },
      { title: 'signal-tag', href: '/components/signal-tag' },
      { title: 'signal-text', href: '/components/signal-text' },
      { title: 'signal-textarea', href: '/components/signal-textarea' },
      { title: 'signal-toast', href: '/components/signal-toast' },
      { title: 'signal-tooltip', href: '/components/signal-tooltip' }
    ]
  },
  {
    title: 'Setup',
    items: [
      { title: 'Installation', href: '/installation' },
      { title: 'CDN Usage', href: '/cdn' },
      { title: 'Loader Usage', href: '/loader' },
      { title: 'Theming', href: '/theming' }
    ]
  },
  {
    title: 'Frameworks',
    items: [
      { title: 'React', href: '/frameworks/react' },
      { title: 'Vue', href: '/frameworks/vue' },
      { title: 'Angular', href: '/frameworks/angular' },
      { title: 'Ember', href: '/frameworks/ember' }
    ]
  },
  {
    title: 'Reference',
    items: [
      { title: 'Changelog', href: '/changelog' }
    ]
  }
];

'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import MobileNav from '@/ui/MobileNav';

type NavItem = {
  id: string;
  label: string;
  href: string;
};

type NavbarElement = HTMLElement & {
  items?: NavItem[];
  activeItem?: string;
  brand?: string;
};

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<NavbarElement | null>(null);

  const items = useMemo<NavItem[]>(
    () => [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'getting-started', label: 'Getting Started', href: '/getting-started' },
      { id: 'components', label: 'Components', href: '/components' },
      { id: 'playground', label: 'Playground', href: '/playground' }
    ],
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.items = items;
    el.brand = 'Signal Web UI';

    const active = items.find((item) => item.href === pathname)?.id ?? 'home';
    el.activeItem = active;

    const handleNavigate = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      const target = items.find((item) => item.id === detail?.id);
      if (target) router.push(target.href);
    };

    el.addEventListener('navigate', handleNavigate as EventListener);
    return () => el.removeEventListener('navigate', handleNavigate as EventListener);
  }, [items, pathname, router]);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-3">
        <signal-navbar ref={ref}></signal-navbar>
        <div className="ml-auto flex items-center gap-3">
          <signal-button variant="ghost" onClick={() => router.push('/playground')}>
            Playground
          </signal-button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

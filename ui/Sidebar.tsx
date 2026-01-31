'use client';

import { useEffect, useMemo, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navSections } from '@/lib/nav';

type SidebarItem = {
  id: string;
  label: string;
  children?: SidebarItem[];
};

type SidebarElement = HTMLElement & {
  items?: SidebarItem[];
  heading?: string;
  searchable?: boolean;
  collapsible?: boolean;
  activeItem?: string;
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<SidebarElement | null>(null);

  const items = useMemo<SidebarItem[]>(() => {
    return navSections.map((section) => ({
      id: section.title.toLowerCase(),
      label: section.title,
      children: section.items.map((item) => ({
        id: item.href,
        label: item.title
      }))
    }));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.items = items;
    el.heading = 'Documentation';
    el.searchable = true;
    el.collapsible = true;
    el.activeItem = pathname;

    const handleNavigate = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (detail?.id?.startsWith('/')) {
        router.push(detail.id);
      }
    };

    el.addEventListener('navigate', handleNavigate as EventListener);
    return () => el.removeEventListener('navigate', handleNavigate as EventListener);
  }, [items, pathname, router]);

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
      <signal-sidebar ref={ref}></signal-sidebar>
    </aside>
  );
}

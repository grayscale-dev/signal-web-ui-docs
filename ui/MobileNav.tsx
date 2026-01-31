'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
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
  activeItem?: string;
};

type DrawerElement = HTMLElement & {
  open?: boolean;
};

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<DrawerElement | null>(null);
  const sidebarRef = useRef<SidebarElement | null>(null);

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
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    sidebar.items = items;
    sidebar.heading = 'Documentation';
    sidebar.searchable = true;
    sidebar.activeItem = pathname;

    const handleNavigate = (event: Event) => {
      const detail = (event as CustomEvent<{ id: string }>).detail;
      if (detail?.id?.startsWith('/')) {
        router.push(detail.id);
        setOpen(false);
      }
    };

    sidebar.addEventListener('navigate', handleNavigate as EventListener);
    return () => sidebar.removeEventListener('navigate', handleNavigate as EventListener);
  }, [items, pathname, router]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    drawer.open = open;
  }, [open]);

  return (
    <div className="lg:hidden">
      <signal-button variant="ghost" onClick={() => setOpen(true)}>
        Menu
      </signal-button>
      <signal-drawer ref={drawerRef} heading="Navigation" side="left" onClose={() => setOpen(false)}>
        <div className="px-4 py-2">
          <signal-sidebar ref={sidebarRef}></signal-sidebar>
        </div>
      </signal-drawer>
    </div>
  );
}

'use client';

import { useEffect, useMemo, useRef } from 'react';
import type { ElementType, Ref } from 'react';

type LiveExampleProps = {
  tag: string;
};

type AnyElement = HTMLElement & {
  columns?: unknown;
  rows?: unknown;
  caption?: string;
  searchable?: boolean;
  filterable?: boolean;
  filters?: unknown;
  pagination?: unknown;
  tabs?: unknown;
  value?: unknown;
  progress?: number;
};

const textContentMap: Record<string, string> = {
  'signal-button': 'Primary action',
  'signal-badge': 'New',
  'signal-tag': 'Beta',
  'signal-text': 'Signal text sample',
  'signal-heading': 'Section heading',
  'signal-toast': 'Toast notification',
  'signal-snackbar': 'Saved successfully',
  'signal-tooltip': 'Hover for details',
  'signal-card': 'Card content',
  'signal-list-item': 'List item'
};

export default function LiveExample({ tag }: LiveExampleProps) {
  const ref = useRef<AnyElement | null>(null);
  const Tag = tag as ElementType;

  const fallbackContent = useMemo(() => {
    return textContentMap[tag] ?? 'Live example';
  }, [tag]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (tag === 'signal-data-table') {
      el.columns = [
        { key: 'name', header: 'Name' },
        { key: 'role', header: 'Role' }
      ];
      el.rows = [
        { id: '1', name: 'Ada Lovelace', role: 'Engineer' },
        { id: '2', name: 'Grace Hopper', role: 'Manager' }
      ];
      el.caption = 'Team roster';
    }

    if (tag === 'signal-feature-table') {
      el.columns = [
        { key: 'project', header: 'Project', sortable: true },
        { key: 'status', header: 'Status', sortable: true }
      ];
      el.rows = [
        { id: '1', project: 'Nova', status: 'Active' },
        { id: '2', project: 'Pulse', status: 'Paused' }
      ];
      el.searchable = true;
      el.filterable = true;
      el.filters = [
        {
          key: 'status',
          label: 'Status',
          options: [
            { value: 'Active', label: 'Active' },
            { value: 'Paused', label: 'Paused' }
          ]
        }
      ];
      el.pagination = { pageIndex: 0, pageSize: 5, total: 2 };
    }

    if (tag === 'signal-tabs') {
      el.tabs = [
        { key: 'one', label: 'Overview' },
        { key: 'two', label: 'Details' }
      ];
      el.value = 'one';
    }

    if (tag === 'signal-progress') {
      el.progress = 64;
    }
  }, [tag]);

  return (
    <signal-card padded>
      <signal-text>Live example</signal-text>
      <div className="mt-4">
        <Tag ref={ref as unknown as Ref<HTMLElement>}>{fallbackContent}</Tag>
      </div>
    </signal-card>
  );
}

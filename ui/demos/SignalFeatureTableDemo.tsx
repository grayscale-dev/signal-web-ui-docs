'use client';

import { useEffect, useMemo, useRef } from 'react';

type FeatureColumn = {
  key: string;
  header: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
};

type FeatureRow = { id: string; project: string; status: string; owner: string };

type FeatureFilter = {
  key: string;
  label: string;
  options: { value: string; label: string }[];
  value?: string;
};

type Pagination = { pageIndex: number; pageSize: number; total?: number };

type FeatureTableElement = HTMLElement & {
  columns?: FeatureColumn[];
  rows?: FeatureRow[];
  searchable?: boolean;
  filterable?: boolean;
  filters?: FeatureFilter[];
  pagination?: Pagination;
  loading?: boolean;
};

export default function SignalFeatureTableDemo() {
  const columns = useMemo<FeatureColumn[]>(
    () => [
      { key: 'project', header: 'Project', sortable: true, width: '40%' },
      { key: 'status', header: 'Status', sortable: true },
      { key: 'owner', header: 'Owner' }
    ],
    []
  );

  const rows = useMemo<FeatureRow[]>(
    () => [
      { id: '1', project: 'Nova', status: 'Active', owner: 'Aisha' },
      { id: '2', project: 'Pulse', status: 'Paused', owner: 'Mina' },
      { id: '3', project: 'Orchid', status: 'Active', owner: 'Jordan' },
      { id: '4', project: 'Atlas', status: 'Planning', owner: 'Sam' }
    ],
    []
  );

  const filters = useMemo<FeatureFilter[]>(
    () => [
      {
        key: 'status',
        label: 'Status',
        options: [
          { value: 'Active', label: 'Active' },
          { value: 'Paused', label: 'Paused' },
          { value: 'Planning', label: 'Planning' }
        ]
      }
    ],
    []
  );

  const tableRef = useRef<FeatureTableElement | null>(null);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    el.columns = columns;
    el.rows = rows;
    el.searchable = true;
    el.filterable = true;
    el.filters = filters;
    el.pagination = { pageIndex: 0, pageSize: 4, total: rows.length };
  }, [columns, rows, filters]);

  return (
    <signal-card padded>
      <signal-text>Live demo</signal-text>
      <div className="mt-4">
        <signal-feature-table ref={tableRef}></signal-feature-table>
      </div>
    </signal-card>
  );
}

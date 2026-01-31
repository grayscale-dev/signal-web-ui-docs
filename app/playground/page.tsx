'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

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
};

type DataColumn = { key: string; header: string; align?: 'left' | 'center' | 'right' };

type DataRow = { id: string; name: string; role: string };

type DataTableElement = HTMLElement & {
  columns?: DataColumn[];
  rows?: DataRow[];
  caption?: string;
};

export default function PlaygroundPage() {
  const [searchable, setSearchable] = useState(true);
  const [filterable, setFilterable] = useState(true);
  const searchRef = useRef<HTMLElement | null>(null);
  const filterRef = useRef<HTMLElement | null>(null);

  const dataColumns = useMemo<DataColumn[]>(
    () => [
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' }
    ],
    []
  );

  const dataRows = useMemo<DataRow[]>(
    () => [
      { id: '1', name: 'Ada Lovelace', role: 'Engineer' },
      { id: '2', name: 'Grace Hopper', role: 'Manager' },
      { id: '3', name: 'Lin Lanying', role: 'Designer' }
    ],
    []
  );

  const featureColumns = useMemo<FeatureColumn[]>(
    () => [
      { key: 'project', header: 'Project', sortable: true, width: '40%' },
      { key: 'status', header: 'Status', sortable: true },
      { key: 'owner', header: 'Owner' }
    ],
    []
  );

  const featureRows = useMemo<FeatureRow[]>(
    () => [
      { id: '1', project: 'Nova', status: 'Active', owner: 'Aisha' },
      { id: '2', project: 'Pulse', status: 'Paused', owner: 'Mina' },
      { id: '3', project: 'Orchid', status: 'Active', owner: 'Jordan' },
      { id: '4', project: 'Atlas', status: 'Planning', owner: 'Sam' }
    ],
    []
  );

  const featureFilters = useMemo<FeatureFilter[]>(
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

  const dataRef = useRef<DataTableElement | null>(null);
  const featureRef = useRef<FeatureTableElement | null>(null);

  useEffect(() => {
    const el = dataRef.current;
    if (!el) return;

    el.columns = dataColumns;
    el.rows = dataRows;
    el.caption = 'Read-only roster';
  }, [dataColumns, dataRows]);

  useEffect(() => {
    const el = featureRef.current;
    if (!el) return;

    el.columns = featureColumns;
    el.rows = featureRows;
    el.searchable = searchable;
    el.filterable = filterable;
    el.filters = featureFilters;
    el.pagination = { pageIndex: 0, pageSize: 4, total: featureRows.length };
  }, [featureColumns, featureRows, featureFilters, searchable, filterable]);

  useEffect(() => {
    const searchEl = searchRef.current as (HTMLElement & { checked?: boolean }) | null;
    const filterEl = filterRef.current as (HTMLElement & { checked?: boolean }) | null;
    if (searchEl) searchEl.checked = searchable;
    if (filterEl) filterEl.checked = filterable;

    const onSearchChange = (event: Event) => {
      const detail = (event as CustomEvent<{ checked: boolean }>).detail;
      if (typeof detail?.checked === 'boolean') setSearchable(detail.checked);
    };
    const onFilterChange = (event: Event) => {
      const detail = (event as CustomEvent<{ checked: boolean }>).detail;
      if (typeof detail?.checked === 'boolean') setFilterable(detail.checked);
    };

    searchEl?.addEventListener('valueChange', onSearchChange as EventListener);
    filterEl?.addEventListener('valueChange', onFilterChange as EventListener);

    return () => {
      searchEl?.removeEventListener('valueChange', onSearchChange as EventListener);
      filterEl?.removeEventListener('valueChange', onFilterChange as EventListener);
    };
  }, [searchable, filterable]);

  return (
    <signal-layout gap="24" direction="column">
      <signal-section heading="Component playground">
        <signal-text>
          Live previews of Signal Data Table and Signal Feature Table. Toggle a
          few options below to see the components respond.
        </signal-text>
      </signal-section>

      <signal-card padded>
        <signal-heading level={3}>Controls</signal-heading>
        <signal-layout gap="12" align="center" wrap>
          <signal-switch ref={searchRef} label="Feature table searchable" checked></signal-switch>
          <signal-switch ref={filterRef} label="Feature table filterable" checked></signal-switch>
        </signal-layout>
      </signal-card>

      <signal-card padded>
        <signal-text>signal-data-table</signal-text>
        <div className="mt-4">
          <signal-data-table ref={dataRef}></signal-data-table>
        </div>
      </signal-card>

      <signal-card padded>
        <signal-text>signal-feature-table</signal-text>
        <div className="mt-4">
          <signal-feature-table ref={featureRef}></signal-feature-table>
        </div>
      </signal-card>
    </signal-layout>
  );
}

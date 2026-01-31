'use client';

import { useEffect, useMemo, useRef } from 'react';

type DataColumn = { key: string; header: string; align?: 'left' | 'center' | 'right' };

type DataRow = { id: string; name: string; role: string; location: string };

type DataTableElement = HTMLElement & {
  columns?: DataColumn[];
  rows?: DataRow[];
  caption?: string;
  emptyText?: string;
};

export default function SignalDataTableDemo() {
  const columns = useMemo<DataColumn[]>(
    () => [
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' },
      { key: 'location', header: 'Location' }
    ],
    []
  );

  const rows = useMemo<DataRow[]>(
    () => [
      { id: '1', name: 'Ada Lovelace', role: 'Engineer', location: 'London' },
      { id: '2', name: 'Grace Hopper', role: 'Captain', location: 'Arlington' },
      { id: '3', name: 'Lin Lanying', role: 'Physicist', location: 'Beijing' }
    ],
    []
  );

  const tableRef = useRef<DataTableElement | null>(null);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;

    el.columns = columns;
    el.rows = rows;
    el.caption = 'Team roster';
  }, [columns, rows]);

  return (
    <signal-card padded>
      <signal-text>Live demo</signal-text>
      <div className="mt-4">
        <signal-data-table ref={tableRef}></signal-data-table>
      </div>
    </signal-card>
  );
}

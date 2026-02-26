'use client';

import Link from 'next/link';
import Toolbar from '@/components/Toolbar';

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-surface-secondary">
      <Toolbar />

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-4">
        <section className="bg-surface-elevated border border-border rounded-lg p-5">
          <h1 className="text-lg font-semibold text-content-primary">Documentation</h1>
          <p className="text-sm text-content-secondary mt-1">Architecture, governance, and reporting references.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/docs/warehouse-build" className="rounded-lg border border-border bg-surface-elevated p-5 hover:border-accent transition-colors">
          <h2 className="text-base font-semibold text-content-primary">Warehouse Build Playbook</h2>
          <p className="text-sm text-content-secondary mt-1">End-to-end design narrative from source systems to self-serve analytics.</p>
        </Link>

        <Link href="/docs/data-governance" className="rounded-lg border border-border bg-surface-elevated p-5 hover:border-accent transition-colors">
          <h2 className="text-base font-semibold text-content-primary">Data Governance Glossary</h2>
          <p className="text-sm text-content-secondary mt-1">Source and warehouse dictionaries, plus KPI logic and governance notes.</p>
        </Link>
        </div>
      </main>
    </div>
  );
}

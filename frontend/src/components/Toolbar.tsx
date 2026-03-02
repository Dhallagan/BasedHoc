'use client';

import Link from 'next/link';

export default function Toolbar() {
  return (
    <header className="bg-surface-elevated border-b border-border px-4 py-2.5 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-accent rounded-none flex items-center justify-center">
              <span className="text-white font-semibold text-xs">B</span>
            </div>
            <span className="text-[15px] font-semibold text-content-primary">BasedHoc</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <Link
              href="/docs"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5a.75.75 0 01.75.75v15a.75.75 0 01-.75.75H6.75A.75.75 0 016 19.5v-15a.75.75 0 01.75-.75z" />
              </svg>
              Docs
            </Link>
            <Link
              href="/docs/warehouse-build"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h7.5L18.75 8.25v12a.75.75 0 01-.75.75h-11.25A.75.75 0 016 20.25V4.5a.75.75 0 01.75-.75zM14.25 3.75v4.5h4.5" />
              </svg>
              About
            </Link>
            <Link
              href="/docs/data-governance"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5h15v15h-15v-15zm3 4.5h9m-9 3h9m-9 3h6" />
              </svg>
              Glossary
            </Link>
            <Link
              href="/docs/metrics-layer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h9" />
              </svg>
              Metrics
            </Link>
            <Link
              href="/dashboards"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h7.5v7.5h-7.5v-7.5zm9 0h7.5v12h-7.5v-12zm-9 9h7.5v7.5h-7.5v-7.5zm9 4.5h7.5v3h-7.5v-3z" />
              </svg>
              Dashboards
            </Link>
            <Link
              href="/monitoring"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h4.5l1.5-4.5 3 9 1.5-4.5h6.75" />
              </svg>
              Monitoring
            </Link>
            <Link
              href="/ontology"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5m-7.5 5.25h7.5m-7.5 5.25h7.5M3.75 4.5h16.5v15h-16.5v-15z" />
              </svg>
              Ontology
            </Link>
            <Link
              href="/growth-actions"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 19.5h16.5M6 15l3-3 3 3 6-6" />
              </svg>
              Growth Actions
            </Link>
            <Link
              href="/finance-actions"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 6h16.5m-16.5-12h16.5" />
              </svg>
              Finance Actions
            </Link>
            <Link
              href="/product-actions"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15v10.5h-15V6.75zM9 17.25v2.25h6v-2.25" />
              </svg>
              Product Actions
            </Link>
            <Link
              href="/cycles"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v3m0 10.5v3m8.25-8.25h-3m-10.5 0h-3m11.47 5.22l-2.12-2.12m-6.7-6.7L3.53 6.53m12.72 0l-2.12 2.12m-6.7 6.7l-2.12 2.12" />
              </svg>
              Cycles
            </Link>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-xs text-content-tertiary">Connected</span>
          </div>
        </div>
      </div>
    </header>
  );
}

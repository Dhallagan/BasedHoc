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
              href="/docs/warehouse-build"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h7.5L18.75 8.25v12a.75.75 0 01-.75.75h-11.25A.75.75 0 016 20.25V4.5a.75.75 0 01.75-.75zM14.25 3.75v4.5h4.5" />
              </svg>
              Docs
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
              href="/reports"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-surface-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              Reports
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

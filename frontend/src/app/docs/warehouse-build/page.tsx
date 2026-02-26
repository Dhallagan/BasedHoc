'use client';

import Link from 'next/link';

export default function WarehouseBuildDocPage() {
  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-surface-elevated border-b border-border px-6 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 -ml-2 rounded-lg hover:bg-surface-tertiary transition-colors">
              <svg className="w-5 h-5 text-content-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-content-primary">Warehouse Build Playbook</h1>
              <p className="text-sm text-content-tertiary">
                Browserbase-style source system to MotherDuck warehouse and self-serve reporting app.
              </p>
            </div>
          </div>
          <Link
            href="/dashboards"
            className="px-3 py-1.5 rounded-lg text-sm bg-surface-tertiary hover:bg-surface-primary text-content-primary"
          >
            Open Dashboards
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 text-sm text-content-primary leading-6">
        <section className="bg-surface-elevated border border-border rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">System Overview</h2>
            <p className="mt-2 text-content-secondary">
              I built this to solve a simple problem: teams move fast, but data trust usually lags behind. The point of this system
              is to turn messy operational activity into metrics people can actually rely on, without creating a reporting bottleneck.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">1) Problem Framing</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li>Raw product data is useful, but not decision-ready.</li>
              <li>Metrics drift when every dashboard defines business logic differently.</li>
              <li>Teams need answers quickly without turning data into a ticket queue.</li>
              <li>The design has to work now and still hold up as the company scales.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">2) Source Domain Design</h3>
            <p className="mt-2 text-content-secondary">
              I modeled the source around how the business actually operates, not around isolated tables:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li><span className="font-medium text-content-primary">Identity and accounts:</span> who the customers are and how users map to orgs.</li>
              <li><span className="font-medium text-content-primary">Product usage:</span> what they run, how sessions behave, and where friction shows up.</li>
              <li><span className="font-medium text-content-primary">Commercial activity:</span> how plans, usage, and invoices connect to revenue.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">3) Warehouse Architecture</h3>
            <p className="mt-2 text-content-secondary">
              I used MotherDuck as the warehouse layer to simulate a Snowflake-style analytics setup, and organized modeling with dbt
              in a medallion flow:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li><span className="font-medium text-content-primary">Bronze:</span> raw source-aligned data.</li>
              <li><span className="font-medium text-content-primary">Silver:</span> cleaned and consistent entities/facts.</li>
              <li><span className="font-medium text-content-primary">Gold:</span> business-ready marts and KPI views.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">4) Modeling Strategy</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li>Keep ingestion logic separate from business logic.</li>
              <li>Centralize metric definitions so every team reads the same numbers.</li>
              <li>Make models reusable so new reports do not require reinventing joins.</li>
              <li>Design grains and entities to answer product, growth, finance, and ops questions from one foundation.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">5) Consumption Layer (Self-Serve Portal)</h3>
            <p className="mt-2 text-content-secondary">
              I wanted the output to be usable immediately, so I built a self-serve portal on top of the metric layer.
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li><span className="font-medium text-content-primary">Dashboards:</span> department-level KPI widgets and trend views.</li>
              <li><span className="font-medium text-content-primary">Reports:</span> curated SQL cards teams can run, edit, and export.</li>
              <li><span className="font-medium text-content-primary">Consistency:</span> dashboards and reports read from the same governed layer.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">6) Outcomes</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-content-secondary">
              <li>Faster time from question to answer.</li>
              <li>Less KPI ambiguity across teams.</li>
              <li>Higher trust because logic is repeatable and centralized.</li>
              <li>A clean path to production controls (freshness, governance, and access policies).</li>
            </ul>
          </div>

          <div className="pt-1 flex flex-wrap gap-2">
            <Link href="/dashboards" className="px-3 py-1.5 rounded bg-accent text-white text-xs hover:bg-accent-hover">
              View Dashboards
            </Link>
            <Link href="/reports" className="px-3 py-1.5 rounded bg-surface-tertiary text-content-primary text-xs hover:bg-surface-primary">
              View Reports
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

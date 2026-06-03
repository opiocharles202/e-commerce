import type { ReactNode } from "react";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccountNavClient } from "@/components/shared/AccountNavClient";
import { AccountSignOut } from "@/components/shared/AccountSignOut";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

          {/* ── Mobile tab bar (hidden on lg+) ───────────────────────────── */}
          <div className="lg:hidden border-b bg-background">
            <Suspense fallback={<div className="h-12" />}>
              <AccountNavClient variant="tabs" />
            </Suspense>
          </div>

          {/* ── Content area ─────────────────────────────────────────────── */}
          <div className="flex gap-8 py-8">

            {/* Sidebar (desktop only) */}
            <aside className="hidden w-52 shrink-0 lg:block">
              <div className="rounded-xl border bg-card p-4 sticky top-24">
                <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  My Account
                </p>
                <Suspense fallback={<div className="h-24" />}>
                  <AccountNavClient variant="sidebar" />
                </Suspense>
                <div className="my-3 border-t" />
                <AccountSignOut />
              </div>
            </aside>

            {/* Page content */}
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

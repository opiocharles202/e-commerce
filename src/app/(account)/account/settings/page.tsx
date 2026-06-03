import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Settings | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your notification preferences and account settings.
      </p>
      <div className="mt-8 rounded-xl border bg-card p-6 text-center text-muted-foreground">
        <p className="text-sm">Settings will be available in the next phase.</p>
      </div>
    </div>
  );
}



import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Profile | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight">My Profile</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your account details and password.
      </p>

      <div className="mt-6 flex flex-col gap-6">
        {/* Personal info */}
        <section className="rounded-xl border bg-card p-6">
          <h2 className="font-semibold mb-4">Personal Information</h2>
          <form className="grid gap-4 sm:grid-cols-2">
            {[
              { id: "firstName", label: "First name", value: "Jane", autoComplete: "given-name" },
              { id: "lastName", label: "Last name", value: "Doe", autoComplete: "family-name" },
              { id: "email", label: "Email address", value: "jane@example.com", autoComplete: "email", type: "email" },
              { id: "phone", label: "Phone number", value: "+1 555 000 1234", autoComplete: "tel", type: "tel" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-sm font-medium">{f.label}</label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type ?? "text"}
                  defaultValue={f.value}
                  autoComplete={f.autoComplete}
                  className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div className="sm:col-span-2 flex justify-end">
              <Button type="submit" size="sm">Save Changes</Button>
            </div>
          </form>
        </section>

        <Separator />

        {/* Change password */}
        <section className="rounded-xl border bg-card p-6">
          <h2 className="font-semibold mb-4">Change Password</h2>
          <form className="flex flex-col gap-4 max-w-sm">
            {[
              { id: "currentPwd", label: "Current password", autoComplete: "current-password" },
              { id: "newPwd", label: "New password", autoComplete: "new-password" },
              { id: "confirmPwd", label: "Confirm new password", autoComplete: "new-password" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-sm font-medium">{f.label}</label>
                <input
                  id={f.id}
                  name={f.id}
                  type="password"
                  autoComplete={f.autoComplete}
                  placeholder="••••••••"
                  className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            ))}
            <div className="flex justify-end">
              <Button type="submit" size="sm" variant="outline">Update Password</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}



import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Checkout | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

// Step indicator component
function StepIndicator({ step }: { step: number }) {
  const steps = ["Contact & Shipping", "Payment", "Review"];
  return (
    <ol className="flex items-center gap-0" aria-label="Checkout steps">
      {steps.map((label, i) => {
        const num = i + 1;
        const isActive = num === step;
        const isDone = num < step;
        return (
          <li key={label} className="flex items-center">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isDone
                    ? "bg-primary text-primary-foreground"
                    : isActive
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-muted text-muted-foreground"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {isDone ? "✓" : num}
              </span>
              <span
                className={`mt-1 text-xs font-medium ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 h-px w-4 bg-border sm:w-10" />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout" },
        ]}
      />

      {/* Header */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            Secure, encrypted checkout
          </div>
        </div>
        <StepIndicator step={1} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Left — form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact */}
          <section className="rounded-xl border bg-card p-6">
            <h2 className="font-semibold text-base mb-4">Contact Information</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                <input
                  id="email" type="email" name="email" autoComplete="email"
                  placeholder="you@example.com"
                  className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">Phone number</label>
                <input
                  id="phone" type="tel" name="phone" autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          </section>

          {/* Shipping address */}
          <section className="rounded-xl border bg-card p-6">
            <h2 className="font-semibold text-base mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "firstName", label: "First name", autoComplete: "given-name", placeholder: "Jane" },
                  { id: "lastName", label: "Last name", autoComplete: "family-name", placeholder: "Doe" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="text-sm font-medium">{f.label}</label>
                    <input
                      id={f.id} name={f.id} type="text" autoComplete={f.autoComplete}
                      placeholder={f.placeholder}
                      className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="street" className="text-sm font-medium">Street address</label>
                <input
                  id="street" name="street" type="text" autoComplete="street-address"
                  placeholder="123 Main Street"
                  className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { id: "city", label: "City", autoComplete: "address-level2", placeholder: "New York", cols: 1 },
                  { id: "postalCode", label: "Postal code", autoComplete: "postal-code", placeholder: "10001", cols: 1 },
                  { id: "country", label: "Country", autoComplete: "country-name", placeholder: "United States", cols: 1 },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="text-sm font-medium">{f.label}</label>
                    <input
                      id={f.id} name={f.id} type="text" autoComplete={f.autoComplete}
                      placeholder={f.placeholder}
                      className="h-9 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="flex justify-between">
            <Link href="/cart" className={buttonVariants({ variant: "outline" }) + " gap-2"}>
              <ArrowLeft className="h-4 w-4" /> Back to Cart
            </Link>
            <Link href="/checkout/payment" className={buttonVariants({ size: "lg" }) + " font-semibold"}>
              Continue to Payment
            </Link>
          </div>
        </div>

        {/* Right — order summary */}
        <aside className="rounded-xl border bg-card p-6 h-fit">
          <h2 className="font-semibold text-base mb-4">Order Summary</h2>
          <div className="flex flex-col gap-3 text-sm">
            {/* Dummy items — will be from cart state in backend phase */}
            <div className="flex justify-between text-muted-foreground">
              <span>iPhone 16 Pro Max × 1</span>
              <span>$1,199.00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>AirPods Pro 2nd Gen × 1</span>
              <span>$249.00</span>
            </div>
            <Separator />
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>$1,448.00</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-emerald-600">Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>$1,448.00</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}



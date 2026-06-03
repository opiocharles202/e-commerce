import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lock, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PaymentForm } from "@/components/shared/PaymentForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Payment | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

// Dummy cart summary (matches cart page dummy data)
const orderSummary = {
  items: [
    { name: "iPhone 16 Pro Max", quantity: 1, price: 1199.00 },
    { name: "AirPods Pro 2nd Gen", quantity: 2, price: 498.00 },
    { name: "Anker 65W GaN Charger", quantity: 1, price: 45.99 },
  ],
  subtotal: 1742.99,
  shipping: 0,
  total: 1742.99,
};

function StepIndicator({ step }: { step: number }) {
  const steps = ["Shipping", "Payment", "Review"];
  return (
    <ol className="flex items-center" aria-label="Checkout steps">
      {steps.map((label, i) => {
        const num = i + 1;
        const isActive = num === step;
        const isDone = num < step;
        return (
          <li key={label} className="flex items-center">
            <div className="flex items-center gap-1.5">
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
                className={`hidden text-xs font-medium sm:block ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-3 h-px w-8 sm:w-12 ${isDone ? "bg-primary" : "bg-border"}`} />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function PaymentPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cart", href: "/cart" },
          { label: "Shipping", href: "/checkout" },
          { label: "Payment" },
        ]}
      />

      {/* Header */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payment</h1>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            Secure, encrypted payment
          </div>
        </div>
        <StepIndicator step={2} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">

        {/* Left — payment form */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Shipping summary (read-only) */}
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Shipping to</h2>
              <Link
                href="/checkout"
                className="text-xs text-primary hover:underline font-medium"
              >
                Edit
              </Link>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Jane Doe &mdash; 123 Main Street, New York, 10001, United States
            </p>
            <p className="text-sm text-muted-foreground">+1 (555) 000-0000</p>
          </div>

          {/* Payment method selector + form */}
          <PaymentForm />

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/checkout"
              className={buttonVariants({ variant: "outline" }) + " gap-2"}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Shipping
            </Link>
            <Link
              href="/checkout/review"
              className={buttonVariants({ size: "lg" }) + " gap-2 font-semibold"}
            >
              Review Order
            </Link>
          </div>
        </div>

        {/* Right — order summary */}
        <aside className="h-fit rounded-xl border bg-card p-6 lg:sticky lg:top-24">
          <h2 className="font-semibold text-base mb-4">Order Summary</h2>

          <div className="flex flex-col gap-3 text-sm">
            {orderSummary.items.map((item) => (
              <div key={item.name} className="flex justify-between text-muted-foreground">
                <span className="line-clamp-1 flex-1 pr-2">
                  {item.name} × {item.quantity}
                </span>
                <span className="shrink-0 font-medium">${item.price.toFixed(2)}</span>
              </div>
            ))}

            <Separator />

            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${orderSummary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>

            <Separator />

            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>${orderSummary.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Security note */}
          <div className="mt-5 flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary mt-0.5" />
            <span>
              Your payment info is encrypted and never stored on our servers.
              Powered by Stripe & PayPal.
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}



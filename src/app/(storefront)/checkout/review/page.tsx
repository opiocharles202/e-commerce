import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock, CreditCard, MapPin, Package, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Review Order | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

const dummyOrder = {
  items: [
    {
      id: "ci-1", name: "iPhone 16 Pro Max", brand: "Apple",
      image: "/iphone-16.png",
      price: 1199.00, quantity: 1,
    },
    {
      id: "ci-2", name: "AirPods Pro 2nd Gen", brand: "Apple",
      image: "/airpods-pro.png",
      price: 249.00, quantity: 2,
    },
    {
      id: "ci-3", name: "Anker 65W GaN Charger", brand: "Anker",
      image: "/anker-charger.png",
      price: 45.99, quantity: 1,
    },
  ],
  shipping: { name: "Jane Doe", street: "123 Main Street", city: "New York", postalCode: "10001", country: "United States", phone: "+1 (555) 000-0000" },
  payment: { method: "Visa ending in 4242", type: "card" },
  subtotal: 1742.99,
  shippingCost: 0,
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
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${isDone || isActive ? "bg-primary text-primary-foreground" : "border-2 border-muted text-muted-foreground"}`}>
                {isDone ? "✓" : num}
              </span>
              <span className={`hidden text-xs font-medium sm:block ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
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

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Cart", href: "/cart" },
        { label: "Shipping", href: "/checkout" },
        { label: "Payment", href: "/checkout/payment" },
        { label: "Review" },
      ]} />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Review Your Order</h1>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" /> Secure checkout
          </div>
        </div>
        <StepIndicator step={3} />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Items */}
          <section className="rounded-xl border bg-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" /> Items ({dummyOrder.items.length})
              </h2>
              <Link href="/cart" className="text-xs text-primary hover:underline font-medium">Edit</Link>
            </div>
            <div className="flex flex-col gap-4">
              {dummyOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
                    <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{item.brand}</p>
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-sm shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shipping + Payment side by side */}
          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" /> Shipping Address
                </h2>
                <Link href="/checkout" className="text-xs text-primary hover:underline font-medium">Edit</Link>
              </div>
              <address className="not-italic text-sm text-muted-foreground space-y-0.5">
                <p className="font-medium text-foreground">{dummyOrder.shipping.name}</p>
                <p>{dummyOrder.shipping.street}</p>
                <p>{dummyOrder.shipping.city}, {dummyOrder.shipping.postalCode}</p>
                <p>{dummyOrder.shipping.country}</p>
                <p className="pt-1">{dummyOrder.shipping.phone}</p>
              </address>
            </section>

            <section className="rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-primary" /> Payment
                </h2>
                <Link href="/checkout/payment" className="text-xs text-primary hover:underline font-medium">Edit</Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex h-6 w-10 items-center justify-center rounded bg-blue-600 text-white text-xs font-bold italic tracking-widest">VISA</span>
                <span className="text-sm text-muted-foreground">{dummyOrder.payment.method}</span>
              </div>
            </section>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2">
            <Link href="/checkout/payment" className={buttonVariants({ variant: "outline" }) + " gap-2"}>
              <ArrowLeft className="h-4 w-4" /> Back to Payment
            </Link>
            <Link href="/checkout/confirmation" className={buttonVariants({ size: "lg" }) + " gap-2 font-semibold bg-emerald-600 hover:bg-emerald-700"}>
              <CheckCircle2 className="h-4 w-4" /> Place Order
            </Link>
          </div>
        </div>

        {/* Order total */}
        <aside className="h-fit rounded-xl border bg-card p-6 lg:sticky lg:top-24">
          <h2 className="font-semibold text-base mb-4">Order Total</h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span><span>${dummyOrder.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span className="text-emerald-600 font-medium">Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span><span>${dummyOrder.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-700 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
            <span>By placing your order you agree to our Terms of Service and Privacy Policy.</span>
          </div>
        </aside>
      </div>
    </div>
  );
}



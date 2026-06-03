import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Package, Mail, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Order Confirmed | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

export default function OrderConfirmationPage() {
  // In backend phase this will read the real order from DB via searchParams/orderId
  const orderRef = "GD-demo1234";

  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
      {/* Success icon */}
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-5 text-2xl font-bold">Order Confirmed!</h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm">
          Thank you for your purchase. We&apos;ve received your order and will send
          you a confirmation email shortly.
        </p>
      </div>

      {/* Order reference */}
      <div className="mt-8 rounded-xl border bg-card p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Order Reference</span>
          <span className="font-mono font-bold text-primary">{orderRef}</span>
        </div>

        <Separator className="my-4" />

        {/* Dummy order items */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">iPhone 16 Pro Max × 1</span>
            <span className="font-medium">$1,199.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">AirPods Pro 2nd Gen × 1</span>
            <span className="font-medium">$249.00</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$1,448.00</span>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Shipping address */}
        <div className="text-sm">
          <p className="font-medium mb-1">Shipping to</p>
          <p className="text-muted-foreground">Jane Doe</p>
          <p className="text-muted-foreground">123 Main Street, New York, 10001</p>
        </div>
      </div>

      {/* What happens next */}
      <div className="mt-6 rounded-xl border bg-muted/30 p-5">
        <h2 className="text-sm font-semibold mb-3">What happens next?</h2>
        <ul className="flex flex-col gap-3">
          {[
            { icon: Mail, text: "Confirmation email sent to your inbox" },
            { icon: Package, text: "Your order will be packed and dispatched within 24 hours" },
            { icon: ArrowRight, text: "Track your delivery status in My Orders" },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Icon className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Guest account offer */}
      <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
        <p className="text-sm font-medium">Save your details for next time</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Create a free account to track orders and get faster checkout.
        </p>
        <Link
          href="/register"
          className={buttonVariants({ size: "sm" }) + " mt-3 gap-2"}
        >
          Create Account
        </Link>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/products"
          className={buttonVariants({ variant: "outline", size: "lg" }) + " flex-1 justify-center"}
        >
          Continue Shopping
        </Link>
        <Link
          href="/account/orders"
          className={buttonVariants({ size: "lg" }) + " flex-1 justify-center gap-2"}
        >
          <Package className="h-4 w-4" /> View Orders
        </Link>
      </div>
    </div>
  );
}



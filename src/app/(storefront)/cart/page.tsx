import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Trash2, Tag, ShieldCheck, RotateCcw, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { CartQuantityStepper } from "@/components/shared/CartQuantityStepper";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cart | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

// Dummy cart items — will be driven by Zustand + Server Actions in backend phase
const dummyCartItems = [
  {
    id: "ci-1",
    productId: "p-1",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    slug: "iphone-16-pro-max",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80",
    priceSnapshot: 1199.00,
    quantity: 1,
    inventory: 12,
  },
  {
    id: "ci-2",
    productId: "p-4",
    name: "AirPods Pro 2nd Gen",
    brand: "Apple",
    slug: "airpods-pro-2nd-gen",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
    priceSnapshot: 249.00,
    quantity: 2,
    inventory: 35,
  },
  {
    id: "ci-3",
    productId: "p-5",
    name: "Anker 65W GaN Charger",
    brand: "Anker",
    slug: "anker-65w-gan-charger",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    priceSnapshot: 45.99,
    quantity: 1,
    inventory: 3,
  },
];

const subtotal = dummyCartItems.reduce(
  (sum, item) => sum + item.priceSnapshot * item.quantity,
  0
);
const shipping = subtotal >= 50 ? 0 : 9.99;
const total = subtotal + shipping;

export default function CartPage() {
  const hasItems = dummyCartItems.length > 0;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />

      <div className="mt-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">
          Your Cart
          {hasItems && (
            <span className="ml-2 text-base font-normal text-muted-foreground">
              ({dummyCartItems.length} item{dummyCartItems.length !== 1 ? "s" : ""})
            </span>
          )}
        </h1>
        <Link
          href="/products"
          className={buttonVariants({ variant: "ghost", size: "sm" }) + " gap-1.5"}
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>

      {!hasItems ? (
        /* ── Empty state ──────────────────────────────────────────────── */
        <div className="mt-20 flex flex-col items-center gap-5 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Looks like you haven&apos;t added anything yet.
            </p>
          </div>
          <Link href="/products" className={buttonVariants({ size: "lg" }) + " gap-2 font-semibold"}>
            Browse Products
          </Link>
        </div>
      ) : (
        /* ── Cart with items ──────────────────────────────────────────── */
        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Left — item list */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {dummyCartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-xl border bg-card p-4"
              >
                {/* Product image */}
                <Link href={`/products/${item.slug}`} className="shrink-0">
                  <div className="relative h-20 w-20 overflow-hidden rounded-lg border bg-muted sm:h-24 sm:w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.brand}
                  </p>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-sm font-semibold leading-snug hover:text-primary line-clamp-2"
                  >
                    {item.name}
                  </Link>

                  {/* Low stock warning */}
                  {item.inventory <= 3 && (
                    <p className="text-[11px] font-medium text-orange-500">
                      Only {item.inventory} left in stock
                    </p>
                  )}

                  {/* Price + controls row */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                    <CartQuantityStepper
                      itemId={item.id}
                      quantity={item.quantity}
                      maxQty={item.inventory}
                    />

                    <div className="flex items-center gap-3">
                      <span className="font-bold">
                        ${(item.priceSnapshot * item.quantity).toFixed(2)}
                      </span>
                      <button
                        aria-label={`Remove ${item.name} from cart`}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo code */}
            <div className="rounded-xl border bg-card p-4">
              <p className="text-sm font-medium mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" /> Promo Code
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="h-9 flex-1 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button size="sm" variant="outline">Apply</Button>
              </div>
            </div>
          </div>

          {/* Right — order summary */}
          <aside className="h-fit rounded-xl border bg-card p-6 lg:sticky lg:top-24">
            <h2 className="font-semibold text-base mb-4">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
              {dummyCartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-muted-foreground">
                  <span className="line-clamp-1 flex-1 pr-2">
                    {item.name} <span className="font-medium">× {item.quantity}</span>
                  </span>
                  <span className="shrink-0">${(item.priceSnapshot * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <Separator />

              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="font-medium text-emerald-600">Free</span>
                ) : (
                  <span>${shipping.toFixed(2)}</span>
                )}
              </div>

              {shipping > 0 && (
                <p className="text-[11px] text-muted-foreground rounded-lg bg-muted px-3 py-2">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}

              <Separator />

              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className={buttonVariants({ size: "lg" }) + " mt-5 w-full justify-center font-semibold"}
            >
              Proceed to Checkout
            </Link>

            {/* Trust badges */}
            <div className="mt-4 flex flex-col gap-2">
              {[
                { icon: ShieldCheck, text: "Secure, encrypted checkout" },
                { icon: RotateCcw, text: "30-day hassle-free returns" },
                { icon: Truck, text: "Free shipping on orders over $50" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}



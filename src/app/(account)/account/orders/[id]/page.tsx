import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/lib/format";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Order ${id} | ${SITE_NAME}`,
    robots: { index: false, follow: false },
  };
}

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-700",
};

const statusSteps = ["Pending", "Processing", "Shipped", "Delivered"];

// Separate async component so params access happens inside <Suspense>
async function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const order = {
    id,
    reference: "GD-abc123",
    date: "2025-01-15",
    status: "Delivered",
    total: 1448.00,
    subtotal: 1448.00,
    shipping: 0,
    address: {
      name: "Jane Doe",
      street: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "United States",
    },
    items: [
      { id: "oi-1", name: "iPhone 16 Pro Max", quantity: 1, unitPrice: 1199.00 },
      { id: "oi-2", name: "AirPods Pro 2nd Gen", quantity: 1, unitPrice: 249.00 },
    ],
  };

  const currentStep = statusSteps.indexOf(order.status);

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold">Order {order.reference}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Placed on {formatDate(order.date)}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[order.status] ?? ""}`}>
          {order.status}
        </span>
      </div>

      {/* Status timeline */}
      <div className="mt-6 rounded-xl border bg-card p-5">
        <h2 className="text-sm font-semibold mb-4">Order Status</h2>
        <div className="flex items-start">
          {statusSteps.map((step, i) => {
            const done = i <= currentStep;
            const isCurrent = i === currentStep;
            const isLast = i === statusSteps.length - 1;
            return (
              <div key={step} className="flex flex-1 flex-col items-center">
                <div className="flex w-full items-center">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    done ? "bg-primary text-primary-foreground" : "border-2 border-muted text-muted-foreground"
                  }`}>
                    {done ? "✓" : i + 1}
                  </div>
                  {!isLast && (
                    <div className={`flex-1 h-0.5 ${done && i < currentStep ? "bg-primary" : "bg-muted"}`} />
                  )}
                </div>
                <span className={`mt-2 text-xs font-medium text-center ${
                  isCurrent ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border bg-card p-5">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Package className="h-4 w-4 text-primary" /> Items Ordered
          </h2>
          <div className="flex flex-col gap-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.name}{" "}
                  <span className="font-medium text-foreground">× {item.quantity}</span>
                </span>
                <span className="font-medium">${(item.unitPrice * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <Separator />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span><span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span className="text-emerald-600">
                {order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span><span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <h2 className="text-sm font-semibold mb-3">Shipping Address</h2>
          <address className="not-italic text-sm text-muted-foreground space-y-0.5">
            <p className="font-medium text-foreground">{order.address.name}</p>
            <p>{order.address.street}</p>
            <p>{order.address.city}, {order.address.postalCode}</p>
            <p>{order.address.country}</p>
          </address>
        </div>
      </div>
    </>
  );
}

function OrderDetailSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    </div>
  );
}

export default function OrderDetailPage({ params }: Props) {
  return (
    <div>
      <Link
        href="/account/orders"
        className={buttonVariants({ variant: "ghost", size: "sm" }) + " mb-4 gap-2 -ml-2"}
      >
        <ArrowLeft className="h-4 w-4" /> Back to Orders
      </Link>
      {/* Suspense wraps params access — required for Next.js 16 Cache Components */}
      <Suspense fallback={<OrderDetailSkeleton />}>
        <OrderDetail params={params} />
      </Suspense>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Package, ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/format";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `My Orders | ${SITE_NAME}`,
  robots: { index: false, follow: false },
};

// Dummy orders — replaced with DB queries in backend phase
const dummyOrders = [
  {
    id: "ord-1",
    reference: "GD-abc123",
    date: "2025-01-15",
    status: "Delivered",
    total: 1448.00,
    itemCount: 2,
    items: ["iPhone 16 Pro Max", "AirPods Pro 2nd Gen"],
  },
  {
    id: "ord-2",
    reference: "GD-def456",
    date: "2024-12-20",
    status: "Shipped",
    total: 45.99,
    itemCount: 1,
    items: ["Anker 65W GaN Charger"],
  },
  {
    id: "ord-3",
    reference: "GD-ghi789",
    date: "2024-11-05",
    status: "Processing",
    total: 249.00,
    itemCount: 1,
    items: ["Sony WH-1000XM5"],
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-indigo-100 text-indigo-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-tight">My Orders</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {dummyOrders.length} order{dummyOrders.length !== 1 ? "s" : ""} placed
      </p>

      {dummyOrders.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <Package className="h-12 w-12 text-muted-foreground" />
          <div>
            <p className="font-semibold">No orders yet</p>
            <p className="text-sm text-muted-foreground">
              When you place an order, it will appear here.
            </p>
          </div>
          <Link href="/products" className="text-sm text-primary hover:underline">
            Start shopping →
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {dummyOrders.map((order) => (
            <Link
              key={order.id}
              href={`/account/orders/${order.id}`}
              className="block rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-primary">
                      {order.reference}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        statusColors[order.status] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(order.date)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                    {order.items.join(", ")}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <div className="text-right">
                    <p className="font-bold">${order.total.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      {order.itemCount} item{order.itemCount !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}



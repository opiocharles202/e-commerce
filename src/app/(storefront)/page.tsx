import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headset,
  Zap,
  Star,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { HeroBanner } from "@/components/shared/HeroBanner";
import { CategoryStrip } from "@/components/shared/CategoryStrip";
import { ProductCard } from "@/components/shared/ProductCard";
import { Testimonials } from "@/components/shared/Testimonials";
import {
  dummyBanners,
  dummyCategories,
  featuredProducts,
  allProducts,
} from "@/lib/dummy-data";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Premium Mobile Phones & Accessories`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — Premium Mobile Phones & Accessories`,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

const trustBadges = [
  { icon: Truck, title: "Free Shipping", body: "On orders over $50", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { icon: RotateCcw, title: "Easy Returns", body: "30-day hassle-free", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
  { icon: ShieldCheck, title: "Secure Payments", body: "256-bit SSL encrypted", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/20" },
  { icon: Headset, title: "24/7 Support", body: "Always here to help", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" },
];

// Get specific product sets for the page
const bestSellers = allProducts.filter((p) => p.isBestSeller && p.isActive).slice(0, 4);
const newArrivals = allProducts.filter((p) => p.isNew && p.isActive).slice(0, 4);
const dealProducts = allProducts.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price && p.isActive).slice(0, 4);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-20 sm:px-6 lg:px-8">

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="mt-6">
        <HeroBanner banners={dummyBanners} />
      </section>

      {/* ── Trust Badges ────────────────────────────────────────────── */}
      <section aria-label="Why shop with us" className="mt-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {trustBadges.map(({ icon: Icon, title, body, color, bg }) => (
            <div
              key={title}
              className={`group relative flex items-center gap-3.5 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 ${bg} px-5 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/[0.03] hover:-translate-y-0.5 overflow-hidden`}
            >
              {/* Decorative glow */}
              <div className={`absolute -top-6 -right-6 h-20 w-20 rounded-full ${bg} opacity-60 blur-2xl`} />
              
              <div className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="relative z-10 min-w-0">
                <p className="text-xs font-bold text-gray-900 dark:text-white">{title}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Shop by Category ────────────────────────────────────────── */}
      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
              Shop by Category
            </h2>
            <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              Browse our curated collections
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <CategoryStrip categories={dummyCategories} />
      </section>

      {/* ── Featured Products ────────────────────────────────────────── */}
      <section className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                Featured Products
              </h2>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Hand-picked by our experts
              </p>
            </div>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
          >
            See all
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* ── Mid-Page Promo Banner — Premium Gradient ──────────────── */}
      <section aria-label="Promotion" className="mt-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-12 sm:px-14 sm:py-16 shadow-2xl shadow-gray-900/10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3 max-w-lg">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                <Zap className="h-3 w-3 fill-current" />
                Limited Time Offer
              </span>
              <h2 className="text-3xl font-black text-white sm:text-4xl tracking-tight leading-tight">
                Up to 30% off<br />
                <span className="text-amber-400">Accessories</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Cases, chargers, audio gear — everything to complete your setup. Premium quality at unbeatable prices.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                href="/categories/cases-covers"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-sm rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
              >
                Shop Accessories
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white bg-white/5 hover:bg-white/10 font-bold text-sm rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                View All Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers ──────────────────────────────────────────── */}
      {bestSellers.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  Best Sellers
                </h2>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Loved by thousands of customers
                </p>
              </div>
            </div>
            <Link
              href="/products?sort=popularity"
              className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
            >
              See all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ── Deals Section ─────────────────────────────────────────── */}
      {dealProducts.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  Deals & Savings
                </h2>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Save big on premium gadgets
                </p>
              </div>
            </div>
            <Link
              href="/products?sort=price_asc"
              className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
            >
              See all deals
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {dealProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ── New Arrivals ─────────────────────────────────────────────── */}
      {newArrivals.length > 0 && (
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                  New Arrivals
                </h2>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Fresh drops you don&apos;t want to miss
                </p>
              </div>
            </div>
            <Link
              href="/products?sort=newest"
              className="flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
            >
              See all
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ── Testimonials Section ───────────────────────────────────── */}
      <section className="mt-20">
        <Testimonials />
      </section>

      {/* ── Newsletter / CTA Section ─────────────────────────────── */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-8 py-14 sm:px-14 text-center shadow-sm">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-purple-500/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-lg mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider rounded-full">
              Stay Updated
            </span>
            <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Get the Latest Drops & Exclusive Deals
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Join 50,000+ gadget enthusiasts. Be the first to know about new arrivals, flash sales, and VIP-only discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-gray-400"
                aria-label="Email address for newsletter"
              />
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-sm rounded-xl shadow-md shadow-amber-500/10 transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-gray-600">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

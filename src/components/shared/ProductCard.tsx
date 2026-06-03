import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Eye, Heart, TrendingUp } from "lucide-react";
import type { Product } from "@/types/domain";
import { LOW_STOCK_THRESHOLD } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const isOutOfStock = product.inventory === 0;
  const isLowStock = product.inventory > 0 && product.inventory <= LOW_STOCK_THRESHOLD;
  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/[0.06] dark:hover:shadow-black/20 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700">
      {/* Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/4.2] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900/50"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
            isOutOfStock ? "opacity-50 grayscale" : ""
          }`}
          priority={priority}
        />

        {/* Subtle gradient overlay at bottom for readability */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges — top-left stacked */}
        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-emerald-500 text-white rounded-md shadow-sm shadow-emerald-500/20">
              New
            </span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-amber-500 text-white rounded-md shadow-sm shadow-amber-500/20">
              <TrendingUp className="h-2.5 w-2.5" /> Best Seller
            </span>
          )}
          {discountPct && (
            <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-red-500 text-white rounded-md shadow-sm shadow-red-500/20">
              -{discountPct}%
            </span>
          )}
        </div>

        {/* Quick action buttons — appear on hover */}
        <div className="absolute right-2.5 top-2.5 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-600 dark:text-gray-300 shadow-lg backdrop-blur-sm hover:bg-amber-500 hover:text-white transition-all duration-200"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <Heart className="h-3.5 w-3.5" />
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-600 dark:text-gray-300 shadow-lg backdrop-blur-sm hover:bg-amber-500 hover:text-white transition-all duration-200"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Out of stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 dark:bg-black/60 backdrop-blur-[2px]">
            <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg shadow-lg">
              Sold Out
            </span>
          </div>
        )}
      </Link>

      {/* Content Section */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        {/* Brand */}
        <p className="text-[10px] font-black uppercase tracking-[0.12em] text-amber-600 dark:text-amber-500">
          {product.brand}
        </p>

        {/* Product Name */}
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-bold leading-snug text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 line-clamp-2 transition-colors duration-200"
        >
          {product.name}
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1.5" aria-label={`${product.rating} out of 5 stars`}>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-3 w-3 ${
                    star <= Math.round(product.rating!)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300">{product.rating.toFixed(1)}</span>
            {product.reviewCount && (
              <span className="text-[10px] text-gray-400 dark:text-gray-500">({product.reviewCount.toLocaleString()})</span>
            )}
          </div>
        )}

        {/* Low stock urgency */}
        {isLowStock && (
          <p className="text-[10px] font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Only {product.inventory} left — order soon!
          </p>
        )}

        {/* Price + CTA row */}
        <div className="mt-auto flex items-end justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-900">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-gray-950 dark:text-white tracking-tight">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-[11px] text-gray-400 dark:text-gray-600 line-through font-medium">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
            {hasDiscount && (
              <span className="text-[10px] font-bold text-red-600 dark:text-red-400 -mt-0.5">
                Save ${(product.compareAtPrice! - product.price).toFixed(2)}
              </span>
            )}
          </div>

          <button
            disabled={isOutOfStock}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm transition-all duration-200 hover:bg-amber-500 hover:shadow-md hover:shadow-amber-500/15 dark:hover:bg-amber-500 dark:hover:text-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-900 disabled:hover:shadow-none"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import type { Product } from "@/types/domain";
import { dummyCategories } from "@/lib/dummy-data";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const isOutOfStock = product.inventory === 0;
  const category = dummyCategories.find((c) => c.id === product.categoryId);

  return (
    <div className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">

      {/* Image area */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block bg-[#f5f5f5] rounded-2xl mx-2 mt-2 overflow-hidden"
        style={{ aspectRatio: "1/1" }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-contain p-4 transition-transform duration-300 group-hover:scale-105 ${
            isOutOfStock ? "opacity-50 grayscale" : ""
          }`}
          priority={priority}
        />

        {/* Category badge — top right */}
        {category && (
          <span className="absolute right-2.5 top-2.5 rounded-full border border-border bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-foreground backdrop-blur-sm">
            {category.name}
          </span>
        )}

        {/* Out of stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60">
            <span className="rounded-full border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Info area */}
      <div className="flex flex-col gap-2 p-3 pt-3">

        {/* Product name */}
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-bold leading-tight text-foreground hover:text-primary line-clamp-2"
        >
          {product.name}
        </Link>

        {/* Rating + Price row */}
        <div className="flex items-center justify-between gap-2">
          {/* Rating */}
          <div className="flex items-center gap-1" aria-label={`${product.rating} out of 5 stars`}>
            <Star className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
            <span className="text-xs text-muted-foreground">
              {product.rating?.toFixed(1)}{" "}
              {product.reviewCount && (
                <span>
                  ({product.reviewCount >= 1000
                    ? `${(product.reviewCount / 1000).toFixed(1)}k`
                    : product.reviewCount}{" "}
                  Reviews)
                </span>
              )}
            </span>
          </div>

          {/* Price */}
          <span className="text-sm font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Action buttons */}
        <div className="mt-1 grid grid-cols-2 gap-2">
          <button
            disabled={isOutOfStock}
            aria-label={`Add ${product.name} to cart`}
            className="rounded-full border border-border bg-white py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
          <button
            disabled={isOutOfStock}
            aria-label={`Buy ${product.name} now`}
            className="rounded-full bg-foreground py-2 text-xs font-semibold text-background transition-colors hover:bg-foreground/85 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

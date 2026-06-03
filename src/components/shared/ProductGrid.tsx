import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import type { Product } from "@/types/domain";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  skeletonCount?: number;
  priority?: boolean;
}

export function ProductGrid({
  products,
  loading = false,
  skeletonCount = 8,
  priority = false,
}: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-4xl">📦</p>
        <h3 className="mt-4 text-lg font-semibold">No products found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters or search query.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={priority && i < 4}
        />
      ))}
    </div>
  );
}

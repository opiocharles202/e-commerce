"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Category } from "@/types/domain";

interface FilterSidebarProps {
  categories: Category[];
  brands: string[];
  currentFilters: {
    category?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    q?: string;
  };
  onApply?: () => void; // called after filter change — used by mobile drawer to close
}

export function FilterSidebar({ categories, brands, currentFilters, onApply }: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setFilter(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`);
    onApply?.();
  }

  function clearAll() {
    const params = new URLSearchParams();
    if (currentFilters.q) params.set("q", currentFilters.q);
    router.push(`${pathname}?${params.toString()}`);
    onApply?.();
  }

  const hasActiveFilters =
    currentFilters.category || currentFilters.brand || currentFilters.minPrice || currentFilters.maxPrice;

  return (
    <div className="flex flex-col gap-5">
      {/* Clear filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAll}
          className="w-full justify-start gap-2 text-muted-foreground"
        >
          <X className="h-3.5 w-3.5" />
          Clear all filters
        </Button>
      )}

      {/* Categories */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Category
        </h3>
        <ul className="flex flex-col gap-0.5">
          <li>
            <button
              onClick={() => setFilter("category", null)}
              className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted ${
                !currentFilters.category
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-muted-foreground"
              }`}
            >
              All Categories
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() =>
                  setFilter(
                    "category",
                    currentFilters.category === cat.slug ? null : cat.slug
                  )
                }
                className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted ${
                  currentFilters.category === cat.slug
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {cat.name}
                {cat.productCount !== undefined && (
                  <span className="ml-1 text-[11px] opacity-60">({cat.productCount})</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Price Range
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            defaultValue={currentFilters.minPrice}
            onBlur={(e) => setFilter("minPrice", e.target.value || null)}
            className="h-7 w-full rounded-md border bg-background px-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            min={0}
            aria-label="Minimum price"
          />
          <span className="text-xs text-muted-foreground">–</span>
          <input
            type="number"
            placeholder="Max"
            defaultValue={currentFilters.maxPrice}
            onBlur={(e) => setFilter("maxPrice", e.target.value || null)}
            className="h-7 w-full rounded-md border bg-background px-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            min={0}
            aria-label="Maximum price"
          />
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Brand
        </h3>
        <ul className="flex flex-col gap-0.5">
          {brands.map((brand) => (
            <li key={brand}>
              <button
                onClick={() =>
                  setFilter("brand", currentFilters.brand === brand ? null : brand)
                }
                className={`w-full rounded-md px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted ${
                  currentFilters.brand === brand
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {brand}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

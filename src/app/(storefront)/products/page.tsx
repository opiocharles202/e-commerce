import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/shared/ProductGrid";
import { ProductCardSkeleton } from "@/components/shared/ProductCardSkeleton";
import { FilterSidebar } from "@/components/shared/FilterSidebar";
import { SortSelect } from "@/components/shared/SortSelect";
import { MobileFilterDrawer } from "@/components/shared/MobileFilterDrawer";
import { allProducts, dummyCategories } from "@/lib/dummy-data";
import { SITE_NAME } from "@/lib/constants";
import type { Product } from "@/types/domain";

export const metadata: Metadata = {
  title: `All Products | ${SITE_NAME}`,
  description: "Browse our full range of mobile phones and accessories.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
    q?: string;
  }>;
}

function filterAndSort(params: Awaited<ProductsPageProps["searchParams"]>): Product[] {
  let products = allProducts.filter((p) => p.isActive);

  if (params.q) {
    const q = params.q.toLowerCase();
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (params.category) {
    const cat = dummyCategories.find((c) => c.slug === params.category);
    if (cat) products = products.filter((p) => p.categoryId === cat.id);
  }

  if (params.brand) {
    products = products.filter(
      (p) => p.brand.toLowerCase() === params.brand!.toLowerCase()
    );
  }

  if (params.minPrice) {
    const min = parseFloat(params.minPrice);
    if (!isNaN(min)) products = products.filter((p) => p.price >= min);
  }

  if (params.maxPrice) {
    const max = parseFloat(params.maxPrice);
    if (!isNaN(max)) products = products.filter((p) => p.price <= max);
  }

  switch (params.sort) {
    case "price-asc":
      products = [...products].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      products = [...products].sort((a, b) => b.price - a.price);
      break;
    default: // newest
      products = [...products].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
  }

  return products;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const products = filterAndSort(params);

  const brands = [...new Set(allProducts.map((p) => p.brand))].sort();
  const activeCategory = params.category
    ? dummyCategories.find((c) => c.slug === params.category)
    : null;

  // Count active filters for the badge
  const activeFilterCount = [
    params.category,
    params.brand,
    params.minPrice,
    params.maxPrice,
  ].filter(Boolean).length;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: activeCategory ? activeCategory.name : "All Products" },
        ]}
      />

      <div className="mt-6 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {activeCategory ? activeCategory.name : "All Products"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {products.length} product{products.length !== 1 ? "s" : ""}
            {params.q ? ` for "${params.q}"` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile filter button — hidden on lg */}
          <MobileFilterDrawer
            categories={dummyCategories}
            brands={brands}
            currentFilters={params}
            activeCount={activeFilterCount}
          />
          <SortSelect currentSort={params.sort} />
        </div>
      </div>

      <div className="mt-6 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 lg:block">
          <FilterSidebar
            categories={dummyCategories}
            brands={brands}
            currentFilters={params}
          />
        </aside>

        {/* Product grid */}
        <div className="flex-1 min-w-0">
          <Suspense
            fallback={
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            }
          >
            <ProductGrid products={products} priority />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

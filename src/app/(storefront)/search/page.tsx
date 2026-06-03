import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/shared/ProductGrid";
import { searchProducts, dummyCategories } from "@/lib/dummy-data";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  robots: { index: false, follow: false }, // noindex search pages
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = q.trim() ? searchProducts(q.trim()) : [];
  const hasQuery = q.trim().length > 0;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search" }]} />

      <div className="mt-6">
        <h1 className="text-2xl font-bold tracking-tight">
          {hasQuery ? `Results for "${q}"` : "Search Products"}
        </h1>

        {hasQuery && (
          <p className="mt-1 text-sm text-muted-foreground">
            {results.length} result{results.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {!hasQuery && (
        <div className="mt-12 text-center">
          <p className="text-4xl">🔍</p>
          <p className="mt-4 text-muted-foreground">
            Enter a search term in the search bar above to find products.
          </p>
        </div>
      )}

      {hasQuery && results.length === 0 && (
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-4xl">😕</p>
          <h2 className="mt-4 text-lg font-semibold">No results for &quot;{q}&quot;</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search, or browse a category:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {dummyCategories.slice(0, 3).map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="rounded-full border px-4 py-1.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {hasQuery && results.length > 0 && (
        <div className="mt-6">
          <ProductGrid products={results} />
        </div>
      )}
    </div>
  );
}

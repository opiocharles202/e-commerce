import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/shared/ProductGrid";
import { SortSelect } from "@/components/shared/SortSelect";
import { dummyCategories, getProductsByCategory } from "@/lib/dummy-data";
import { SITE_NAME } from "@/lib/constants";
import type { Product } from "@/types/domain";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = dummyCategories.find((c) => c.slug === slug);
  if (!cat) return { title: `Not Found | ${SITE_NAME}` };
  return {
    title: `${cat.name} | ${SITE_NAME}`,
    description: `Shop the best ${cat.name} at Gadget District. Fast delivery and great prices.`,
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { sort } = await searchParams;

  const category = dummyCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  let products: Product[] = getProductsByCategory(slug);

  switch (sort) {
    case "price-asc":
      products = [...products].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      products = [...products].sort((a, b) => b.price - a.price);
      break;
    default:
      products = [...products].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.name },
        ]}
      />

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{category.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {products.length} product{products.length !== 1 ? "s" : ""}
          </p>
        </div>
        <SortSelect currentSort={sort} />
      </div>

      <div className="mt-6">
        <ProductGrid products={products} priority />
      </div>
    </div>
  );
}

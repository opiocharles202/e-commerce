import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Star, Plus, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ProductGrid } from "@/components/shared/ProductGrid";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProductTabs } from "@/components/shared/ProductTabs";
import { ProductInteractivePanel } from "@/components/shared/ProductInteractivePanel";
import { getProductBySlug, dummyCategories, allProducts } from "@/lib/dummy-data";
import { SITE_NAME } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: `Product Not Found | ${SITE_NAME}` };

  return {
    title: `${product.name} | ${SITE_NAME}`,
    description: product.description.slice(0, 155),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 155),
      images: [{ url: product.images[0], width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const category = dummyCategories.find((c) => c.id === product.categoryId);
  
  // Related products (same category, excluding current product)
  const relatedProducts = allProducts
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id && p.isActive)
    .slice(0, 4);

  // Frequently Bought Together: current product + first related product
  const bundleProduct = relatedProducts[0];
  const bundleTotal = product.price + (bundleProduct ? bundleProduct.price : 0);

  const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPct = hasDiscount
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : null;

  // JSON-LD structured data for Google Search/SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.sku,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      price: product.price.toString(),
      priceCurrency: "USD",
      availability:
        product.inventory > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 bg-gray-50/20 dark:bg-gray-950/10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            ...(category
              ? [{ label: category.name, href: `/categories/${category.slug}` }]
              : []),
            { label: product.name },
          ]}
        />

        {/* 3-Column Amazon-Style Layout for large screens, grid for smaller */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Image Gallery (Span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ImageGallery images={product.images} name={product.name} />
          </div>

          {/* Column 2: Center Product Details (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              {/* Brand and category */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-500">
                  {product.brand}
                </span>
                <span className="text-xs text-gray-300 dark:text-gray-700">|</span>
                <Link 
                  href={`/categories/${category?.slug}`}
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {category?.name}
                </Link>
              </div>

              {/* Product Title */}
              <h1 className="mt-2 text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl leading-tight">
                {product.name}
              </h1>

              {/* SKU / Model */}
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-1.5">
                Model: <span className="text-gray-600 dark:text-gray-300">{product.sku}</span>
              </p>
            </div>

            {/* Ratings and Reviews Summary */}
            {product.rating && (
              <div className="flex items-center gap-2.5 pb-2 border-b border-gray-100 dark:border-gray-900">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.round(product.rating!)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-gray-200 text-gray-200 dark:fill-gray-800 dark:text-gray-800"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-300 dark:text-gray-700">|</span>
                <a
                  href="#reviews"
                  className="text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:underline transition-all"
                >
                  {product.reviewCount?.toLocaleString()} customer reviews
                </a>
              </div>
            )}

            {/* Badges block */}
            <div className="flex flex-wrap gap-2">
              {product.isNew && (
                <Badge className="bg-emerald-500 text-white font-bold px-2.5 py-0.5 text-[11px] rounded-md shadow-sm border-0">
                  New Arrival
                </Badge>
              )}
              {product.isBestSeller && (
                <Badge className="bg-amber-500 text-white font-bold px-2.5 py-0.5 text-[11px] rounded-md shadow-sm border-0">
                  Best Seller
                </Badge>
              )}
              {discountPct && (
                <Badge className="bg-red-500 text-white font-bold px-2.5 py-0.5 text-[11px] rounded-md shadow-sm border-0">
                  Save {discountPct}%
                </Badge>
              )}
            </div>

            {/* Quick Description */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Overview
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* About this item (Main bullet highlights, mid section) */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-900">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  About this item
                </h3>
                <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300">
                  {product.highlights.slice(0, 5).map((highlight, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-amber-500 font-bold select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 3: Buy Box Panel (Span 3) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <ProductInteractivePanel product={product} />
          </div>

        </div>

        {/* Tabbed Content (Overview, Specs, Reviews, Shipping & Box content) */}
        <div id="reviews" className="scroll-mt-24">
          <ProductTabs product={product} />
        </div>

        {/* Frequently Bought Together (Amazon-style bundled recommendation) */}
        {bundleProduct && (
          <div className="mt-12 p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-950 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Info className="h-5 w-5 text-amber-500" /> Frequently Bought Together
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Product Images Row */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Product A */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-24 w-24 rounded-xl border border-gray-100 dark:border-gray-900 overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-center truncate max-w-[100px] text-gray-700 dark:text-gray-300">
                    This item
                  </span>
                </div>

                <Plus className="h-5 w-5 text-gray-300 dark:text-gray-700 shrink-0" />

                {/* Product B */}
                <Link href={`/products/${bundleProduct.slug}`} className="flex flex-col items-center gap-2 hover:opacity-85 transition-opacity">
                  <div className="relative h-24 w-24 rounded-xl border border-gray-100 dark:border-gray-900 overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Image
                      src={bundleProduct.images[0]}
                      alt={bundleProduct.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-center text-amber-600 dark:text-amber-500 hover:underline truncate max-w-[100px]">
                    {bundleProduct.name}
                  </span>
                </Link>
              </div>

              {/* Total and CTA Bundle */}
              <div className="flex-1 md:border-l md:border-gray-100 dark:md:border-gray-900 md:pl-8 py-2 space-y-3 w-full md:w-auto text-center md:text-left">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Bundle Price:</p>
                  <p className="text-2xl font-black text-gray-950 dark:text-white">${bundleTotal.toFixed(2)}</p>
                </div>

                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md shadow-amber-500/10 transition-colors w-full sm:w-auto"
                >
                  Buy Both Items
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* You May Also Like / Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">You May Also Like</h2>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Products recommendations based on this category</p>
              </div>
              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  View all {category.name}
                </Link>
              )}
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </>
  );
}

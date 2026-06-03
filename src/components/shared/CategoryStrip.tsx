import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types/domain";

// Map category slug → product image path
const categoryImageMap: Record<string, string> = {
  smartphones: "/iphone-16.png",
  "cases-covers": "/magsafewalletonly.png",
  chargers: "/anker-charger.png",
  audio: "/airpods-pro.png",
  tablets: "/macbook-m5.png",
  cables: "/iphone-charger.png",
};

interface CategoryStripProps {
  categories: Category[];
}

export function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <section aria-label="Shop by category" className="relative w-full">
      {/* 
        On mobile, flex layout with horizontal scrolling and snap-to-card.
        On desktop, clean 6-column grid layout.
      */}
      <div 
        className="flex sm:grid sm:grid-cols-6 gap-4 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => {
          const imageSrc = categoryImageMap[cat.slug] || "/onplus-front.png";
          
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group relative flex flex-col items-center gap-4 w-[135px] sm:w-auto flex-shrink-0 snap-start rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 p-4 text-center transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/[0.04] hover:-translate-y-1.5 hover:border-amber-500/50 dark:hover:border-amber-500/50 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-amber-500/5 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Product Image Frame */}
              <div className="relative z-10 flex h-24 w-full items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-900/55 p-3.5 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:shadow-sm">
                <Image
                  src={imageSrc}
                  alt={cat.name}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[3deg]"
                />
              </div>

              {/* Title & Count */}
              <div className="relative z-10 w-full min-w-0">
                <span className="block text-xs sm:text-sm font-black leading-tight text-gray-900 dark:text-white group-hover:text-amber-500 transition-colors truncate">
                  {cat.name}
                </span>
                {cat.productCount !== undefined && (
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 font-bold tracking-tight">
                    {cat.productCount} Products
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

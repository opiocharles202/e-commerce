import Link from "next/link";
import { Smartphone, Shield, Zap, Headphones, Tablet, Cable } from "lucide-react";
import type { Category } from "@/types/domain";

// Map icon string → component
const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Shield,
  Zap,
  Headphones,
  Tablet,
  Cable,
};

// Curated gradient colors for each category
const gradientMap: Record<string, string> = {
  Smartphone: "from-blue-500 to-indigo-600",
  Shield: "from-emerald-500 to-teal-600",
  Zap: "from-amber-500 to-orange-600",
  Headphones: "from-purple-500 to-violet-600",
  Tablet: "from-cyan-500 to-blue-600",
  Cable: "from-rose-500 to-pink-600",
};

const bgLightMap: Record<string, string> = {
  Smartphone: "bg-blue-50 dark:bg-blue-950/20",
  Shield: "bg-emerald-50 dark:bg-emerald-950/20",
  Zap: "bg-amber-50 dark:bg-amber-950/20",
  Headphones: "bg-purple-50 dark:bg-purple-950/20",
  Tablet: "bg-cyan-50 dark:bg-cyan-950/20",
  Cable: "bg-rose-50 dark:bg-rose-950/20",
};

interface CategoryStripProps {
  categories: Category[];
}

export function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <section aria-label="Shop by category">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {categories.map((cat) => {
          const Icon = cat.icon ? iconMap[cat.icon] : Smartphone;
          const gradient = cat.icon ? gradientMap[cat.icon] || "from-gray-500 to-gray-600" : "from-gray-500 to-gray-600";
          const bgLight = cat.icon ? bgLightMap[cat.icon] || "bg-gray-50 dark:bg-gray-900/20" : "bg-gray-50 dark:bg-gray-900/20";
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className={`group relative flex flex-col items-center gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 ${bgLight} p-5 text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/[0.04] hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-700 overflow-hidden`}
            >
              {/* Decorative background glow */}
              <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br ${gradient} opacity-[0.06] blur-2xl group-hover:opacity-[0.12] transition-opacity duration-500`} />
              
              {/* Icon circle */}
              <span className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-gray-900/5 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                {Icon && <Icon className="h-6 w-6" />}
              </span>

              {/* Text */}
              <div className="relative z-10">
                <span className="text-xs font-bold leading-tight text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </span>
                {cat.productCount !== undefined && (
                  <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 font-medium">
                    {cat.productCount} products
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

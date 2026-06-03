import { Skeleton } from "@/components/ui/skeleton";

export default function StorefrontLoading() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero skeleton */}
      <Skeleton className="w-full rounded-xl" style={{ aspectRatio: "21/9" }} />

      {/* Trust badges */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-xl" />
        ))}
      </div>

      {/* Section heading */}
      <div className="mt-8 flex items-center justify-between">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-7 w-20" />
      </div>

      {/* Category strip */}
      <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>

      {/* Products */}
      <div className="mt-8 flex items-center justify-between">
        <Skeleton className="h-7 w-48" />
        <Skeleton className="h-7 w-20" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-xl" />
        ))}
      </div>
    </div>
  );
}

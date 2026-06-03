import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm">
      {/* Image area skeleton */}
      <div className="mx-2 mt-2">
        <Skeleton className="aspect-square w-full rounded-2xl bg-[#f0f0f0]" />
      </div>
      {/* Info skeleton */}
      <div className="flex flex-col gap-2 p-3 pt-3">
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-4 w-14" />
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2">
          <Skeleton className="h-8 rounded-full" />
          <Skeleton className="h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950">
      <Skeleton className="aspect-[4/4.2] w-full rounded-none" />
      <div className="flex flex-col gap-2.5 p-4">
        <Skeleton className="h-2.5 w-14 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4 rounded-md" />
        <Skeleton className="h-3 w-24 rounded-md" />
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-900 mt-1">
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function ImageCardSkeleton() {
  return (
    <div className="rounded-xl p-4 bg-white">
      <Skeleton className="w-full h-[400px] rounded-xl" />
      <div className="flex items-center gap-2 mt-4">
        <Skeleton className="w-5 h-5 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
  );
}
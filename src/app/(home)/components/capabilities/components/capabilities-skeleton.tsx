import { Skeleton } from "@/components/skeleton";

interface CapabilitiesSkeletonProps {
  className?: string;
}

export function CapabilitiesSkeleton({
  className = "",
}: CapabilitiesSkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full py-6 flex items-center justify-center select-none overflow-hidden min-h-[380px] ${className}`}
    >
      <div className="hidden md:flex flex-col items-center justify-between w-[240px] h-[310px] rounded-2xl border border-border/40 p-4 opacity-30 scale-90 -mr-16 blur-[1px]">
        <Skeleton className="w-8 h-8 rounded-lg mb-3" />
        <Skeleton className="w-24 h-3 rounded mb-4" />
        <div className="w-full space-y-2">
          <Skeleton className="w-full h-2 rounded" />
          <Skeleton className="w-4/5 h-2 rounded" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between w-[250px] sm:w-[280px] h-[330px] sm:h-[360px] rounded-2xl bg-surface/95 dark:bg-surface/90 backdrop-blur-md border border-border/80 p-4 sm:p-5 shadow-lg shadow-black/10 dark:shadow-black/30">
        <div className="flex flex-col items-center w-full">
          <Skeleton className="w-9 h-9 rounded-lg mb-3" />
          <Skeleton className="w-32 h-4 rounded-md mb-4" />
          <div className="w-full space-y-2.5 pt-2">
            <Skeleton className="w-full h-2.5 rounded" />
            <Skeleton className="w-11/12 h-2.5 rounded" />
            <Skeleton className="w-3/4 h-2.5 rounded" />
          </div>
        </div>
        <Skeleton className="w-full h-1 rounded-full" />
      </div>

      <div className="hidden md:flex flex-col items-center justify-between w-[240px] h-[310px] rounded-2xl border border-border/40 p-4 opacity-30 scale-90 -ml-16 blur-[1px]">
        <Skeleton className="w-8 h-8 rounded-lg mb-3" />
        <Skeleton className="w-24 h-3 rounded mb-4" />
        <div className="w-full space-y-2">
          <Skeleton className="w-full h-2 rounded" />
          <Skeleton className="w-4/5 h-2 rounded" />
        </div>
      </div>
    </div>
  );
}

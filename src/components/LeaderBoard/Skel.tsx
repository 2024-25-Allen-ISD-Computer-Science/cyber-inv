"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function LeaderboardSkeleton() {
  return (
    <div className="bg-background min-w-fit rounded-xl p-5">
      <div className="mb-6">
        <Skeleton className="h-10 w-64" />
      </div>
      
      <div className="flex justify-end mb-4">
        <Skeleton className="h-10 w-24" />
      </div>
      
      {/* Table header skeleton */}
      <div className="border rounded-md">
        <div className="flex items-center p-4 border-b">
          <Skeleton className="h-5 w-10 mr-6" /> {/* Rank */}
          <Skeleton className="h-5 w-40 mr-auto" /> {/* Team Name */}
          <Skeleton className="h-5 w-16" /> {/* Score */}
        </div>
        
        {/* Table rows skeleton - repeat for 5 rows (default page size) */}
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="flex items-center p-4 border-b">
            <Skeleton className="h-5 w-10 mr-6" /> {/* Rank */}
            <div className="flex items-center mr-auto">
              <Skeleton className="h-8 w-8 rounded-full mr-2" /> {/* Team logo */}
              <Skeleton className="h-5 w-36" /> {/* Team name */}
            </div>
            <Skeleton className="h-5 w-16" /> {/* Score */}
          </div>
        ))}
      </div>
      
      {/* Pagination skeleton */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Skeleton className="h-8 w-8" /> {/* Previous button */}
        <Skeleton className="h-8 w-8" /> {/* Page number */}
        <Skeleton className="h-8 w-8" /> {/* Next button */}
      </div>
    </div>
  );
}
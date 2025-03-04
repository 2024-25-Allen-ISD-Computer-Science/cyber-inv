import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export default function TeamPodiumSkeleton() {
  return (
    <div className="flex items-end justify-between w-full h-64 md:h-80 lg:h-96 gap-2 p-2 md:p-4">
      {/* Second place */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2 space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
        <Skeleton className="w-full h-24 bg-gray-200" />
      </div>
      
      {/* First place (tallest) */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2 space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
        <Skeleton className="w-full h-32 bg-gray-200" />
      </div>
      
      {/* Third place */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2 space-y-2 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2 mx-auto" />
        </div>
        <Skeleton className="w-full h-20 bg-gray-200" />
      </div>
    </div>
  );
}
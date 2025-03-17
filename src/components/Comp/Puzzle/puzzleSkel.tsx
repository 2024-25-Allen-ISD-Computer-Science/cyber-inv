import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PuzzleDashboardSkeleton() {
  // Create array of 6 items for grid
  const skeletonCards = Array(6).fill(0);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-8">
        <Skeleton className="h-10 w-48" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-96 mb-6" />
      </div>

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonCards.map((_, index) => (
          <Card key={index} className="w-full h-48">
            <CardHeader>
              <div className="flex justify-between">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-16" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-full mb-2" />
              <Skeleton className="h-8 w-3/4" />
              <div className="flex gap-2 mt-4">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center mt-8">
        <Skeleton className="h-10 w-64" />
      </div>
    </div>
  );
}
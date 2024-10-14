import * as React from "react";
import Podium from "@/components/Podium";
import Leaderboard from "@/components/Leaderboard";
import AuthCheck from "./AuthCheck";

export default function DataTableDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <AuthCheck />
      <div className="w-3/4 h-full flex justify-center space-x-4">
        {/* Podium Component */}
        <Podium />

        {/* Leaderboard Component */}
        <Leaderboard />
      </div>
    </div>
  );
}

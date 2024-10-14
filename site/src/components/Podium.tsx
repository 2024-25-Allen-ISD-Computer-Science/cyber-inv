"use client";
import React, { useEffect, useState } from "react";
import { GiLaurelCrown } from "react-icons/gi";
import pb from "@/app/api/pocketbase";

export default function Podium() {
  const [sortedData, setSortedData] = useState<any[]>([]);

  // Fetch data for the podium
  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("Rankings").getFullList();
        const sorted = records.sort((a, b) => b.teamScore - a.teamScore);
        setSortedData(sorted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black bg-opacity-10 p-10 rounded-3xl h-full w-fit backdrop-blur-xl">
      <div className="text-9xl font-bold text-center w-full md:p-5">
        <div className="flex space-x-4 items-end h-96 w-full justify-center place-content-center">
          {/* 5th Place Podium */}
          <div className="flex flex-col justify-start items-center w-28 h-1/5 rounded-md bg-zinc-900 p-2">
            <span className="text-sm font-bold">5th</span>
            <span className="w-full text-sm">{sortedData[4]?.teamName || "?????"}</span>
            <span className="text-sm">{sortedData[4]?.teammates || "?????"}</span>
          </div>

          {/* 3rd Place Podium */}
          <div className="flex flex-col justify-start items-center w-28 h-3/5 rounded-md bg-zinc-900 p-2">
            <span className="text-sm font-bold">3rd</span>
            <span className="w-full text-sm">{sortedData[2]?.teamName || "?????"}</span>
            <span className="text-sm">{sortedData[2]?.teammates || "?????"}</span>
          </div>

          {/* 1st Place Podium */}
          <div className="flex flex-col justify-start items-center w-36 h-full rounded-md bg-zinc-900 p-2">
            <GiLaurelCrown className="h-10 w-10 fill-yellow-300" />
            <span className="text-sm font-bold">1st</span>
            <span className="w-full text-sm">{sortedData[0]?.teamName || "?????"}</span>
            <span className="text-sm">{sortedData[0]?.teammates || "??????"}</span>
          </div>

          {/* 2nd Place Podium */}
          <div className="flex flex-col justify-start items-center w-32 h-4/5 rounded-md bg-zinc-900 p-2">
            <span className="text-sm font-bold">2nd</span>
            <span className="w-full text-sm">{sortedData[1]?.teamName || "?????"}</span>
            <span className="text-sm">{sortedData[1]?.teammates || "?????"}</span>
          </div>

          {/* 4th Place Podium */}
          <div className="flex flex-col justify-start items-center w-28 h-2/5 rounded-md bg-zinc-900 p-2">
            <span className="text-sm font-bold">4th</span>
            <span className="w-full text-sm">{sortedData[3]?.teamName || "?????"}</span>
            <span className="text-sm">{sortedData[3]?.teammates || "?????"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

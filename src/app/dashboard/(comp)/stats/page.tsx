"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import pb from "@/app/api/pocketbase"; // Assuming PocketBase is set up here

export default function DataTableDemo() {
  const [data, setData] = useState<any[]>([]);
  const [currentTeamName, setCurrentTeamName] = useState("Your Team Name"); // Replace with the actual current user's team name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection('Rankings').getFullList();
        setData(records);
      } catch (error) {
        console.error("Error fetching data:", error.message || error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead> {/* Added Rank column */}
              <TableHead>Team Name</TableHead>
              <TableHead>Team Score</TableHead>
              <TableHead>Teammates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map((item, index) => {
                const isCurrentTeam = item.teamName === currentTeamName; // Check if this is the current user's team
                return (
                  <TableRow key={index} className={isCurrentTeam ? "bg-blue-100" : ""}> {/* Highlight the current team row */}
                    <TableCell>{index + 1}</TableCell> {/* Display the rank based on the index */}
                    <TableCell>{item.teamName}</TableCell>
                    <TableCell>{item.teamScore}</TableCell>
                    <TableCell>
                    {item.teammates}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

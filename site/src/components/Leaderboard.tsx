"use client";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import pb from "@/app/api/pocketbase";

export default function Leaderboard() {
  const [data, setData] = useState<any[]>([]);
  const [currentTeamName, setCurrentTeamName] = useState("");

  // Fetch user team data
  useEffect(() => {
    const fetchUserTeam = async () => {
      try {
        const user:any = pb.authStore.model;
        const teamName = user.teamName;
        if (teamName) {
          setCurrentTeamName(teamName);
        } else {
          console.warn("User does not have a team assigned.");
        }
      } catch (error) {
        console.error("Error fetching user data:",  error);
      }
    };

    fetchUserTeam();
  }, []);

  // Fetch leaderboard data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("Rankings").getFullList();
        const sorted = records.sort((a, b) => b.teamScore - a.teamScore);
        setData(sorted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-md border bg-neutral-950 w-fit h-full bg-opacity-10 backdrop-blur-xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Team Name</TableHead>
            <TableHead>Teammates</TableHead>
            <TableHead>Team Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-scroll">
          {data.length ? (
            data.map((item, index) => {
              const isCurrentTeam = item.teamName.toLowerCase() === currentTeamName.toLowerCase();
              return (
                <TableRow key={index} className={isCurrentTeam ? "bg-blue-100 bg-opacity-30" : ""}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.teamName}</TableCell>
                  <TableCell className="line-clamp-1">{item.teammates}</TableCell>
                  <TableCell>{item.teamScore}</TableCell>
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
  );
}

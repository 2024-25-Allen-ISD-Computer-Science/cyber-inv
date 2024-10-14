"use client";
import * as React from "react";
import Playercard from "@/components/Playercard";
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
import AuthCheck from "./AuthCheck";
import { GiLaurelCrown } from "react-icons/gi";

export default function DataTableDemo() {
  const [data, setData] = useState<any[]>([]);
  const [currentTeamName, setCurrentTeamName] = useState(""); // Will be dynamically set
  const [teammatesData, setTeammatesData] = useState<any[]>([]); // Store teammate data here

  // Function to dynamically fetch the logged-in user's team name
  useEffect(() => {
    const fetchUserTeam = async () => {
      try {
        const user = pb.authStore.model; // Assuming you are using PocketBase's authStore
        const teamName = user.teamName; // Assuming 'teamName' is the field in your user model
        if (teamName) {
          setCurrentTeamName(teamName);
        } else {
          console.warn("User does not have a team assigned.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message || error);
      }
    };

    fetchUserTeam();
  }, []);

  // Function to fetch player data
  const fetchPlayerData = async (teammates: string[]) => {
    const players = [];

    for (const teammate of teammates) {
      const trimmedTeammate = teammate.trim(); // Clean up spaces around name
      if (!trimmedTeammate) continue; // Skip if name is empty
      console.log(`Fetching data for teammate: "${trimmedTeammate}"`);

      try {
        // Corrected filter without extra quotes
        const playerRecord = await pb.collection('player').getFirstListItem(`name = "${trimmedTeammate}"`, {
          expand: 'points.subRelField', // Adjust as per your schema
        });

        if (playerRecord) {
          players.push({
            name: playerRecord.name || trimmedTeammate, // Fallback to teammate name if record is missing
            points: playerRecord.points || 0, // Fallback to 0 points if missing
          });
        } else {
          console.warn(`No player found with name: "${trimmedTeammate}"`);
        }
      } catch (error) {
        console.error(`Error fetching player data for "${trimmedTeammate}":`, error.message || error);
      }
    }

    console.log("Fetched players data:", players);
    setTeammatesData(players);
  };

  // Function to fetch rankings data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("Rankings").getFullList();
        console.log("Fetched Rankings data:", records);
        setData(records);
      } catch (error) {
        console.error("Error fetching data:", error.message || error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Polling every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Effect to fetch player data when rankings or team name changes
  useEffect(() => {
    if (data.length && currentTeamName) {
      console.log("Current team name:", currentTeamName);
      const currentTeam = data.find((item) => item.teamName.toLowerCase() === currentTeamName.toLowerCase());
      console.log("Found current team:", currentTeam);

      if (currentTeam && currentTeam.teammates) {
        const teammates = currentTeam.teammates.split(","); // Split teammates by comma
        console.log("Teammates found:", teammates);
        fetchPlayerData(teammates); // Fetch player data for the teammates
      } else {
        console.warn(`No teammates found for team: ${currentTeamName}`);
      }
    }
  }, [data, currentTeamName]);

  // Sort the data by teamScore to reflect rankings
  const sortedData = data.sort((a, b) => b.teamScore - a.teamScore);

  return (
    <div className="flex items-center justify-center min-h-full gap-5">
      <AuthCheck />

      {/* Center the content */}
      <div className="w-fit grid-cols-1 justify-center place-content-center space-x-4">


        {/* Podium Section */}
        <div className="bg-black bg-opacity-30 p-10 rounded-3xl h-full w-full">
          <div className="text-9xl font-bold text-center w-full md:p-5">
            <div className="flex space-x-4 items-end h-96 w-full justify-center place-content-center">
              {/* 5th Place Podium */}
              <div className="flex flex-col justify-start items-center w-28 h-1/5 rounded-md bg-zinc-900 p-2">
                <span className="text-sm font-bold">5th</span>
                <span className="w-full  text-sm">{sortedData[4]?.teamName || "?????"}</span>
                <span className="text-sm">{sortedData[4]?.teammates || "?????"}</span>
              </div>

              {/* 3rd Place Podium */}
              <div className="flex flex-col justify-start items-center w-28 h-3/5 rounded-md bg-zinc-900 p-2">
                <span className="text-sm font-bold">3rd</span>
                <span className="w-full  text-sm">{sortedData[2]?.teamName || "??????"}</span>
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
                <span className="w-full text-sm">{sortedData[3]?.teamName || "??????"}</span>
                <span className="text-sm">{sortedData[3]?.teammates || "?????"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings Table Section */}
        <div className="rounded-md border bg-neutral-950 w-full h-full">
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
              {sortedData.length ? (
                sortedData.map((item, index) => {
                  const isCurrentTeam = item.teamName.toLowerCase() === currentTeamName.toLowerCase(); // Case-insensitive check
                  return (
                    <TableRow
                      key={index}
                      className={isCurrentTeam ? "bg-blue-100 bg-opacity-30" : ""}
                    >
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
        

      </div>
    </div>
  );
}

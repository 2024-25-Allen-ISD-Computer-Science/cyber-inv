"use client";
import React, { useEffect, useState } from "react"; // Ensure useEffect and useState are imported
import AuthCheck from "./AuthCheck"; // Assuming AuthCheck is already in place
import UserInfo from "./UserInfo"; // Import the client-side component
import Playercard from "@/components/Playercard";
import pb from "@/app/api/pocketbase";

export default function Page() {
  const [teammatesData, setTeammatesData] = useState<any[]>([]); // State to store teammates data
  const [teammates, setTeammates] = useState<string[]>([]); // State to store teammates' names
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Function to fetch player data
  const fetchPlayerData = async (teammates: string[]) => {
    const players = [];

    for (const teammate of teammates) {
      const trimmedTeammate = teammate.trim(); // Clean up spaces around name
      if (!trimmedTeammate) continue; // Skip if name is empty
      console.log(`Fetching data for teammate: "${trimmedTeammate}"`);

      try {
        // Corrected filter without extra quotes
        const playerRecord = await pb.collection("player").getFirstListItem(
          `name = "${trimmedTeammate}"`,
          {
            expand: "points.subRelField", // Adjust as per your schema
          }
        );

        if (playerRecord) {
          players.push({
            name: playerRecord.name || trimmedTeammate, // Fallback to teammate name if record is missing
            points: playerRecord.points || 0, // Fallback to 0 points if missing
          });
        } else {
          console.warn(`No player found with name: "${trimmedTeammate}"`);
        }
      } catch (error) {
        console.error(
          `Error fetching player data for "${trimmedTeammate}":`,
          error.message || error
        );
      }
    }

    console.log("Fetched players data:", players);
    setTeammatesData(players);
    setLoading(false); // Stop loading when data is fetched
  };

  // Fetch the current user's teammates
  const fetchTeammates = async () => {
    try {
      const user = pb.authStore.model; // Get the current user
      if (!user) throw new Error("User not authenticated");
      
      // Assuming 'teammates' is a field in your user model with names separated by commas
      const teammates = user.teammates ? user.teammates.split(",") : [];
      setTeammates(teammates); // Set teammates' names
      fetchPlayerData(teammates); // Fetch player data
    } catch (error) {
      console.error("Error fetching teammates:", error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  useEffect(() => {
    fetchTeammates(); // Call fetchTeammates when the component mounts
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <AuthCheck />
      {/* Teammates Section */}
        {loading && <p>Loading teammates...</p>}
      <div className="flex justify-center space-x-4 mb-6">
        {teammatesData.length ? (
          teammatesData.map((player, index) => (
            <Playercard key={index} name={player.name} points={player.points} />
          ))
        ) : (
          !loading && <p>No teammates found.</p> // Only show this if not loading
        )}
      </div>
      <UserInfo /> {/* Render the user information */}

      {/* Loading Indicator */}

    </main>
  );
}



import { Team, columns } from "./Columns";
import { DataTable } from "./DataTable";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

// Ignore warning for now, data will be dynamic
const teams: Team[] = [
  {
    teamName: "Team Avocado",
    self: true,
    score: 100,
    division: "Silver"
  },
  {
    teamName: "Team Apple",
    self: false,
    score: 200,
    division: "Gold"
  },
  {
    teamName: "Team Banana",
    self: false,
    score: 300,
    division: "Platinum",
  },
  {
    teamName: "Team Cherry",
    self: false,
    score: 400,
    division: "Gold",
  },
  {
    teamName: "Team Date",
    self: false,
    score: 150,
    division: "Silver",
  },
  {
    teamName: "Team Elderberry",
    self: false,
    score: 250,
    division: "Gold",
  },
  {
    teamName: "Team Fig",
    self: false,
    score: 350,
    division: "Platinum",
  },
  {
    teamName: "Team Grape",
    self: false,
    score: 450,
    division: "Gold",
  },
  {
    teamName: "Team Huckleberry",
    self: false,
    score: 50,
    division: "Platinum",
  },
  {
    teamName: "Team Kiwi",
    self: false,
    score: 550,
    division: "Platinum",
  },
  {
    teamName: "Team Lemon",
    self: false,
    score: 75,
    division: "Silver",
  },
  {
    teamName: "Team Mango",
    self: false,
    score: 175,
    division: "Silver",
  },
  {
    teamName: "Team Nectarine",
    self: false,
    score: 275,
    division: "Gold",
  },
  {
    teamName: "Team Orange",
    self: false,
    score: 375,
    division: "Platinum",
  },
  {
    teamName: "Team Papaya",
    self: false,
    score: 475,
    division: "Gold",
  },
  {
    teamName: "Team Quince",
    self: false,
    score: 125,
    division: "Silver",
  },
  {
    teamName: "Team Raspberry",
    self: false,
    score: 225,
    division: "Gold",
  },
  {
    teamName: "Team Strawberry",
    self: false,
    score: 325,
    division: "Platinum",
  },
  {
    teamName: "Team Tangerine",
    self: false,
    score: 425,
    division: "Gold",
  },
  {
    teamName: "Team Ugli Fruit",
    self: false,
    score: 525,
    division: "Platinum",
  },
];

export default function LeaderBoard() {
  const [position, setPosition] = useState("All");
  // Make a sorted copy of the teams array which only contains the ones with the division from position
  let sortedTeams: Team[] = teams;
  let defaultPage = 0;
  if (position != "All") {
    sortedTeams = teams.filter((team) => team.division === position);
  }
  sortedTeams = sortedTeams.sort((a, b) => b.score - a.score); // Sorted highest score to lowest for finding the default page
  if (position == "All")
    sortedTeams.forEach((team, index) => {
      if (team.self) {
        defaultPage = Math.floor(index / 5);
      }
    });
  return (
    <div className="bg-background min-w-fit rounded-xl p-5">
      <div>
        <h1 className="text-4xl font-bold">
          {position === "All" ? "All Divisions" : position + " Division"}
        </h1>
      </div>
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Division</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >

              <DropdownMenuRadioItem value="Gold">Gold</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Platinum">
                Platinum
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable
        columns={columns}
        data={sortedTeams}
        defaultPage={defaultPage}
      />
    </div>
  );
}

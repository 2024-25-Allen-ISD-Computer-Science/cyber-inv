
"use client"
import { columns } from "./Columns";
import {Team} from "@/types"
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

interface team{
  teams:Team[]
}
export default function LeaderBoard({teams}:team) {
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

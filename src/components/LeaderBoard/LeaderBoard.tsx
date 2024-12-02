"use client";
import { columns } from "./Columns";
import { Team } from "@/types";
import { DataTable } from "./DataTable";
import { useState, useMemo, useEffect } from "react";
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

interface TeamProps {
  teams: Team[];
}

export default function LeaderBoard({ teams }: TeamProps) {
  const [position, setPosition] = useState("All");
  const [defaultPage, setDefaultPage] = useState(0);

  const sortedTeams = useMemo(() => {
    let filteredTeams = teams;
    if (position !== "All") {
      filteredTeams = teams.filter((team) => team.division === position);
    }
    return filteredTeams.sort((a, b) => b.score - a.score);
  }, [position, teams]);

  useEffect(() => {
    if (position === "All") {
      const selfIndex = sortedTeams.findIndex((team) => team.self);
      setDefaultPage(selfIndex >= 0 ? Math.floor(selfIndex / 5) : 0);
    } else {
      setDefaultPage(0);
    }
  }, [position, sortedTeams]);

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
              <DropdownMenuRadioItem value="Platinum">Platinum</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable columns={columns} data={sortedTeams} defaultPage={defaultPage} />
    </div>
  );
}

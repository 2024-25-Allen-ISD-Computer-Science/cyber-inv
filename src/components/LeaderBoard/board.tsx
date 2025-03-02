"use client"
import React, { useState } from 'react';
import { leaderboard } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamProps {
  teams: leaderboard[];
}

export default function Leaderboard({ teams }: TeamProps) {
  const [selectedDivision, setSelectedDivision] = useState<string>("All");
  
  // Get unique divisions for the dropdown
  const divisions = ["All", "Gold", "Platinum", "None"];
  
  // Filter teams based on selected division
  const filteredTeams = selectedDivision === "All" 
    ? teams 
    : teams.filter(team => team.Division === selectedDivision);
  
  // Sort teams by score (highest first)
  const sortedTeams = [...filteredTeams].sort((a, b) => b.Score - a.Score);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <div className="w-48">
          <Select onValueChange={setSelectedDivision} defaultValue="All">
            <SelectTrigger>
              <SelectValue placeholder="Filter by Division" />
            </SelectTrigger>
            <SelectContent>
              {divisions.map((division) => (
                <SelectItem key={division} value={division}>
                  {division} Division
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Table>
        <TableCaption>
          {selectedDivision === "All" 
            ? "All Teams Leaderboard" 
            : `${selectedDivision} Division Leaderboard`}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Rank</TableHead>
            <TableHead>Team Name</TableHead>
            <TableHead>Division</TableHead>
            <TableHead className="text-right">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTeams.length > 0 ? (
            sortedTeams.map((team, index) => (
              <TableRow key={team.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{team.TeamName}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    team.Division === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                    team.Division === 'Platinum' ? 'bg-gray-100 text-gray-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {team.Division}
                  </span>
                </TableCell>
                <TableCell className="text-right font-bold">{team.Score}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6">
                No teams found in this division
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
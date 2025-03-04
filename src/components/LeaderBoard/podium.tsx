import React from 'react';

interface PodiumTeam {
  TeamName: string;
  Score: number;
}

interface PodiumProps {
  teams: PodiumTeam[];
}

export default function TeamPodium({ teams = [] }: PodiumProps) {
  // Sort teams by score (highest first) and take top 3
  const topTeams = [...teams]
    .sort((a, b) => b.Score - a.Score)
    .slice(0, 3);
  
  // If we don't have 3 teams, add placeholders
  while (topTeams.length < 3) {
    topTeams.push({ TeamName: "---", Score: 0 });
  }

  // Rearrange for podium order: 2nd, 1st, 3rd
  const [second, first, third] = [topTeams[1], topTeams[0], topTeams[2]];

  return (
    <div className="flex items-end justify-center w-full h-full gap-4 text-white p-4">
      {/* Second place */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2">
          <div className="font-bold">{second.TeamName}</div>
          <div>{second.Score}</div>
        </div>
        <div className="w-full h-24 bg-gray-700"></div>
      </div>

      {/* First place (tallest) */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2">
          <div className="font-bold">{first.TeamName}</div>
          <div>{first.Score}</div>
        </div>
        <div className="w-full h-32 bg-gray-500"></div>
      </div>

      {/* Third place */}
      <div className="flex flex-col items-center w-1/3">
        <div className="text-center mb-2">
          <div className="font-bold">{third.TeamName}</div>
          <div>{third.Score}</div>
        </div>
        <div className="w-full h-20 bg-gray-700"></div>
      </div>
    </div>
  );
}

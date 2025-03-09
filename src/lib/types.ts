
// import { ColumnDef } from "@tanstack/react-table";
export interface leaderboard{
  Division: "Gold" | "Platinum" | "All";
  Score:number;
  TeamName:string;
  id:string;
}
export interface podium{
  Score:number;
  TeamName:string;
  id:string;
}
export type Team = {
  id: string;          // Added id field which PocketBase always returns
  username?: string; // Made optional since it might not be present in all responses
  TeamName: string;    // PocketBase field name
  self?: boolean;      // Made optional as it might be added client-side
  Score: number;       // PocketBase field name matches case
  division: "Gold" | "Platinum" | "All"; // Changed to lowercase to match your component
};
export interface User {
  username: string;
  puzzleRoundPoint: number;
  battleRoundPoint: number;
  scenarioPoint: number;
  totalPoints: number;

}

export interface Puzzle {
  puzzleName: string;
  topics: string[];
  puzzleDescription: string;
  pointValue: number;
  difficulty: 0 | 1 | 2 | 3;
  authors: string[];
  solves: number;
  linkToFiles: string;
  hints: string[];
  teamSolved: boolean;
  userSolved: boolean; // TODO: Some display for user-solved puzzles.
}

export interface round {
  roundEnd: Date;
  roundType: "puzzle" | "battle" | "scenario" | "No round ATM";
  roundDivision: "gold" | "platinum" | "none";
}
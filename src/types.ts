
// import { ColumnDef } from "@tanstack/react-table";
interface ChartDataPoint {
  minute: string;
  points: number;
}
export type Team = {
  username: string[];
  puzzleRoundPoint: number;
  battleRoundPoint: number;
  scenarioPoint: number;
  totalPoints: number;
  pointHistory: ChartDataPoint[];
  teamName: string;
  self: boolean;
  score: number;
  division: "Gold" | "Platinum";
};
export interface User {
  username: string;
  puzzleRoundPoint: number;
  battleRoundPoint: number;
  scenarioPoint: number;
  totalPoints: number;
  pointHistory: ChartDataPoint[];
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
  roundName: string;
  roundEnd: Date;
  roundType: "puzzle" | "battle" | "scenario" | "none";
  roundDivision: "gold" | "platinum" | "all";
}
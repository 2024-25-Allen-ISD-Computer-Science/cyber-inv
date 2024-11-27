
import { ColumnDef } from "@tanstack/react-table";
interface ChartDataPoint {
    minute: string;
    points: number;
}
export type Team = {
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

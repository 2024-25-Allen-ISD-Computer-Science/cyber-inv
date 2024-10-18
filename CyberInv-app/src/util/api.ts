const API_URL = "http://localhost:8080/api";

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

export interface UserInfo {
  username: string;
  combinedPoints: number;
}

let puzzles: Puzzle[] = [];

export async function getPuzzles(
  page: number = 0,
  perPage: number = 9,
): Promise<Puzzle[]> {
  if (!puzzles.length) {
    const res = await fetch(API_URL + "/puzzles");
    const data = await res.json();
    puzzles = data;
  }
  const start = page * perPage;
  return puzzles.slice(start, Math.min(puzzles.length, start + perPage));
}

export async function getUser(): Promise<UserInfo> {
  const res = await fetch(API_URL + "/user");
  const data = await res.json();
  return data;
}
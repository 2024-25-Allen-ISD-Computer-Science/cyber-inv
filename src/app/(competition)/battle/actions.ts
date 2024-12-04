'use server'
import { Puzzle } from "@/types";

const puzzles: Puzzle[] = [
  {
    puzzleName: "Enigma of Numbers",
    topics: ["Math", "Logic"],
    puzzleDescription: "Decode a sequence of numbers based on a mathematical pattern.",
    pointValue: 100,
    difficulty: 2,
    authors: ["Jane Doe", "John Smith"],
    solves: 50,
    linkToFiles: "https://example.com/puzzle1",
    hints: ["Consider Fibonacci sequences.", "Think about prime numbers."],
    teamSolved: false,
    userSolved: false,
  },
  {
    puzzleName: "Maze of Mirrors",
    topics: ["Geometry", "Spatial Reasoning"],
    puzzleDescription: "Find the shortest path in a reflective maze.",
    pointValue: 200,
    difficulty: 3,
    authors: ["Alice Wonderland"],
    solves: 30,
    linkToFiles: "https://example.com/puzzle2",
    hints: ["Symmetry is your friend.", "Trace paths from the end."],
    teamSolved: true,
    userSolved: false,
  },
  {
    puzzleName: "Cryptic Crossword",
    topics: ["Language", "Logic"],
    puzzleDescription: "Solve this challenging cryptic crossword.",
    pointValue: 150,
    difficulty: 2,
    authors: ["Clark Kent"],
    solves: 70,
    linkToFiles: "https://example.com/puzzle3",
    hints: ["Break words into smaller parts.", "Focus on double meanings."],
    teamSolved: true,
    userSolved: true,
  },  
  {
    puzzleName: "Cryptic Crossword",
    topics: ["Language", "Logic"],
    puzzleDescription: "Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.Solve this challenging cryptic crossword.",
    pointValue: 150,
    difficulty: 2,
    authors: ["Clark Kent"],
    solves: 70,
    linkToFiles: "https://example.com/puzzle3",
    hints: ["Break words into smaller parts.", "Focus on double meanings."],
    teamSolved: true,
    userSolved: true,
  }
];


export async function getPuzzles(
  page: number = 0,
  limit: number = 4
): Promise<{ puzzles: Puzzle[]; total: number }> {
  // Calculate the start and end indices for the current page
  const start = page * limit;
  const end = start + limit;

  // Return the sliced puzzles and the total number of puzzles
  return {
    puzzles: puzzles.slice(start, end),
    total: puzzles.length, // Total number of puzzles available
  };
}
export async function setBet(){
  return
}
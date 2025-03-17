'use server'
import { puzzleCard } from "@/components/Comp/Puzzle/card";
import { pb } from "@/lib/pocketbase";


export async function getPuzzle(
    page: number = 0,
    limit: number = 9
  ): Promise<{ puzzles: puzzleCard[], totalItems: number, totalPages: number }> {
    try {
      // Get the list with pagination
      const resultList = await pb.collection('puzzle').getList(page + 1, limit, {
        // Optional: Filter or sort, e.g. sort by difficulty
        // sort: 'difficulty',
        
        // Exclude the Flag field from the response
        fields: 'id,puzzleName,topics,puzzleDescription,pointValue,difficulty,linkToFiles,hints'
      });
      
      // Map the result to the puzzleCard interface
      const puzzles = resultList.items.map(item => ({
        isSolved: false, // Default value since this isn't in your PB schema
        puzzleName: item.puzzleName,
        topic: typeof item.topics === 'string' ? [item.topics] : Array.isArray(item.topics) ? item.topics : [],
        pointVal: item.pointValue,
        diff: item.difficulty as 0 | 1 | 2 | 3,
        desc: item.puzzleDescription
      }));
      
      return {
        puzzles,
        totalItems: resultList.totalItems,
        totalPages: resultList.totalPages
      };
    } catch (error) {
      console.error('Error fetching puzzles:', error);
      throw error;
    }
  }
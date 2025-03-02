// action.ts
"use server"
import { pb } from "@/lib/pocketbase"
import { leaderboard } from "@/lib/types"
import { cookies } from 'next/headers'

export async function getLeaderboard(): Promise<leaderboard[]> {
    const cookieStore = await cookies()
    const authCookie = cookieStore.get('pb_auth')
  try {
    // Load auth state from cookies if available
    
    if (authCookie) {
      pb.authStore.loadFromCookie(`pb_auth=${authCookie.value}`)
    }
    
    // Fetch the teams sorted by score in descending order
    const leaderboard = await pb.collection('Teams').getFullList<leaderboard>({
      sort: '-Score',
      fields: 'id,name,Score,TeamName,Division', // Specify only the fields you need
    });
    console.log(leaderboard)
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    // Return empty array on error instead of throwing
    return [];
  }
}
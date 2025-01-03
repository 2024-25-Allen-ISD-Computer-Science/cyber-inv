'use server';
import {round} from '@/types'

let currentRound:round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "puzzle",
    roundDivision: "all"
}
let endRoundState:round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "none",
    roundDivision: "all"
}

//sign up
//sign in

//push round
export async function pushRound(Cround:round){
    currentRound = Cround
    return currentRound
}
//end round
export async function endRound(){
    currentRound.roundType = "none"
    currentRound.roundEnd = new Date();
    currentRound.roundName = "No round ATM"
    return currentRound
}
//get round
export async function RoundInfo() {
    try {
        if (hasDatePassed(currentRound.roundEnd)) {
            console.log("Round has ended. Returning end round state.",currentRound);
            return endRoundState;
        }
        console.log("Round is ongoing. Returning current round info.",currentRound);
        return currentRound;
    } catch (error) {
        console.error("Error fetching round info:", error);
        throw new Error("Failed to fetch round info");
    }
}
// get time left in round
function hasDatePassed(date: Date): boolean {
    // Get the current date and time
    const now = new Date();

    // Compare the input date with the current date
    return date < now;
}
//get leaderboard
//push leaderboard


//get team
//get team score chart


//get puzzles
//submit puzzle
//score puzzle



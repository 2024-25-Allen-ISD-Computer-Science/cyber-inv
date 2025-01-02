'use server';
import {round} from '@/types'

let currentRound:round = {
    roundName: "battle",
    roundEnd: new Date('2025-10-01T00:00:00'),
    roundType: "none"
}
let endRoundState:round = {
    roundName: "No round ATM",
    roundEnd: new Date('0000-00-00T00:00:00'),
    roundType: "none"
}

//sign up
//sign in

//push round
export async function pushRound(round:round){
    currentRound = round
    return round
}
//end round
export async function endRound(){
    currentRound.roundType = "none"
    currentRound.roundEnd = new Date('0000-00-00T00:00:00');
    currentRound.roundName = ""
    return currentRound
}
//get round
export async function RoundInfo(){
    if (hasDatePassed(currentRound.roundEnd) == true){
        return endRoundState
    }
    return currentRound
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



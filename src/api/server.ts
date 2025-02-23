'use server';
import { round } from '@/lib/types';

let currentRound: round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "none",
    roundDivision: "all"
};

const endRoundState: round = {
    roundName: "No round ATM",
    roundEnd: new Date(),
    roundType: "none",
    roundDivision: "all"
};

// Push round
export async function pushRound(Cround: round) {
    currentRound = Cround;
    return currentRound;
}

// End round
export async function endRound() {
    currentRound = endRoundState;
    return currentRound;
}

// Get round
export async function RoundInfo() {
    try {
        if (hasDatePassed(currentRound.roundEnd)) {
            console.log("Round has ended. Returning end round state.", currentRound);
            return endRoundState;
        }
        console.log("Round is ongoing. Returning current round info.", currentRound);
        return currentRound;
    } catch (error) {
        console.error("Error fetching round info:", error);
        throw new Error("Failed to fetch round info");
    }
}

// Check if a date has passed
function hasDatePassed(date: Date): boolean {
    const now = new Date();
    return date < now;
}
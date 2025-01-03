import { pushRound } from "@/server";
import { round } from "@/types";
import { endRound } from "@/server";
export async function newRound(round:round){
    return await pushRound(round)
}

export async function EndRound(){
    return await endRound()
}
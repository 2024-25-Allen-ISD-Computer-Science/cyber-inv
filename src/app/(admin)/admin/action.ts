import { pushRound } from "@/api/server";
import { round } from "@/types";
import { endRound } from "@/api/server";
export async function newRound(round:round){
    return await pushRound(round)
}

export async function EndRound(){
    return await endRound()
}
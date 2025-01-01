'use server';
import {round} from '@/types'
import {RoundInfo} from '@/server'

export async function getRound(){
    return await RoundInfo()
}
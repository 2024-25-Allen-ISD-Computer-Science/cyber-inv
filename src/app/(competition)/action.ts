'use server';
import {round} from '@/types'
import {RoundInfo} from '@/api/server'

export async function getRound(){

        return await RoundInfo()

}
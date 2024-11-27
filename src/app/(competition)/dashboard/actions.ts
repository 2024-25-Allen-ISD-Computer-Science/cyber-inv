'use server'
import { Team,User } from "@/types";



 const userCardData: User = {
    username: 'UserName , UserName',
    puzzleRoundPoint: 100000,
    battleRoundPoint: 100,
    scenarioPoint: 10000,
    totalPoints: 100,
    pointHistory: [
        { minute: '1', points: 186 },
        { minute: '2', points: 305 },
        { minute: '3', points: 214 },
        { minute: '4', points: 237 },
        { minute: '5', points: 73 },
        { minute: '6', points: 209 },
        { minute: '7', points: 195 },
        { minute: '8', points: 250 },
        { minute: '9', points: 175 },
        { minute: '10', points: 280 },
        { minute: '11', points: 220 },
        { minute: '12', points: 305 },
        { minute: '13', points: 150 },
        { minute: '14', points: 190 },
        { minute: '15', points: 160 },

    ],
};


// Ignore warning for now, data will be dynamic
const teams: Team[] = [
    {
      teamName: "Team Avocado",
      self: true,
      score: 100,
      division: "Gold"
    },
    {
      teamName: "Team Apple",
      self: false,
      score: 200,
      division: "Gold"
    },
    {
      teamName: "Team Banana",
      self: false,
      score: 300,
      division: "Platinum",
    },
    {
      teamName: "Team Cherry",
      self: false,
      score: 400,
      division: "Gold",
    },
    {
      teamName: "Team Date",
      self: false,
      score: 150,
      division: "Gold",
    },
    {
      teamName: "Team Elderberry",
      self: false,
      score: 250,
      division: "Gold",
    },
    {
      teamName: "Team Fig",
      self: false,
      score: 350,
      division: "Platinum",
    },
    {
      teamName: "Team Grape",
      self: false,
      score: 450,
      division: "Gold",
    },
    {
      teamName: "Team Huckleberry",
      self: false,
      score: 50,
      division: "Platinum",
    },
    {
      teamName: "Team Kiwi",
      self: false,
      score: 550,
      division: "Platinum",
    },
    {
      teamName: "Team Lemon",
      self: false,
      score: 75,
      division: "Gold",
    },
    {
      teamName: "Team Mango",
      self: false,
      score: 175,
      division: "Gold",
    },
    {
      teamName: "Team Nectarine",
      self: false,
      score: 275,
      division: "Gold",
    },
    {
      teamName: "Team Orange",
      self: false,
      score: 375,
      division: "Platinum",
    },
    {
      teamName: "Team Papaya",
      self: false,
      score: 475,
      division: "Gold",
    },
    {
      teamName: "Team Quince",
      self: false,
      score: 125,
      division: "Gold",
    },
    {
      teamName: "Team Raspberry",
      self: false,
      score: 225,
      division: "Gold",
    },
    {
      teamName: "Team Strawberry",
      self: false,
      score: 325,
      division: "Platinum",
    },
    {
      teamName: "Team Tangerine",
      self: false,
      score: 425,
      division: "Gold",
    },
    {
      teamName: "Team Ugli Fruit",
      self: false,
      score: 525,
      division: "Platinum",
    },
  ];



export async function playerGraph():Promise<User>{
    return(userCardData);
}
export async function leaderboard():Promise<Team[]>{
    return(teams);
}
import Team from '@/components/Home/Team';
import { NextApiRequest, NextApiResponse } from 'next';

export type Team = {
  teamName: string;
  self: boolean;
  score: number;
  division: string;
};

const teams: Team[] = [
  { teamName: "Team Avocado", self: false, score: 100, division: "Gold" },
  { teamName: "Team Apple", self: false, score: 200, division: "Gold" },
  { teamName: "Team Banana", self: false, score: 300, division: "Platinum" },
  { teamName: "Team Cherry", self: false, score: 400, division: "Gold" },
  { teamName: "Team Date", self: false, score: 150, division: "Gold" },
  { teamName: "Team Elderberry", self: false, score: 250, division: "Gold" },
  { teamName: "Team Fig", self: false, score: 350, division: "Platinum" },
  { teamName: "Team Grape", self: false, score: 450, division: "Gold" },
  { teamName: "Team Huckleberry", self: false, score: 50, division: "Platinum" },
  { teamName: "Team Kiwi", self: false, score: 550, division: "Platinum" },
  { teamName: "Team Lemon", self: false, score: 75, division: "Gold" },
  { teamName: "Team Mango", self: false, score: 175, division: "Gold" },
  { teamName: "Team Nectarine", self: false, score: 275, division: "Gold" },
  { teamName: "Team Orange", self: false, score: 375, division: "Platinum" },
  { teamName: "Team Papaya", self: false, score: 475, division: "Gold" },
  { teamName: "Team Quince", self: false, score: 125, division: "Gold" },
  { teamName: "Team Raspberry", self: false, score: 225, division: "Gold" },
  { teamName: "Team Strawberry", self: false, score: 325, division: "Platinum" },
  { teamName: "Team Tangerine", self: false, score: 425, division: "Gold" },
  { teamName: "Team Ugli Fruit", self: false, score: 525, division: "Platinum" },
];

export default function getLeaderboard(req: NextApiRequest, res: NextApiResponse<Team[]>) {
  return teams;
}

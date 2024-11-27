import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { UserCard } from "@/components/ScoreCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {User,Team} from "@/types"
import {playerGraph, leaderboard} from "./actions"


const userCardData: User = await playerGraph()
const rankings:Team[] = await leaderboard()

export default function Dashboard() {

  return (
    <main className="min-h-full min-w-full max-h-full max-w-full flex flex-col">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-3 mb-10">
        <Card className="shadow">
          <CardHeader>
          <div className="grid grid-cols-1 gap-5">
              <UserCard data={userCardData} />
            </div>
          </CardHeader>
          <hr />
          <CardContent className="p-3">
          <CardHeader>
            <CardTitle>Leader Board</CardTitle>
          </CardHeader>
          <hr />
          <CardContent >
            <LeaderBoard 
            teams={rankings}
            />
          </CardContent>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
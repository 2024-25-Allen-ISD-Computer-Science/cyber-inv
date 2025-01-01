import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { UserCard } from "@/components/ScoreCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {User,Team} from "@/types"
import {playerGraph, leaderboard} from "./actions"


const userCardData: User = await playerGraph()
const rankings:Team[] = await leaderboard()

export default function Dashboard() {

  return (
    <main className="w-full h-full flex place-content-center justify-center">
      <div className="mx-auto w-full max-w-screen-2xl flex flex-col ">
        <Card className="shadow">
          <CardHeader>
          <div className="grid grid-cols-1 ">
              <UserCard data={userCardData} />
            </div>
          </CardHeader>
          <hr />
          <CardContent className="">

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
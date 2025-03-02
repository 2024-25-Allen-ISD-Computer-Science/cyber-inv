
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {User,leaderboard} from "@/lib/types"
import { getLeaderboard } from "./action";
import { Suspense } from "react";
import Skel from "@/components/LeaderBoard/Skel"
import Leaderboard from "@/components/LeaderBoard/board";
// const userCardData: User = await playerGraph()
async function LeaderboardContainer() {
    const rankings = await getLeaderboard();
    
    return <Leaderboard teams={rankings} />;
  }
  
export default function Dashboard() {

  return (
    <main className="w-full h-full flex place-content-center justify-center">
      <div className="mx-auto w-full max-w-screen-2xl flex flex-col ">
        <Card className="">
          <CardHeader>

          </CardHeader>

          <CardContent className="">

          <CardContent >
            
          <Suspense fallback={<Skel />}>
                <LeaderboardContainer />
              </Suspense>
          </CardContent>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
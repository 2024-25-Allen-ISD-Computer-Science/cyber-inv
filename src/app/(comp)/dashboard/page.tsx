
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {User,leaderboard} from "@/lib/types"
import { getLeaderboard,getPodium } from "./action";
import { Suspense } from "react";
import Skel from "@/components/LeaderBoard/Skel"
import Leaderboard from "@/components/LeaderBoard/board";
import TeamPodium from "@/components/LeaderBoard/podium";
// const userCardData: User = await playerGraph()
async function LeaderboardContainer() {
    const rankings = await getLeaderboard();
    
    return <Leaderboard teams={rankings} />;
  }


  async function PodiumContainer() {
    const rankings = await getPodium();
    
    return <TeamPodium teams={rankings} />;
  }
  
  
export default function Dashboard() {

  return (
    <main className="w-full h-full flex place-content-center justify-center">
      <div className="mx-auto w-full max-w-screen-2xl flex flex-col ">
        <Card className="">
          <CardHeader>
          <Suspense fallback={<Skel />}>
                <PodiumContainer />
              </Suspense>
          </CardHeader>
          <hr />
          <CardContent className="">

          <CardContent className="p-2" >
            
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
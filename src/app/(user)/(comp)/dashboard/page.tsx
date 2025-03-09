
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {User,leaderboard} from "@/lib/types"
import { getLeaderboard,getPodium } from "./action";
import { Suspense } from "react";
import Skel from "@/components/LeaderBoard/Skel"
import Leaderboard from "@/components/LeaderBoard/board";
import TeamPodium from "@/components/LeaderBoard/podium";
import TeamPodiumSkeleton from "@/components/LeaderBoard/PodiumSkel";
import Navbar from "@/components/Comp/Navbar";
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
    <main className="w-full flex-grow flex place-content-center justify-center p-4">
    <div className="mx-auto w-full max-w-screen-2xl flex flex-col">
      <Card className="">
        <CardHeader>
          <Suspense fallback={<TeamPodiumSkeleton />}>
            <PodiumContainer />
          </Suspense>
        </CardHeader>
        <hr />
        <CardContent className="p-2">
          <Suspense fallback={<Skel />}>
            <LeaderboardContainer />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  </main>
  );
}
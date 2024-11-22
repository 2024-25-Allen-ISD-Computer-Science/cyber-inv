import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { UserCard } from "@/components/ScoreCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchUserCardData, User  } from "@/api/player";

const dataChart:User = fetchUserCardData()
export default function Dashboard() {

  return (
    <main className="min-h-full min-w-full max-h-full max-w-full flex flex-col">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-3 mb-10">
        <Card className="shadow">
          <CardHeader>
          <div className="grid grid-cols-1 gap-5">
              <UserCard data={dataChart} />
            </div>
          </CardHeader>
          <hr />
          <CardContent className="p-3">
          <CardHeader>
            <CardTitle>Leader Board</CardTitle>
          </CardHeader>
          <hr />
          <CardContent >
            <LeaderBoard />
          </CardContent>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { User, UserCard } from "@/components/UserCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const userCardData: User = {
  username: "UserName",
  puzzleRoundPoint: 10,
  battleRoundPoint: 10,
  scenarioPoint: 10,
  chartData: [
    { minute: "1", points: 186 },
    { minute: "2", points: 305 },
    { minute: "3", points: 214 },
    { minute: "4", points: 237 },
    { minute: "5", points: 73 },
    { minute: "6", points: 209 },
  ],
};

export default function Dashboard() {
  return (
    <main className="min-h-full min-w-full max-h-full max-w-full flex flex-col">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-3 mb-10">
        <Card className="shadow">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <hr />
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-5">
              <UserCard data={userCardData} />
              <UserCard data={userCardData} />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow">
          <CardHeader>
            <CardTitle>Leader Board</CardTitle>
          </CardHeader>
          <hr />
          <CardContent >
            <LeaderBoard />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

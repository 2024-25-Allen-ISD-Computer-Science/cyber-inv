import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { User, UserCard } from "@/components/UserCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import pb from "@/api/pocketbase";
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
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  return (
    <main className="min-h-full min-w-full max-h-full max-w-full flex flex-col">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-3 mb-10">
        <Card className="shadow">
          <CardHeader>
          <div className="grid grid-cols-2 gap-5">
              <UserCard data={userCardData} />
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
            <LeaderBoard />
          </CardContent>
          </CardContent>
        </Card>


      </div>
    </main>
  );
}

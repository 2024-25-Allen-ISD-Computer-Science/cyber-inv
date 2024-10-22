import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import Submission from "@/components/ScoreTab/Submission";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import pb from "@/api/pocketbase";
export default function Overview() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  return (
    <main className="px-96 py-12 inline-flex justify-center w-full">
      <div className="w-[70%]">
        <LeaderBoard />
      </div>
      <div className="w-[30%]">
        <Submission />
      </div>
    </main>
  );
}

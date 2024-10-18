import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import Submission from "@/components/ScoreTab/Submission";
export default function Overview() {
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

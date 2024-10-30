import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pb from "@/api/pocketbase"; // Import PocketBase
import Countdown from "react-countdown";
import FAQ from "@/components/FAQ";

export default function Tmp() {

  const targetDate = new Date('2025-03-15T00:00:00');

  interface CountdownRendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed?: boolean;
  }

  const renderer = ({ days, hours, minutes, seconds }: CountdownRendererProps) => {
    return (
      <div className="flex flex-row gap-5">
        {/* Countdown display */}
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="text-7xl p-4 rounded-md animate-pulse">
              {String(days).padStart(2, '0')}
            </div>
          </div>
          Days
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="text-7xl p-4 rounded-md animate-pulse">
              {String(hours).padStart(2, '0')}
            </div>
          </div>
          Hours
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="text-7xl p-4 rounded-md animate-pulse">
              {String(minutes).padStart(2, '0')}
            </div>
          </div>
          Minutes
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="text-7xl p-4 rounded-md animate-pulse">
              {String(seconds).padStart(2, '0')}
            </div>
          </div>
          Seconds
        </div>
      </div>
    );
  };

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  return (
    <main className="w-full h-full flex justify-center">
      <div className="rounded-3xl p-5 w-full max-w-4xl h-fit shadow-2xl">
        <div className="text-6xl text-center mb-5 font-bold tracking-wide">
          Preparation
        </div>
        {/* Countdown Timer */}
        <div className="flex justify-center text-center p-8">
          <Countdown date={targetDate} renderer={renderer} />
        </div>

        {/* Grid for Questions */}
        <div className="w-full grid grid-cols-1 gap-5 place-items-center">
          <div className="text-center text-xl font-semibold mt-2">
            So what now?
          </div>
          
          <FAQ/>

          <div className="flex justify-center space-x-20 mt-8 mb-8">
            {/* First Video Embed */}
            <div className="w-full max-w-lg">
              <div
                className="relative overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/videoseries?si=ARhkE1QeX9MPoRHl&amp;list=PLzVrhECG8ZbJJ0O5-AD8YCUbhv3ij2lC_"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="text-center font-semibold mt-2">
                Hey, Check out this playlist to get you ahead for the competition.
              </div>
            </div>

            {/* Second Video Embed */}
            <div className="w-full max-w-lg">
              <div
                className="relative overflow-hidden"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/wjbbl0TTMeo?si=G41n8Ph3MEMJKuF2"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="text-center font-semibold mt-2">
                Hey, Check out this video to set up your laptop.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

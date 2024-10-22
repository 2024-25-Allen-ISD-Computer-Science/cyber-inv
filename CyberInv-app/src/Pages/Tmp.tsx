import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import pb from "@/api/pocketbase"; // Import PocketBase

export default function Tmp() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="bg-neutral-800 rounded-3xl p-5 w-full max-w-4xl h-fit">
        <div className="text-3xl text-center text-white mb-5">
          Preparation
        </div>
        <div className="w-full grid grid-cols-1 gap-5 place-items-center">
          <div>
            <iframe
              width="full"
              height="full"
              src="https://www.youtube.com/embed/videoseries?si=ARhkE1QeX9MPoRHl&amp;list=PLzVrhECG8ZbJJ0O5-AD8YCUbhv3ij2lC_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div>
            <iframe
              width="full"
              height="full"
              src="https://www.youtube.com/embed/wjbbl0TTMeo?si=G41n8Ph3MEMJKuF2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

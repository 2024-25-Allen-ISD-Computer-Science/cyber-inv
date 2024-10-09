"use client"; // This makes the component a client-side component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import Image from "next/image";
import pb from "@/app/api/pocketbase";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    if (!pb.authStore.isValid) {
      // Redirect to login if not authenticated
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="w-full h-full flex items-center justify-center mt-auto">
      <div className="rounded-2xl w-2/3 h-1/3 md:p-5">
        <div className="grid grid-cols-1 gap-4 place-items-center ">
          <Image src="/favicon.ico" width={300} height={300} alt="ico" />
          <div className="text-3xl font-bold text-center max-w-lg">
            You have been placed in a queue. Once your application has been
            approved, you may form a team or remain solo.
          </div>
        </div>
      </div>
    </main>
  );
}

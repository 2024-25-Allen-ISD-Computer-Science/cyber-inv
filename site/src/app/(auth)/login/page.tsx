"use client"; // Ensure this is a client-side component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import pb from "@/app/api/pocketbase";
import dynamic from "next/dynamic";

// Dynamically import the LoginForm component
const LoginForm = dynamic(() => import("./Login"), { ssr: false });

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already authenticated
    if (pb.authStore.isValid) {
      // Redirect to the dashboard queue if authenticated
      router.push("/dashboard/user");
    }
  }, [router]);

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}

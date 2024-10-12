// AuthCheck.js
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter in App Router
import pb from "@/app/api/pocketbase";

export default function AuthCheck() {
  const router = useRouter();

  useEffect(() => {
    // Directly check if the user is authenticated
    if (!pb.authStore.isValid) {
      // Redirect to login if not authenticated
      router.push("/login");
    }
  }, [router]); // Dependency array to avoid multiple calls

  return null; // Prevent rendering the component itself
}

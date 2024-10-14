"use client"; // Marks this file as a client-side component

import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for Next.js 13
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import pb from "@/app/api/pocketbase"; // Ensure PocketBase is properly initialized

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(null); // Clear previous errors
  
    try {
      // PocketBase authentication call
      const authData = await pb.collection("player").authWithPassword(email, password);
      
      // Check if authStore.model is available
      if (pb.authStore.model) {
        console.log("Logged in successfully");
        console.log("Token:", pb.authStore.token);
        console.log("User ID:", pb.authStore.model.id); // Access id safely
      } else {
        console.log("Login successful, but no user data found.");
      }
  
      // Redirect to /dashboard/queue after successful login
      router.push("/dashboard/user");
  
    } catch (err: any) {
      // Handle error during login
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Card className="w-full h-auto drop-shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
      </CardHeader>

      <form className="w-full h-full space-y-4 px-4 py-2" onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email Address / Username</Label>
            <Input
              id="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Capture input
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Capture input
              required
            />
          </div>

          {/* Display error message if login fails */}
          {error && <div className="text-red-500">{error}</div>}
        </CardContent>

        <CardFooter className="w-full flex justify-end gap-4">
          <Button type="submit" className="bg-green-300">{">"}</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

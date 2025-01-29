// page.tsx
"use client";
import { useState } from "react";
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
import { loginUser } from '@/api/Auth'; // Import the login function

export default function LoginPage() {
  // State management for email, password, and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error
    setError("");

    try {
      // Call the server-side login function
      const result = await loginUser(email, password);

      if (result.success) {
        // If login is successful, log the user data and redirect
        console.log("Login successful:", result.user);
        alert("Login successful!");

        // Redirect to another page (e.g., dashboard)
        window.location.href = "/Temp"; // Replace with your desired route
      } else {
        // If login fails, display an error message
        setError(result.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="w-full h-full flex justify-center items-center">
      <Card className="w-fit h-fit drop-shadow-2xl p-2">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
        </CardHeader>

        <form className="w-full h-full space-y-4 px-4 py-2" onSubmit={handleLogin}>
          <CardContent className="space-y-2">
            <div>
              <Label htmlFor="email">Email Address</Label>
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
            <Button type="submit" className="bg-green-300">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
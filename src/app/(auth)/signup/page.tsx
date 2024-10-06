import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Grade from "@/components/Grade";
export default function LoginForm() {

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Card for the form */}
        <Card className="w-full h-auto drop-shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Sign up</CardTitle>
          </CardHeader>

          {/* Form starts here */}
          <form className="w-full h-full bg-transparent  space-y-4 px-4 py-2">
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="name">First and last name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div>
                <Label htmlFor="gammerTag">Screen Name</Label>
                <Input
                  id="gammerTag"
                  placeholder="Enter your Screen Name"
                  required
                />
              </div>

              <div className="gird-cols-1 gap-y-3">
                <div>
                  <Label htmlFor="Grade Level">Grade Level</Label>
                </div>
                <Grade/>
              </div>

              <div>
                <Label htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </CardContent>

            {/* Footer with a submit button */}
            <CardFooter className="w-full flex justify-end gap-4">
              <Button type="submit">Sign Up</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LoginForm() {
  const [position, setPosition] = React.useState("7th");

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Card for the form */}
        <Card className="w-full h-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Sign up</CardTitle>
          </CardHeader>

          {/* Form starts here */}
          <form className="w-full h-full bg-transparent backdrop-blur-xl space-y-4 px-4 py-2">
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{position}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Grade Level</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      <DropdownMenuRadioItem value="7th">
                        7th
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="8th">
                        8th
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="9th">
                        9th
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="10th">
                        10th
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="11th">
                        11th
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="12th">
                        12th
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
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

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

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Card for the form */}
        <Card className="w-full h-auto drop-shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
          </CardHeader>

          {/* Form starts here */}
          <form className="w-full h-full  space-y-4 px-4 py-2">
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address / Username</Label>
                <Input
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
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

      
            </CardContent>

            {/* Footer with a submit button */}
            <CardFooter className="w-full flex justify-end gap-4">
              <Button type="submit" className="bg-green-300">{">"}</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define the shape of the time left object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export default function HomeBar() {
  // Calculate time left until March 12, 2025
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("March 12, 2025 00:00:00").getTime(); // Target date in milliseconds
    const now = new Date().getTime(); // Current time in milliseconds
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10), // Two-digit milliseconds
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    // Set the component as mounted to avoid SSR hydration issues
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100); // 100ms for smoother milliseconds countdown

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    // Prevent rendering countdown during server-side rendering to avoid mismatch
    return null;
  }

  return (
    <div className="w-full sm:w-full h-fit fixed mt-1 top-0 z-50 flex justify-center bg-transparent">
      <div className="backdrop-blur-3xl rounded-3xl w-fit grid grid-cols-3 gap-5 items-center p-2">
        {/* Left Section (Logo) */}
        <div className="flex p-0 w-full grow justify-center items-center">
          <Image src="/favicon.ico" height={70} width={70} alt="favicon" />
        </div>

        {/* Middle Section (Timer) */}
        <div className="text-xs sm:text-sm lg:text-xl text-white font-bold text-center flex justify-center items-center">
          <Link
            href="/"
            className="flex grow gap-x-0.5 sm:gap-x-1 lg:gap-x-2 lg:text-xl align-text-bottom"
          >
            <div>{String(timeLeft.days).padStart(2, "0")}</div>:
            <div>{String(timeLeft.hours).padStart(2, "0")}</div>:
            <div>{String(timeLeft.minutes).padStart(2, "0")}</div>:
            <div>{String(timeLeft.seconds).padStart(2, "0")}</div>:
            <div>{String(timeLeft.milliseconds).padStart(2, "0")}</div>
          </Link>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex justify-center items-center gap-x-1">
          <Button
            variant="link"
            className="bg-indigo-900 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            asChild
          >
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button
            variant="link"
            className="bg-purple-400 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            asChild
          >
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { UserIcon, CurrencyDollarIcon, ChartBarIcon, PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { Button } from '@/components/ui/button';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { IoExit } from "react-icons/io5";
import { pb } from '@/lib/pocketbase';
import { redirect } from 'next/navigation'// Logout handler
import { usePathname } from "next/navigation"


export function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  const pathname = usePathname() // Get current path safely

  return (
    <Button variant={pathname === to ? "outline" : "ghost"}>
      <Link href={to} className="inline-flex gap-1">
        {children}
      </Link>
    </Button>
  )
}
const handleLogout = async () => {
  pb.authStore.clear(); // Clear PocketBase auth store
  redirect('/login'); // Use router.push instead of redirect
};
// Completionist Component for Countdown End
const Completionist: React.FC = () => <span className="line-clamp-1">No round atm</span>;

// Helper to format time in 00:00:00 format
const formatTime = (time: number): string => String(time).padStart(2, '0');

// Renderer callback with condition for 00:00:00 format
const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </span>
    );
  }
};

export interface NavItemProps {
  roundTime:Date;
  points:number;
  username:string;
  currentRound:"Puzzle Round"|"Battle Round"|"Scenario Round"|"None ATM"
}



export default function Navbar({roundTime,points,username,currentRound}:NavItemProps) {


  const [roundActive, setRoundActive] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0); // Store remaining time


  return (
    <div className="flex flex-row w-full justify-center items-center p-3"> {/* Ensures centering */}
      <div className="flex flex-row gap-3 max-w-screen-xl w-full justify-center"> {/* Centers the inner content */}

        {/* User Info */}
        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 px-3 shadow">
          <div className="flex flex-row">
            <UserIcon className="size-6" />
            {username}
            {/* {userCardData.username || 'Guest'} */}
          </div>
          <div className="flex flex-row">
            <CurrencyDollarIcon className="size-6" />
            {points}
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex flex-row items-center border rounded-md shadow min-w-36">
          <div className="w-full text-center font-bold text-lg">
            {roundActive ? (

              <Countdown
                date={roundTime} // Use the timer state
                renderer={renderer}       // Countdown renderer
              />
            ) : (
              <span>{currentRound}</span>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row justify-between border rounded-md items-center gap-1.5 p-1.5 shadow">
          <div className="flex flex-row gap-1.5">
            <NavItem to="/Dashboard">
              <ChartBarIcon className="size-6" />
              Dashboard
            </NavItem>
            <NavItem to="/puzzle">
              <PuzzlePieceIcon className="size-6" />
              Puzzle Round
            </NavItem>
            <NavItem to="#">
              <ShieldExclamationIcon className="size-6" />
              Battle Round
            </NavItem>
            <NavItem to="/scenario">
              <ServerStackIcon className="size-6" />
              Scenario Round
            </NavItem>
          </div>
        </div>


        {/* Logout Button */}
        <div className="flex flex-row justify-between border rounded-md items-center gap-1.5 p-1.5 shadow">
          <div className="flex flex-row gap-1.5">
            <Button variant="destructive" onClick={handleLogout}>
              <IoExit className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
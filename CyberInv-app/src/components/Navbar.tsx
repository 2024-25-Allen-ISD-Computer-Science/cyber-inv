import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { UserIcon, CurrencyDollarIcon, ChartBarIcon, PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import React from 'react';
import Countdown from 'react-countdown';
import { IoExit } from "react-icons/io5";
import PocketBase from "pocketbase";  // Import PocketBase

export default function NavBar() {
  const pb = new PocketBase('http://127.0.0.1:8090'); // Initialize PocketBase instance (replace with your actual endpoint)
  
  // Logout handler
  const handleLogout = () => {
    pb.authStore.clear(); // Clear any saved user sessions
    window.location.href = '/login'; // Redirect to login page or wherever you want after logout
  };

  const Completionist = () => <span className="line-clamp-1">No round atm</span>;

  // Helper to format time in 00:00:00 format
  const formatTime = (time: number) => String(time).padStart(2, '0');

  // Renderer callback with condition for 00:00:00 format
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          {formatTime(days)}:{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </span>
      );
    }
  };

  return (
    <div className="flex flex-row w-full justify-center items-center p-3">
      <div className="flex flex-row gap-3 max-w-screen-xl w-full">
        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 px-3 shadow">
          <div className="flex flex-row">
            <UserIcon className="size-6" />
            Username
          </div>
          <div className="flex flex-row">
            <CurrencyDollarIcon className="size-6" />
            <p className="font-bold">100</p>
            /
            <p className="font-bold">100</p>

          </div>
        </div>
        <div className="grow flex flex-row justify-between border rounded-md items-center gap-1.5 p-1.5 shadow">
          <div className="pl-5 font-bold text-lg">
            <Countdown
              date={Date.now() + 10000} // 10 second countdown for example
              renderer={renderer}       // No need for precision, just seconds
            />
          </div>

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

        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
          <ModeToggle />
        </div>
        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
          <Button asChild variant="destructive" onClick={handleLogout}>
            <IoExit className="w-14 h-14" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  const location = useLocation();

  return (
    <Button variant={location.pathname === to ? "outline" : "ghost"}>
      <Link to={to} className="inline-flex gap-1">
        {children}
      </Link>
    </Button>
  );
}

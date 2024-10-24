import React, { ReactNode } from 'react';
import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { UserIcon, CurrencyDollarIcon, ChartBarIcon, PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { IoExit } from "react-icons/io5";
import pb from "@/api/pocketbase";

// Logout handler
const handleLogout = () => {
  pb.authStore.clear(); // Clear any saved user sessions
  window.location.href = '/login'; // Redirect to login page or wherever you want after logout
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

interface NavItemProps {
  to: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const location = useLocation();

  return (
    <Button variant={location.pathname === to ? "outline" : "ghost"}>
      <Link to={to} className="inline-flex gap-1">
        {children}
      </Link>
    </Button>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center p-3"> {/* Ensures centering */}
      <div className="flex flex-row gap-3 max-w-screen-xl w-full justify-center"> {/* Centers the inner content */}

        {/* User Info */}
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

        {/* Countdown Timer */}
        <div className="flex flex-row items-center border rounded-md shadow min-w-36">
          <div className="w-full text-center font-bold text-lg">
            <Countdown
              date={Date.now() + 10000} // 10 second countdown for example
              renderer={renderer}       // No need for precision, just seconds
            />
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

        {/* Mode Toggle */}
        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
          <ModeToggle />
        </div>

        {/* Logout Button */}
        <div className="flex flex-row items-center gap-1.5 border rounded-md p-1.5 shadow">
          <Button asChild variant="destructive" onClick={handleLogout}>
            <IoExit className="w-14 h-14" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

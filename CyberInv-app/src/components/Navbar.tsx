import { ModeToggle } from "@/components/mode-toggle";
import { Link, useLocation } from "react-router-dom";
import { UserIcon, CurrencyDollarIcon, ChartBarIcon, PuzzlePieceIcon, ShieldExclamationIcon, ServerStackIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import { ReactNode } from "react";

export default function NavBar() {
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
          </div>
        </div>

        <div className="grow flex flex-row justify-center border rounded-md items-center gap-1.5 p-1.5 shadow">
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

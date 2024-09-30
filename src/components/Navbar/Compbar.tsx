import { MdSpaceDashboard } from "react-icons/md";
import { RiPuzzle2Fill } from "react-icons/ri";
import { IoShieldHalfOutline } from "react-icons/io5";
import { GiRetroController } from "react-icons/gi";
import { Button } from "../ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/Toggle";
export default function Compbar() {
  return (
    <div className="h-full w-fit ml-2 border-r-2 border-accent-foreground">
      <div className="flex-col gap-5 h-full flex justify-center place-content-center">
        <Link href={"#"}>
          <MdSpaceDashboard className="size-7  fill-primary hover:fill-muted" />
        </Link>
        <Link href={"#"}>
          <RiPuzzle2Fill className="size-7  fill-primary hover:fill-muted" />
        </Link>
        <Link href={"#"}>
          <IoShieldHalfOutline className="size-7  fill-primary hover:fill-muted" />
        </Link>
        <Link href={"#"}>
          <GiRetroController className="size-7  fill-primary hover:fill-muted" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

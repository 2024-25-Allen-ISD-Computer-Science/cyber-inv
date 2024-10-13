"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { MdExitToApp } from "react-icons/md";
import pb from "@/app/api/pocketbase"; // Importing PocketBase
import { MdSpaceDashboard } from "react-icons/md";
import { IoExtensionPuzzle } from "react-icons/io5";
import { GiBattleAxe } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { FaUserAlt } from "react-icons/fa";
export default function QueueBar() {
  const handleExitClick = () => {
    // Clear PocketBase session
    pb.authStore.clear();
    // console.log("PocketBase session cleared.");
  };

  return (
    <div className="w-full h-fit p-2 flex items-center flex-row sticky">
      {/* Logo and Text */}
      <div className="flex items-center space-x-4 w-full justify-start">
        <Image src="/favicon.ico" width={60} height={60} alt="ico" />
        <div className="text-xl text-white underline">
          Allen Cyber Invitational
        </div>
      </div>
      <div className="w-full flex justify-center text-3xl">00:00:00:00</div>
      {/* Exit Button */}
      <div className="w-full flex justify-end">
        <div className="inline-flex gap-x-2 align-middle px-2">
            <Button variant={"outline"}>
          <Link href={"/dashboard/users"}>
              <FaUserAlt className="w-8 h-8" />
          </Link>
            </Button>
            <Button variant={"outline"} asChild>
          <Link href={"/dashboard/stats"}>
              <MdSpaceDashboard className="w-8 h-8" />
          </Link>
            </Button>

          <Separator orientation="vertical" />
            <Button variant={"outline"} asChild>
          <Link href={"/dashboard/puzzle"}>
              <IoExtensionPuzzle className="w-8 h-8" />
          </Link>
            </Button>
          <Button variant={"outline"} asChild>
          <Link href={"#"}>

            <GiBattleAxe className="w-8 h-8" />
            </Link>
          </Button>
          <Separator orientation="vertical" />

          <Button variant={"outline"} asChild>
          <Link href={"#"}>

            <IoGameController className="w-8 h-8" />
            </Link>
          </Button>
        </div>
        <Link href={"/"}>
          <Button variant="destructive" asChild onClick={handleExitClick}>
            <div className="flex items-center space-x-2">
              <MdExitToApp className="w-6 h-6 fill-white" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}

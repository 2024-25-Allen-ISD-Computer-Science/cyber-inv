import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { MdExitToApp } from "react-icons/md";
import pb from "@/app/api/pocketbase"; // Importing PocketBase

export default function QueueBar() {
  const handleExitClick = () => {
    // Clear PocketBase session
    pb.authStore.clear(); 
    // console.log("PocketBase session cleared.");
  };

  return (
    <div className="w-full h-fit p-5 bg-neutral-900 flex items-center justify-between">
      {/* Logo and Text */}
      <div className="flex items-center space-x-4">
        <Image src="/favicon.ico" width={50} height={50} alt="ico" />
        <div className="text-2xl text-white">Allen Cyber Invitational</div>
      </div>

      {/* Exit Button */}
      <Link href={"/"}>
        <Button variant="destructive" asChild onClick={handleExitClick}>
          <div className="flex items-center space-x-2">
            <MdExitToApp className="w-6 h-6 fill-white" />
          </div>
        </Button>
      </Link>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeBar() {
  return (
<div className="w-fit sm:w-full h-fit fixed mt-1 top-0 z-50 flex justify-center bg-transparent">
<div className="backdrop-blur-3xl rounded-3xl w-fit grid grid-cols-3 gap-5 items-center p-2">
        {/* Left Section (Logo) */}
        <div className="flex justify-center items-center">
          <Image src="/favicon.ico" height={60} width={60} alt="favicon" />
        </div>

        {/* Middle Section (Timer) */}
        <div className="text-xs sm:text-sm lg:text-xl text-white font-bold text-center flex justify-center items-center">
          <Link
            href={"/"}
            className="flex gap-x-0.5 sm:gap-x-1 lg:gap-x-2 text-xs sm:text-sm lg:text-xl align-text-bottom"
          >
            <div>00</div>:<div>00</div>:<div>00</div>:<div>00</div>:
            <div>00</div>
          </Link>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex justify-center items-center gap-x-1">
          <Button
            variant="link"
            className="bg-indigo-900 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            asChild
          >
            <Link href={"/signup"}>Sign up</Link>
          </Button>
          <Button
            variant="link"
            className="bg-purple-400 text-white px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm"
            asChild
          >
            <Link href={"/login"}>Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

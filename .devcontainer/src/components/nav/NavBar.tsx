import Image from "next/image";
import Link from "next/link";
import ico from "~/ico.svg";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
    DrawerPortal,
} from "@/components/ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";

export function NavBar() {
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:block sticky top-0 z-50 bg-black/20 backdrop-blur-md">
                <div className="flex items-center justify-between px-8 py-4">
                    {/* Logo and Links */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={ico}
                                width={64}
                                height={64}
                                alt="Eagle Logo"
                                className="size-16 rounded-lg"
                            />
                        </Link>
                        <div className="ml-4 flex space-x-6">
                            <Link href="/#Home" className="text-lg font-medium">
                                Home
                            </Link>
                            <Link href="/#sponsors" className="text-lg font-medium">
                                Sponsors
                            </Link>
                            <Link href="/#faq" className="text-lg font-medium">
                                FAQ
                            </Link>
                            <Link href="/#meet-the-team" className="text-lg font-medium">
                                Meet the Team
                            </Link>
                            <Link href="/#last-year" className="text-lg font-medium">
                                Last Year
                            </Link>
                        </div>
                    </div>

                    {/* Optional Sign-Up/Login Buttons */}
                    {/* Uncomment if needed */}
                    {/* <div className="flex space-x-4">
            <Button variant="outline" className="bg-pink-500 hover:bg-pink-600">
              Sign Up
            </Button>
            <Button variant="outline" className="bg-blue-500 hover:bg-blue-400">
              Login
            </Button>
          </div> */}
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="block md:hidden top-0 z-50 bg-black/50 backdrop-blur-md">
                <div className="flex items-center justify-between px-8 py-4">
                    {/* Hamburger Menu */}
                    <Drawer direction="left" >
                        <DrawerTrigger
                            className="flex items-center justify-center h-10 w-10 rounded-full text-white hover:bg-gray-800"
                            aria-label="Open Menu"
                        >
                            <GiHamburgerMenu size={24} />
                        </DrawerTrigger>
                        <DrawerPortal>
                            <DrawerContent
                                className=" h-screen w-[75vw] bg-black text-white flex flex-col overflow-y-auto shadow-lg"
                                style={{
                                    "--initial-transform": "translateX(-100%)",
                                } as React.CSSProperties}
                            >
                                <div className="flex flex-col h-full">
                                    {/* Close Button */}
                                    <div className="p-4 flex justify-end">
                                        <DrawerClose
                                            className="text-xl text-white"
                                            aria-label="Close Menu"
                                        >
                                            ✕
                                        </DrawerClose>
                                    </div>

                                    {/* Drawer Links */}
                                    <div className="flex flex-col gap-6 p-8">
                                        <Link href="/#Home" className="text-lg font-medium">
                                            Home
                                        </Link>
                                        <Link href="/#sponsors" className="text-lg font-medium">
                                            Sponsors
                                        </Link>
                                        <Link href="/#faq" className="text-lg font-medium">
                                            FAQ
                                        </Link>
                                        <Link href="/#meet-the-team" className="text-lg font-medium">
                                            Meet the Team
                                        </Link>
                                        <Link href="/#last-year" className="text-lg font-medium">
                                            Last Year
                                        </Link>
                                    </div>
                                </div>
                            </DrawerContent>
                        </DrawerPortal>
                    </Drawer>
                </div>
            </nav>
        </>
    );
}

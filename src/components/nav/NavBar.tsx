import { NavLink } from '@/components/nav/NavLink';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from "framer-motion/client"
import ico from '~/ico.svg';
import { Button } from '../ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
    DrawerPortal
} from "@/components/ui/drawer"

import { GiHamburgerMenu } from "react-icons/gi";
export function NavBar() {
    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:block sticky top-0 z-50 bg-black/20 backdrop-blur-md">
                <div className="flex items-center justify-between px-8 text-center">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="mr-4">
                            <Image src={ico} width={64} height={64} alt="Eagle Logo" className="size-16 rounded-lg" />
                        </Link>
<<<<<<< HEAD
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/#sponsors">Sponsors</NavLink>
                        <NavLink href="/#faq">FAQ</NavLink>
                        <NavLink href="/#meet-the-team">Meet the Team</NavLink>
                        <NavLink href="/#last-year">Last Year</NavLink>
=======
                        <Link href="/">Home</Link>
                        <Link href="/#sponsors">Sponsors</Link>
                        <Link href="/#faq">FAQ</Link>
                        <Link href="/#meet-the-team">Meet the Team</Link>
                        <Link href="/#last-year">Last Year</Link>
>>>>>>> 515e690e6fd1d59587a45434a5ec0cb31ea43d92
                    </div>
                    <div className="flex items-center justify-center">
                        {/* <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white">
                            <motion.a
                                href="/Signup"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Button variant={"outline"} className="bg-pink-500 hover:bg-pink-600">
                                    Sign Up
                                </Button>
                            </motion.a>

                            <motion.a
                                href="/Login"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Button variant={"outline"} className="bg-blue-500 hover:bg-blue-400">
                                    Login
                                </Button>
                            </motion.a>
                        </div> */}
                    </div>
                </div>
            </nav>
{/* Mobile Navbar */}
<nav className="block md:hidden sticky top-0 z-50 bg-black/50 backdrop-blur-md">
    <div className="flex items-center justify-between px-8 text-center pb-4">
        <Drawer direction="left">
            <DrawerTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
                <GiHamburgerMenu />
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerContent
<<<<<<< HEAD
                    className="h-screen fixed top-0 left-0 w-[75vw] outline-none flex flex-col bg-black text-white"
=======
                    className="h-screen left-0 w-[75vw] outline-none flex flex-col bg-black text-white"
>>>>>>> 515e690e6fd1d59587a45434a5ec0cb31ea43d92
                    style={{ '--initial-transform': 'translateX(-100%)' } as React.CSSProperties}
                >
                    <div className="h-full flex flex-col">
                        {/* Close Button */}
                        <div className="p-4 flex justify-end">
                            <DrawerClose className="text-xl text-white">✕</DrawerClose>
                        </div>
                        {/* Drawer Links */}
                        <div className="flex flex-col gap-6 p-8">
                            <Link href="/" className="text-lg font-medium">
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

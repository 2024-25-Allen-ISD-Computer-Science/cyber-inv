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
            <nav className="border-b shadow-xl hidden md:block">
                <div className="flex items-center justify-between px-8 text-center">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="mr-4">
                            <Image src={ico} width={64} height={64} alt="Eagle Logo" className="size-16 rounded-lg" />
                        </Link>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/#sponsors">Sponsors</NavLink>
                        <NavLink href="/#faq">FAQ</NavLink>
                        <NavLink href="/#meet-the-team">Meet the Team</NavLink>
                        <NavLink href="/#last-year">Last Year</NavLink>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white ">
                            <motion.a
                                href="/Signup"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Button variant={"outline"} className='bg-pink-500 hover:bg-pink-600'>
                                    Sign Up
                                </Button>
                            </motion.a>

                            <motion.a
                                href="/Login"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Button variant={"outline"} className='bg-blue-500 hover:bg-blue-400'>
                                    Login
                                </Button>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </nav>




            <nav className="border-b shadow-xl block md:hidden">
                <div className="flex items-center justify-between px-8 text-center pb-4 py-2">
                    <div className="flex items-center justify-center">
                        <Drawer direction="left">
                            <DrawerTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
                                <GiHamburgerMenu/>
                            </DrawerTrigger>
                            <DrawerPortal>
                                <DrawerOverlay className="fixed inset-0 bg-black/40" />
                                <DrawerContent
                                    className="h-screen fixed outline-none w-[75vw] flex"
                                    style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
                                >
                                    <div className="bg-zinc-50 h-full w-full grow flex flex-col m-0">
                                        <div className="max-w-md mx-auto">
                                            <DrawerTitle className="font-medium mb-2 text-zinc-900">It supports all directions.</DrawerTitle>
                                            <DrawerDescription className="text-zinc-600 mb-2">
                                                This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
                                                drawer.
                                            </DrawerDescription>
                                        </div>
                                    </div>
                                </DrawerContent>
                            </DrawerPortal>
                        </Drawer>

                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white ">
                            <motion.a
                                href="/Signup"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Button variant={"outline"} className='bg-pink-500 hover:bg-pink-600'>
                                    Sign Up
                                </Button>
                            </motion.a>

                            <motion.a
                                href="/Login"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Button variant={"outline"} className='bg-blue-500 hover:bg-blue-400'>
                                    Login
                                </Button>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

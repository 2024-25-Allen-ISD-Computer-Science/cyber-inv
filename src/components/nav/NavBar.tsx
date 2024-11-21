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

            <nav className="border-b shadow-xl hidden md:block overflow-x-hidden">
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




            <nav className="border-b shadow-xl block md:hidden overflow-x-hidden">
                <div className="flex items-center justify-between px-8 text-center pb-4 py-2">
                    <div className="flex items-center justify-center">
                        <Drawer direction="left" >
                            <DrawerTrigger >
                                <GiHamburgerMenu className="size-6" />
                            </DrawerTrigger>
                            <DrawerPortal>
                                <DrawerOverlay className="fixed inset-0 bg-black/40 p-0 m-0" />
                                <DrawerContent

                                    className="fixed h-screen outline-none w-[75vw] flex"
                                    style={{
                                        '--initial-transform': 'calc(100% + 8px)',
                                        padding: 0, // Ensure no extra padding
                                        margin: 0, // Ensure no extra margin
                                        border: 'none', // Remove any border
                                    } as React.CSSProperties}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <Link href="/" className="">
                                            <Image src={ico} width={80} height={80} alt="Eagle Logo" className="size-44 rounded-lg" />
                                        </Link>
                                        <NavLink href="/">Home</NavLink>
                                        <NavLink href="/#sponsors">Sponsors</NavLink>
                                        <NavLink href="/#faq">FAQ</NavLink>
                                        <NavLink href="/#meet-the-team">Meet the Team</NavLink>
                                        <NavLink href="/#last-year">Last Year</NavLink>
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

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ico from "~/ico.svg";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-4">
            {/* Logo and Branding */}
            <div className="text-2xl font-semibold">
                <Link href={"/"} className=" flex items-center">

                    <Image src={ico} height={50} width={50} alt="ico" className="mr-2" />
                    ALLEN CYBER

                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row items-center">
                <div className="ml-5 mr-5">Info</div>
                <div className="ml-5 mr-5">Mission</div>
                <div className="ml-5 mr-5">Prizes</div>
                <div className="ml-5 mr-5">FAQ</div>
                <div className="flex flex-row gap-x-2">
                    <Link href={"/login"}>
                        <Button className="px-6 py-2">Log In</Button>
                    </Link>
                    <Link href={"/register"}>

                        <Button className="px-6 py-2" variant={"secondary"}>Sign Up</Button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden  p-4">
                    <div className="flex flex-col items-center space-y-4">
                        <div>Info</div>
                        <div>Mission</div>
                        <div>Prizes</div>
                        <div>FAQ</div>
                        <div className="flex flex-row gap-x-2">
                            <Link href={"/login"}>
                                <Button className="px-6 py-2">Log In</Button>
                            </Link>
                            <Link href={"/register"}>

                                <Button className="px-6 py-2" variant={"secondary"}>Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
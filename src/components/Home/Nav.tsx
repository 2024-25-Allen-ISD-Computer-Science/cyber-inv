"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ico from "~/ico.svg";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <div className="hidden md:flex w-full justify-between items-center p-4">
        {/* Left Section - Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="flex items-center">
            <Image src={ico} height={50} width={50} alt="logo" className="" />
            ALLEN CYBER INV
          </Link>
        </div>

        {/* Center Section - Menu Items
        <div className="flex gap-8">
          <Link href={"/#About"}>About</Link>
          <div>Prizes</div>
          <div>FAQ</div>
        </div> */}

        {/* Right Section - Buttons */}
        <div className="flex gap-4">
          <Link href="/login">
            <Button className="px-6 py-2">Log In</Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary" className="px-6 py-2">
              Sign Up
            </Button>
          </Link>
        </div>

      </div>

      {/* Mobile Navbar - hidden on desktop */}
      <div className="md:hidden w-full">
        {/* Top Bar with Logo and Hamburger */}
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center">
            <Image src={ico} height={50} width={50} alt="logo" className="" />
            <span className="text-2xl font-semibold">ALLEN CYBER</span>
          </Link>
          
          <button onClick={toggleMenu} className="">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Collapsible Mobile Menu with Animation */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-4 flex flex-col items-center gap-4"
          >

            <div className="flex flex-col w-full gap-2 mt-4">
              <Link href="/login" className="w-full">
                <Button className="w-full py-2">Log In</Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button variant="secondary" className="w-full py-2">
                  Sign Up
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

"use client"

import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Tilt from 'react-parallax-tilt'
import React, { useState, useEffect } from 'react';


import team from '@/data/team.json';
import faq from '@/data/faq.json';
import sponsors from '@/data/sponsors.json'
import * as motion from "framer-motion/client"
import Progbar from "@/components/Home/Prog"
import Sheet from '@/components/Home/HamburgerMenu'

import cyb1 from '~/images/cybinv1.jpg';
import cyb2 from '~/images/cybinv2.jpg';
import cyb3 from '~/images/cybinv3.jpg';
import cyb4 from '~/images/cybinv4.jpg';
import cyb5 from '~/images/cybinv5.jpg';
import cyb6 from '~/images/cybinv6.jpg';
import cyb7 from '~/images/cybinv7.jpg';
import cyb8 from '~/images/cybinv8.jpg';
import cyb9 from '~/images/cybinv9.jpg';
import ico from '~/ico.svg';

const smoothScrolling = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

export default function Home() {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 426);
    const checkScreenWidth = () => {
        setIsMobile(window.innerWidth < 426)
    }

    window.addEventListener('resize', checkScreenWidth)

    return (
        <main className="flex w-full flex-col overflow-x-hidden bg-gradient-to-bl font-sans">
            <div className="w-full">
                <div className="flex items-center justify-center text-center">
                    <Progbar />
                    {isMobile ? (
                        <Sheet />
                    ) : (
                        ['Sponsors', 'FAQ', 'Last Year', 'Meet the Team'].map((text) => {
                            const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
                            const scrollTo = href.replace('#', '');

                            return (
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.history.pushState(null, '', href);
                                        smoothScrolling(scrollTo);
                                    }}
                                    href={href}
                                    key={text}
                                >
                                    <div className="p-5 text-lg md:text-2xl" key={text}>
                                        <div className="navbar">{text}</div>
                                    </div>
                                </a>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Main Section */}
            <section className="flex h-[100vh] w-full flex-col items-center">
                <div className="flex h-full flex-col items-center justify-center text-center md:flex-row md:space-x-8 md:space-y-0 md:text-left">
                    {/* Eagle Logo Animation */}
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <Tilt>
                            <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
                        </Tilt>
                    </motion.div>

                    {/* Title Animation */}
                    <motion.div
                        className="relative top-0 z-20 flex h-auto w-fit select-auto items-center justify-center bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text py-4 text-center text-5xl font-extrabold text-transparent md:text-7xl lg:mb-0 lg:text-9xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Allen Cyber <br /> Invitational
                    </motion.div>
                </div>

                <div className="h-[50vh] w-full">
                    {/* <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white -mt-[10vh]">
                    <motion.a 
                        href="/Signup"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <button className="bg-violet-500 py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-violet-600 ease-in-out duration-200">
                            Sign Up
                        </button>
                    </motion.a>

                    <motion.a 
                        href="/Login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        <button className="bg-blue-500 py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-blue-700 ease-in-out duration-200">
                            Login
                        </button>
                    </motion.a>
                </div> */}

                    {/* Learn more section with bounce animation */}
                    <div className="flex w-full place-content-center justify-center">
                        <Timer />
                    </div>

                    <motion.div
                        className="mt-[2.5vh] flex flex-col items-center justify-center text-center text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="animate-bounce">Learn more &#9660;</div>
                        <br />
                    </motion.div>
                </div>

                {/* Sign Up Section with animation UNCOMMENT WHEN SIGN UP IS DONE*/}
            </section>

            {/* Countdown */}

            <section className="flex w-full flex-col items-center justify-center bg-black p-8 text-white">
                <h2 className="mb-4 text-center text-6xl font-bold text-violet-500">Our Mission</h2>

                <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:px-12">
                    {/* Image Section */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <Image src={ico} width={500} height={500} alt="Eagle Logo" className="rounded-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="w-full text-justify text-xl font-light md:w-1/2">
                        <p>
                            We aim to help students have an opportunity to learn and sharpen their cybersecurity skills
                            through this competition. Whether you are a beginner or skilled, this event offers something
                            for everyone. The Allen Cyber Invitational is open for all North Texan high school students.
                            We hope to see you there!
                        </p>
                    </div>
                </div>
            </section>

            <div>
                <section id="meet-the-team" className="mt-20 flex flex-col items-center justify-center">
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                        dragTransition={{ power: 0.2 }}
                    >
                        <div className="py-8 text-center text-6xl font-bold text-violet-500">Meet The Team</div>
                        <div className="flex items-center justify-center">
                            <Carousel className="w-[87.5vw] max-w-6xl p-2">
                                <CarouselContent className="flex items-center justify-between">
                                    {team.map((member) => (
                                        <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                                            <Card>
                                                <CardContent className="flex h-max flex-col items-center justify-center p-6 md:h-80 md:p-2">
                                                    <div className="relative flex h-full w-full justify-center overflow-hidden rounded-md">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={3000}
                                                            height={2000}
                                                            className="h-full w-fit object-fill"
                                                        />
                                                    </div>

                                                    <span className="mt-5 text-center text-3xl font-bold">
                                                        {member.name}
                                                    </span>
                                                    <span className="mt-2 text-center text-lg font-light">
                                                        {member.title}
                                                    </span>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </motion.div>
                </section>
            </div>

            <section id="faq" className="mt-20 flex w-full items-center justify-center font-bold">
                <div className="flex w-[80vw] flex-col">
                    <div className="mb-3 w-full rounded-xl border-2 border-white">
                        <div className="pb-7 pl-10 pt-10 text-center text-6xl font-bold text-violet-500">FAQs</div>
                        <div className="pb-10 pl-10 text-center text-3xl font-light"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {faq.map((item) => (
                            <Accordion key={item.question} type="single" collapsible className="items-start text-3xl">
                                <AccordionItem value={item.question}>
                                    <AccordionTrigger className="text-3xl">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-2xl">{item.answer}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </section>

            <Separator className="my-20" />

            <section id="sponsors" className="z-10 w-full">
                <div className="pb-10 text-center text-6xl font-bold text-violet-500">Sponsors</div>
                <div className="flex flex-col items-center justify-center space-y-5">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={index} // Move key prop to motion.div
                            className="w-81 h-81 my-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <div
                                className={`flex w-full items-center justify-between px-10 md:px-24 lg:px-52 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                key={sponsor.name}
                            >
                                <Tilt className="h-[35%] w-[35%] rounded-md object-cover md:h-[20%] md:w-[20%]">
                                    <Image
                                        src={sponsor.image}
                                        alt={sponsor.name}
                                        width={4032}
                                        height={3024}
                                        className="opacity-50 transition-opacity duration-500 hover:opacity-100"
                                    />
                                </Tilt>
                                <Card className="w-[42.5vw]">
                                    <CardContent className="flex h-36 flex-col items-center justify-center p-2">
                                        <span className="mt-2 text-center text-xl font-bold md:text-3xl lg:text-4xl">
                                            {sponsor.name}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section id="last-year" className="z-10 min-h-screen w-full">
                <div className="pb-7 pl-10 pt-10 text-center text-6xl font-bold text-violet-500">
                    Last Year's Event!
                </div>
                <div className="z-10 mx-auto grid w-[80vw] grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                loading="lazy"
                                className="h-full w-full object-cover hover:zoom-in-75"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <div className="mt-8 flex justify-center bg-zinc-900 p-8">
                <div className="flex w-11/12 flex-col items-center text-white lg:w-5/6">
                    <div className="flex w-full items-center justify-evenly">
                        <div className="h-0.5 w-1/4 bg-zinc-100 lg:w-1/3"></div>
                        <div className="flex w-1/2 flex-row items-center justify-evenly border-zinc-100 lg:w-1/3">
                            <a href="mailto:allencyberinvitational@gmail.com">
                                <SiGmail />
                            </a>
                            <a href="">
                                <SiInstagram />
                            </a>
                            <a href="">
                                <SiDiscord />
                            </a>
                            <a href="">
                                <SiLinkedin />
                            </a>
                        </div>
                        <div className="h-0.5 w-1/4 bg-zinc-100 lg:w-1/3"></div>
                    </div>
                    <div className="my-3 flex items-center gap-3">
                        <Image src={ico} width={20} height={20} className="h-20 w-20" alt="Cyber Invitational Icon" />
                        <div className="text-center text-lg font-bold tracking-wide text-white lg:text-3xl">
                            Allen Cyber Invitational
                        </div>
                    </div>
                    <div className="text-sm lg:text-base">Copyright &copy; 2024 Allen Cyber Invitational</div>
                </div>
            </div>
        </main>
    );
}

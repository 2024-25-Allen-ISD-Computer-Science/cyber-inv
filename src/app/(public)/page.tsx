"use client"
import { Button } from "@/components/ui/button";
import Car from "@/components/Home/Car";
import { ShieldExclamationIcon, PuzzlePieceIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Podium from "~/images/podium.svg"
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import faq from '@/data/faq.json';
import Link from "next/link";
import BLUR1 from "~/BLUR1.svg"
import BLUR2 from "~/BLUR2.svg"
import BLUR3 from "~/BLUR3.svg"
export default function Page() {


    return (
        <main className="w-full ">


            {/* Rest of the Page */}
            <section className="w-full h-dvh md:h-[50vh] flex flex-col justify-center items-center px-6 md:px-24">
            <Image src={BLUR1} height={500} width={500} alt="blur1" className="absolute justify-center w-full h-full -z-20 overflow-clip opacity-15"/>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:w-2/3 h-full">
                    {/* Text Section */}
                    <div className="flex flex-col items-center space-y-4 text-center flex-grow">
                        <h1 className="text-4xl font-bold">The Allen Cyber Invitational</h1>
                        <p className="text-lg">Providing opportunities to those interested</p>
                        <p className="text-sm">Brought to you by Allen CS-forum</p>
                        <div className="flex space-x-4 mt-4">
                            <Link href={"/login"}>
                                <Button className="px-6 py-2">Log In</Button>
                            </Link>
                            <Link href={"/register"}>

                                <Button className="px-6 py-2" variant={"secondary"}>Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex flex-col justify-center items-center text-center p-2">
                        <Car />
                    </div>
                </div>
            </section>
            <section className="w-full h-fit md:h-1/3 flex justify-center items-center">
            <Image src={BLUR2} height={500} width={500} alt="blur1" className="absolute flex justify-self-end w-full h-full -z-20 overflow-clip opacity-15"/>

    <div className="bg-accent/40 border border-1 border-white/20 md:w-2/3 rounded-lg shadow-2xl h-full w-full">
    
        <div className="rounded-lg p-4 flex flex-col md:flex-row gap-4 items-stretch justify-center w-full h-full">
            {/* Puzzle Round Card */}
            <div className="bg-card border border-white/30 p-5 w-full md:w-1/3 rounded-lg shadow-xl flex flex-col justify-center items-center h-full relative group">
                {/* Icon */}
                <div className="text-2xl md:mb-4">
                    <PuzzlePieceIcon className="size-36 md:size-48 text-green-300" />
                </div>
                {/* Title */}
                <div className="mb-2 text-lg font-semibold md:mb-0">Puzzle Round</div>
                {/* Hidden Content (Hover Effect on Desktop) */}
                <div className="absolute bottom-0 left-0 w-full bg-card/30 backdrop-blur-md p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-full hidden md:flex items-center justify-center">
                    <div className="text-center w-full">
                        CTF based round where teams solve puzzles together as fast as possible to earn points. This will make up a majority of the competition.
                    </div>
                </div>
                {/* Always Visible Description (Mobile) */}
                <div className="block md:hidden text-center mt-2">
                    CTF based round where teams solve puzzles together as fast as possible to earn points. This will make up a majority of the competition.
                </div>
            </div>

            {/* Battle Round Card */}
            <div className="bg-card border border-white/30 p-5 w-full md:w-1/3 rounded-lg shadow-xl flex flex-col justify-center items-center h-full relative group">
                {/* Icon */}
                <div className="text-2xl md:mb-4">
                    <ShieldExclamationIcon className="size-36 md:size-48 text-red-300" />
                </div>
                {/* Title */}
                <div className="mb-2 text-lg font-semibold md:mb-0">Battle Round</div>
                {/* Hidden Content (Hover Effect on Desktop) */}
                <div className="absolute bottom-0 left-0 w-full bg-card/30 backdrop-blur-md p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-full hidden md:flex items-center justify-center">
                    <div className="text-center w-full">
                        CTF based round where teams will place their bets.
                    </div>
                </div>
                {/* Always Visible Description (Mobile) */}
                <div className="block md:hidden text-center mt-2">
                    CTF based round where teams will place their bets.
                </div>
            </div>

            {/* Scenario Round Card */}
            <div className="bg-card border border-white/30 p-5 w-full md:w-1/3 rounded-lg shadow-xl flex flex-col justify-center items-center h-full relative group">
                {/* Icon */}
                <div className="text-2xl md:mb-4">
                    <SparklesIcon className="size-36 md:size-48 text-violet-300" />
                </div>
                {/* Title */}
                <div className="mb-2 text-lg font-semibold md:mb-0">Scenario Round</div>
                {/* Hidden Content (Hover Effect on Desktop) */}
                <div className="absolute bottom-0 left-0 w-full bg-card/30 backdrop-blur-md p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 h-full hidden md:flex items-center justify-center">
                    <div className="text-center w-full">
                        Blue team based game where you defend your systems from intruders and earn points.
                    </div>
                </div>
                {/* Always Visible Description (Mobile) */}
                <div className="block md:hidden text-center mt-2">
                    Blue team based game where you defend your systems from intruders and earn points.
                </div>
            </div>
        </div>
    </div>
</section>


            <section className="w-full h-lvh md:h-lvh flex flex-col justify-center items-center px-2 gap-5 ">
            <Image src={BLUR3} height={500} width={500} alt="blur1" className="absolute flex justify-self-end w-full h-full -z-20 overflow-clip opacity-25"/>

                <div
                    className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                    $2,000 in prizes
                </div>
                <Image src={Podium} alt="podium" height={440} width={900} />
            </section>

            <section className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-col justify-center items-center p-4 md:p-24 gap-5 rounded-xl w-full md:w-2/3">
                    <div className="text-3xl">FAQ</div>
                    <Accordion type="single" collapsible className="items-center lg:grid grid-cols-2 gap-4">
                        {faq.map((item) => (
                            <AccordionItem key={item.question} value={item.question}>
                                <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-xl font-normal">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="w-full h-1/2"></section>
        </main>
    );
}
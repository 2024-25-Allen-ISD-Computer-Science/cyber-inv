//"use client"
import { Button } from "@/components/ui/button";
import Car from "@/components/Home/Car";
import { ShieldExclamationIcon, PuzzlePieceIcon, SparklesIcon } from "@heroicons/react/24/outline";
// import Podium from "~/images/podium.svg"
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
import GroupPhoto from "~/images/cybinv9.jpg"
export default function Page() {


    return (
        <main className="w-full">
            {/* Rest of the Page */}
            <section className="w-full h-full mb-10 md:h-[50vh] flex flex-col justify-center items-center px-6 md:px-24">
                <Image src={BLUR1} height={500} width={500} alt="blur1" className="absolute right-1/2 w-full h-full -z-20  opacity-15 -rotate-14 " />
                <div className="flex flex-col md:flex-row justify-between items-center w-full h-full">
                    <div className="flex flex-col justify-center items-center text-center p-2 w-full h-full">
                        <Car />
                    </div>
                    {/* Text Section */}
                <div className="w-full flex flex-col items-center space-y-4 text-center flex-grow">
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
                </div>

            </section>
            <section className="w-full px-6 md:px-24 text-center md:text-left mb-10">
                <div className="gap-x-5 flex flex-col md:flex-row items-center md:items-start bg-accent/40 p-6 rounded-lg shadow-lg w-full md:w-2/3 mx-auto">
                    {/* Text Section */}
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold mb-3  md:text-left text-center">What is the Allen Cyber Invitational?</h2>
                        <p className="text-md md:text-lg">
                            An annual student-run cybersecurity competition for high school students in the DFW area.
                            Test your skills in cryptography, hacking, and system security through fun and competitive challenges!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                        <Image src={GroupPhoto} width={500} alt="Group photo" className="rounded-lg" />
                    </div>
                </div>
            </section>



            <section className="w-full h-fit flex justify-center items-center" id="Comp Description">



                <Image src={BLUR2} height={500} width={500} alt="blur1" className="absolute flex justify-self-end w-full h-full -z-20 overflow-clip opacity-35" />

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



            {/* <section className="w-full h-fit  md:h-lvh flex flex-col justify-center items-center px-2 gap-5 md:m-0 m-10 ">
                <Image src={Podium} alt="podium" height={440} width={900} />

                <div
                    className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                   Big ammounts in prizes
                </div>
            </section> */}

            <section className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-col justify-center items-center  p-4 gap-5 rounded-xl w-full md:w-2/3">
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



        </main>
    );
}
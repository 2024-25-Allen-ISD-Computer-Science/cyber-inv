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
export default function Page() {
    return (
        <main className="w-full h-screen">
            <section className="w-full h-2/3 flex flex-col justify-center items-center px-6 md:px-24">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:w-2/3 h-full">
                    {/* Text Section */}
                    <div className="flex flex-col  items-center space-y-4 text-center flex-grow">
                        <h1 className="text-4xl font-bold">The Allen Cyber Invitational</h1>
                        <p className="text-lg">Providing an opportunities to those interested</p>
                        <p className="text-sm">Brought to you by Allen CS-forum</p>
                        <div className="flex space-x-4 mt-4">
                            <Button className="px-6 py-2">Log In</Button>
                            <Button className="px-6 py-2" variant={"secondary"}>Sign Up</Button>
                        </div>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex flex-col justify-center items-center text-center p-2 ">
                        <Car />
                    </div>
                </div>
            </section>

            <section className="w-full h-fit flex justify-center items-center mt-10">
    <div className="bg-accent/40 border border-1 border-white/20 p-2 rounded-xl md:w-2/3 shadow-2xl">
        <div className="rounded-lg p-4 flex flex-col md:flex-row gap-4 items-stretch justify-center w-full">
            <div className="bg-card border border-white/30 p-5 w-full md:w-2/3 rounded-lg shadow-xl flex flex-col justify-items-center items-center h-full">
                <div className="text-2xl">
                    <PuzzlePieceIcon className="w-12 h-12 text-green-300" />
                </div>
                <div>Puzzle Round</div>
                <div className="text-center mt-2 w-1/2">CTF based round where teams solve puzzles together as fast as possible to earn points.</div>
            </div>

          <div className="bg-card border border-white/30 p-5 w-full md:w-2/3 rounded-lg shadow-xl flex flex-col justify-items-center items-center h-full">
                <div className="text-2xl">
                    <ShieldExclamationIcon className="size-12 text-red-300" />
                </div>
                <div>Battle Round</div>
                <div className="text-center mt-2 w-1/2">CTF based round where teams gamble their points from previous rounds to get ahead.</div>
            </div>

            <div className="bg-card border border-white/30 p-5 w-full md:w-2/3 rounded-lg shadow-xl flex flex-col justify-items-center items-center h-full">
                <div className="text-2xl">
                    <SparklesIcon className="size-12 text-violet-300" />
                </div>
                <div>Scenario Round</div>
                <div className="text-center mt-2 w-1/2">Blue team based game where you defend your systems from intruders and earn points.</div>
            </div>
        </div>
    </div>
</section>
            <section className="w-full h-fit md:h-2/3 flex flex-col justify-center items-center  px-2 gap-5 mt-10">
                <div
                    className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                    $2,000 in prizes
                </div>
                {/* TODO: switch this out with real prize money */}
                <Image src={Podium} alt="podium" height={440} width={900} />
            </section>
            <section className="w-full h-fit flex justify-center items-center">
                <div className="flex flex-col justify-center items-center  p-24 gap-5  rounded-xl w-full md:w-2/3">

                    <div className="text-3xl"> FAQ</div>
                    <Accordion type="single" collapsible className="items-center lg:grid grid-cols-2 gap-4 w-full">
                        {faq.map((item) => (
                            <AccordionItem key={item.question} value={item.question} >
                                <AccordionTrigger className="text-2xl">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-xl font-normal">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <section className="w-full h-1/2">

            </section>

        </main>
    );
}
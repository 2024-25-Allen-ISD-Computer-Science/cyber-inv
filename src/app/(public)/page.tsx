"use client"
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Car from "@/components/Home/Car";
import { ShieldExclamationIcon, PuzzlePieceIcon, SparklesIcon } from "@heroicons/react/24/outline";
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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

export default function Page() {

    const teamMembers = [
        {
          id: 1,
          name: "Abel Semahagen",
          role: "Product Manager",
          image: "", 
          socials: {
            instagram: "#",
            discord: "#",
            email: "#",
          },
        },
        {
          id: 2,
          name: "Richard Jang",
          role: "Porject Manager",
          image: "", 
          socials: {
            instagram: "#",
            discord: "#",
            email: "#",
          },
        },
        {
          id: 3,
          name: "Tanay Sreedharan",
          role: "Developer",
          image: "", 
          socials: {
            instagram: "#",
            discord: "#",
            email: "#",
          },
        },
        {
          id: 4,
          name: "Darrion Nguyen",
          role: "Developer",
          image: "", 
          socials: {
            instagram: "#",
            discord: "#",
            email: "#",
          },
        },

      ];

    return (
        <main className="w-full ">


            {/* Rest of the Page */}
            <section className="w-full h-dvh md:h-[50vh] flex flex-col justify-center items-center px-6 md:px-24">
                <Image src={BLUR1} height={500} width={500} alt="blur1" className="absolute justify-center w-full h-full -z-20 overflow-clip opacity-15" />
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
                <Image src={BLUR2} height={500} width={500} alt="blur1" className="absolute flex justify-self-end w-full h-full -z-20 overflow-clip opacity-15" />

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

            <section className="w-full h-fit flex justify-center items-center bg-accent/40 py-16">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl">
            Allen cyber Invitational is committed to providing the best oppurtunity for anyone in the community. Here 
            are the many dedicated team members who have worked very hard to help contribute to this wonderful event!
          </p>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-card border border-white/30 p-6 rounded-lg shadow-xl flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                    <div className="flex space-x-4 mt-4">
                      <Link
                        href={member.socials.instagram}
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        <FaInstagram size={20} />
                      </Link>
                      <Link
                        href={member.socials.discord}
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        <FaDiscord size={20} />
                      </Link>
                      <Link
                        href={member.socials.email}
                        className="text-gray-400 hover:text-white transition duration-300"
                      >
                        <CiMail size={20} />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>

            <section className="w-full h-lvh md:h-lvh flex flex-col justify-center items-center px-2 gap-5 relative overflow-hidden">
                <div className="flex flex-col items-center bg-accent/40 border border-1 border-white/20 md:w-2/3 rounded-lg shadow-2xl pt-10 pb-24 rounded-xl ">
                    <div
                        className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-orange-300 to-yellow-300 mb-20"
                        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        $2,000 in prizes
                    </div>

                    {/* Podium Container */}
                    <div className="flex flex-row items-end gap-6 md:gap-12 justify-center scale-125 ">
                        {/* 2nd Prize */}
                        <div className="cursor-pointer bg-gradient-to-br from-gray-400 to-gray-200 p-8 md:p-8 pb-4 md:pb-6 rounded-lg shadow-2xl text-center w-48 md:w-64 h-64 md:h-80 transform transition-all duration-300 hover:scale-105 flex flex-col justify-end">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2nd Prize</h2>
                            <div className="space-y-2">
                                <p className="text-3xl md:text-4xl font-bold text-white">$550</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Upper Division</p>
                                <p className="text-3xl md:text-4xl font-bold text-white">$450</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Lower Division</p>
                            </div>
                        </div>

                        {/* 1st Prize */}
                        <div className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-200 p-8 md:p-8 pb-4 md:pb-6 rounded-lg shadow-2xl text-center w-48 md:w-64 h-80 md:h-96 transform transition-all duration-300 hover:scale-105 flex flex-col justify-end">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1st Prize</h2>
                            <div className="space-y-2">
                                <p className="text-3xl md:text-4xl font-bold text-white">$600</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Upper Division</p>
                                <p className="text-3xl md:text-4xl font-bold text-white">$500</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Lower Division</p>
                            </div>
                        </div>

                        {/* 3rd Prize */}
                        <div className="cursor-pointer bg-gradient-to-br from-yellow-700 to-yellow-500 p-8 md:p-8 pb-4 md:pb-6 rounded-lg shadow-2xl text-center w-48 md:w-64 h-48 md:h-64 transform transition-all duration-300 hover:scale-105 flex flex-col justify-end">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3rd Prize</h2>
                            <div className="space-y-2">
                                <p className="text-3xl md:text-4xl font-bold text-white">$500</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Upper Division</p>
                                <p className="text-3xl md:text-4xl font-bold text-white">$400</p>
                                <p className="text-lg md:text-xl font-semibold text-white opacity-90">Lower Division</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full h-1/2"></section>

            <footer className="w-full bg-accent/40 text-white py-8">
                <div className="container mx-auto px-6 md:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <h2 className="text-2xl font-bold">Allen Cyber Invitational</h2>
                            <p className="text-sm text-gray-400 text-center md:text-left">
                                Providing opportunities to those interested
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <h3 className="text-lg font-semibold">Links</h3>
                            <ul className="flex flex-col items-center md:items-start space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
                                        Log In
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition duration-300">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <h3 className="text-lg font-semibold">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link href="" className="text-gray-400 hover:text-white transition duration-300">
                                    <CiMail size={24} />
                                </Link>
                                <Link href="" className="text-gray-400 hover:text-white transition duration-300">
                                    <FaInstagram size={24} />
                                </Link>
                                <Link href="" className="text-gray-400 hover:text-white transition duration-300">
                                    <FaDiscord size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Allen Cyber Invitational
                    </div>
                </div>
            </footer>
        </main>
    );
}
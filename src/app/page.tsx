import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';


import team from '@/data/team.json';
import faq from '@/data/faq.json';
import * as motion from "framer-motion/client"
import Progbar from "@/components/Home/Prog"

import cyb1 from '~/images/cybinv1.jpg';
import cyb2 from '~/images/cybinv2.jpg';
import cyb3 from '~/images/cybinv3.jpg';
import cyb4 from '~/images/cybinv4.jpg';
import cyb5 from '~/images/cybinv5.jpg';
import cyb6 from '~/images/cybinv6.jpg';
import cyb7 from '~/images/cybinv7.jpg';
import cyb8 from '~/images/cybinv8.jpg';
import cyb9 from '~/images/cybinv9.jpg';
import ico from '~/images/ico.svg';


export default function Home() {
    return (

        <main className=" w-full flex flex-col  font-sans overflow-x-hidden">
            <div className=" w-full">
                <div className="flex justify-center items-center text-center">
                    <Progbar />
                    {['Sponsors', 'FAQ', 'Last Year', 'Meet the Team'].map((text) => {
                        const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <a href={href} key={text}>
                                <div className=" p-5 text-lg md:text-2xl" key={text}>
                                    {text}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Main Section */}
            <section className="w-full h-[100vh] flex flex-col items-center mb-10">
                <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left md:space-y-0 md:space-x-8 h-full">
                    {/* Eagle Logo Animation */}
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ rotate: -10, scale: 0 }}
                        animate={{ rotate: 0, scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
                    </motion.div>

                    {/* Title Animation */}
                    <motion.div
                        className=" text-5xl md:text-7xl lg:text-9xl font-bold z-20 mb-10 lg:mb-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Allen Cyber <br /> Invitational
                    </motion.div>
                </div>

                <div className="w-full h-[50vh]">
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
                    <motion.div
                        className=" flex flex-col justify-center items-center text-center text-2xl mt-[15vh]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className='animate-bounce'>

                            Learn more
                            <br />
                            &#9660;
                        </div>
                        
                    </motion.div>
                </div>
                <motion.div
                    className="w-81 h-81 z-20 my-0"
                    initial={{ scale: 0 }}
                    whileInView={{scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}

                >
                    <Timer />
                </motion.div>
                {/* Sign Up Section with animation UNCOMMENT WHEN SIGN UP IS DONE*/}
            </section>

            {/* Countdown */}
            <motion.div
                className="w-81 h-81 z-20 my-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}

            >
                <section className="flex flex-col items-center justify-center text-center">
                </section>
                <section className="flex flex-col items-center justify-center w-full p-8  text-white">
                    <h2 className="text-violet-500 text-6xl font-bold text-center mb-4">Our Mission</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:px-12">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src={ico}
                                width={500}
                                height={500}
                                alt="Eagle Logo"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-xl font-light text-justify">
                            <p>
                                We aim to help students have an opportunity to learn and sharpen their cybersecurity skills
                                through this competition. Whether you are a beginner or skilled, this event offers something for
                                everyone. The Allen Cyber Invitational is open for all North Texan high school students. We hope
                                to see you there!
                            </p>
                        </div>
                    </div>
                </section>
            </motion.div>


            <div>
                <section id="meet-the-team" className="flex items-center justify-center flex-col mt-20">
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}

                    >

                        
                        <div className="text-violet-500 text-6xl font-bold py-8 text-center">Meet The Team</div>
                        <Carousel className="w-full max-w-6xl p-2">
                            <CarouselContent className="flex items-center justify-between">
                                {team.map((member) => (
                                    <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                                        <Card>
                                            <CardContent className="flex items-center justify-center h-max md:h-80 flex-col p-6 md:p-2">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={4032}
                                                    height={3024}
                                                    className="object-cover rounded-md w-3/5"
                                                />
                                                <span className="text-center mt-5 text-3xl font-bold">{member.name}</span>
                                                <span className="text-center mt-2 text-lg font-light">{member.title}</span>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </motion.div>
                </section>
            </div>

            <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}

                    >
            <section id="faq" className="w-full flex mt-20 justify-center items-center font-bold ">
                <div className="flex flex-col w-[80vw]">
                    <div className="border-2 border-white w-full rounded-xl mb-3">
                        <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">FAQs</div>
                        <div className=" text-3xl font-light pl-10 pb-10 text-center">

                        </div>
                    </div>

                    <Accordion type="single" collapsible className="text-3xl items-center">
                        {faq.map((item) => (
                            <AccordionItem key={item.question} value={item.question}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent className="text-2xl">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </section>
            </motion.div>

            <Separator className="mt-10" />
            {/* Gallery Section */}
            <section id="last-year" className="w-full min-h-screen z-10">
                <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">
                    Last Year's Event!
                </div>
                <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 z-10">
                    {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={500}
                                loading="lazy"
                                className="object-cover h-full w-full hover:zoom-in-75"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <div className="bg-zinc-900 p-8 flex justify-center mt-8">
                <div className="flex flex-col w-11/12 lg:w-5/6 items-center text-white">
                    <div className="w-full flex items-center justify-evenly">
                        <div className="w-1/4 lg:w-1/3 bg-zinc-100 h-0.5"></div>
                        <div className="w-1/2 lg:w-1/3 flex flex-row justify-evenly border-zinc-100 items-center">
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
                        <div className="w-1/4 lg:w-1/3 bg-zinc-100 h-0.5"></div>
                    </div>
                    <div className="flex items-center gap-3 my-3">
                        <Image src={ico} width={20} height={20} className="w-20 h-20" alt="Cyber Invitational Icon" />
                        <div className="text-white font-bold tracking-wide text-lg lg:text-3xl text-center">
                            Allen Cyber Invitational
                        </div>
                    </div>
                    <div className="text-sm lg:text-base">Copyright &copy; 2024 Allen Cyber Invitational</div>
                </div>
            </div>
        </main>
    );
}

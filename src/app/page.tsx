import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';


import team from '@/data/team.json';
import sponsors from '@/data/sponors.json'
import faq from '@/data/faq.json';
import * as motion from "framer-motion/client"
import Progbar from "@/components/Home/Prog"
import Footer from '@/components/Footer'

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
        <main className="flex w-full flex-col overflow-x-hidden font-sans">
            <div className="w-full">
                <div className="flex items-center justify-center text-center">
                    <Progbar />
                    {['Sponsors', 'FAQ', 'Last Year', 'Meet the Team'].map((text) => {
                        const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <a href={href} key={text}>
                                <div className="p-5 text-lg md:text-2xl" key={text}>
                                    {text}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Main Section */}
            <section className="mb-10 flex h-[100vh] w-full flex-col items-center">
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
                        <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
                    </motion.div>

                    {/* Title Animation */}
                    <motion.div
                        className="z-20 mb-10 text-5xl font-bold md:text-7xl lg:mb-0 lg:text-9xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Allen Cyber <br /> Invitational
                    </motion.div>
                </div>

                <div className="h-[50vh] w-full">
                    <div className="-mt-[10vh] flex flex-row items-center justify-center gap-5 text-center text-3xl text-white">
                        <motion.a
                            href="/Signup"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <button className="rounded-xl bg-violet-500 px-6 py-4 shadow-xl duration-200 ease-in-out hover:cursor-pointer hover:bg-violet-600">
                                Sign Up
                            </button>
                        </motion.a>

                        <motion.a
                            href="/Login"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <button className="rounded-xl bg-blue-500 px-6 py-4 shadow-xl duration-200 ease-in-out hover:cursor-pointer hover:bg-blue-700">
                                Login
                            </button>
                        </motion.a>
                    </div>

                    {/* Learn more section with bounce animation */}
                    <motion.div
                        className="mt-[12.5vh] flex flex-col items-center justify-center text-center text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="animate-bounce">
                            Learn more
                            <br />
                            &#9660;
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="w-81 h-81 z-20 my-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
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
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <section className="mt-[20vh] flex w-full flex-col items-center justify-center p-8 text-white lg:mt-[17.5vh]">
                    <h2 className="mb-4 text-center text-6xl font-bold text-violet-500">Our Mission</h2>

                    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:px-12">
                        {/* Image Section */}
                        <div className="flex w-full justify-center md:w-1/2">
                            <Image src={ico} width={500} height={500} alt="Eagle Logo" className="rounded-lg" />
                        </div>

                        {/* Text Section */}
                        <div className="w-full text-justify text-xl font-light md:w-1/3 md:text-3xl">
                            <p>
                                We aim to help students have an opportunity to learn and sharpen their cybersecurity
                                skills through this competition. Whether you are a beginner or skilled, this event
                                offers something for everyone. The Allen Cyber Invitational is open for all North Texan
                                high school students. We hope to see you there!
                            </p>
                        </div>
                    </div>
                </section>
            </motion.div>

            <div>
                <section id="meet-the-team" className="mt-20 flex flex-col items-center justify-center">
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <div className="py-8 text-center text-5xl font-bold text-violet-500 lg:text-6xl">
                            Meet The Team
                        </div>
                        <div className="flex items-center justify-center">
                            <Carousel className="w-[27.5%] max-w-6xl p-2 md:w-[72.5%] lg:w-full">
                                <CarouselContent className="flex items-center justify-between">
                                    {team.map((member) => (
                                        <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                                            <Card>
                                                <CardContent className="flex h-max flex-col items-center justify-center p-6 md:h-80 md:p-2">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        width={4032}
                                                        height={3024}
                                                        className="w-3/5 rounded-md object-cover"
                                                    />
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

            <motion.div
                className="w-81 h-81 z-20 my-0"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <section id="faq" className="mt-20 flex w-full items-center justify-center font-bold">
                    <div className="flex w-[80vw] flex-col">
                        <div className="mb-3 flex w-full flex-col items-center justify-center rounded-xl border-2 border-white">
                            <div className="pb-7 pt-10 text-center text-4xl font-bold text-violet-500 lg:text-6xl">
                                FAQs
                            </div>
                            <div className="pb-10 text-center text-sm font-light lg:text-3xl">
                                Have More Questions?
                                <br />
                                Email them to us at 123bbc@gmail.com
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="grid-cols-2 items-center gap-4 lg:grid">
                            {faq.map((item) => (
                                <AccordionItem key={item.question} value={item.question}>
                                    <AccordionTrigger className="text-3xl">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-2xl">{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </motion.div>

            <Separator className="my-10" />

            <section id="sponsors" className="z-10 w-full">
                <div className="pb-10 text-center text-6xl font-bold text-violet-500">Sponsors</div>
                <div className="flex flex-col items-center justify-center space-y-5">
                    {sponsors.map((sponsor, index) => (
                        <div className={`flex w-full items-center justify-between px-32 lg:px-52 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={sponsor.name}>
                            <Image
                                src={sponsor.image}
                                alt={sponsor.name}
                                width={4032}
                                height={3024}
                                className="h-[20%] w-[20%] rounded-md object-cover"
                            />
                            <Card className="w-[60%]">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-36 md:p-2">
                                    <span className="mt-5 text-center text-3xl font-bold">{sponsor.name}</span>
                                    <span className="mt-2 text-center text-lg font-light">{sponsor.amount}</span>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            <Separator className="my-10" />
            {/* Gallery Section */}
            <section id="last-year" className="z-10 min-h-screen w-full">
                <div className="pb-7 pt-10 text-center text-6xl font-bold text-violet-500 lg:pl-10">
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

            <Footer />
        </main>
    );
}
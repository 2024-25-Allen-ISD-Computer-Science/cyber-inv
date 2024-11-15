import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import TiltLogo from '@/components/TiltLogo';
import team from '@/data/team.json';
import faq from '@/data/faq.json';
import * as motion from "framer-motion/client"
import Progbar from "@/components/Home/Prog"
import sponsors from '@/data/sponors.json'

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


export default function Home() {
    return (

        <main className=" w-full flex flex-col font-sans overflow-x-hidden">
            <div className=" w-full">
                <div className="flex justify-center items-center text-center">
                    <Progbar />
                </div>
            </div>

            {/* Main Section */}
            <section className="w-full h-screen flex flex-col items-center mb-10">
                <div className="flex h-fit flex-col md:flex-row justify-center items-center text-center md:text-left md:space-y-0 md:space-x-8 ">
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
                        <TiltLogo />
                    </motion.div>

                    {/* Title Animation */}

                    <motion.div
                        className=" text-5xl md:text-7xl lg:text-9xl  z-20  lg:mb-0 relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-violet-500 to-pink-500 bg-clip-text  font-extrabold text-transparent text-center select-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Allen Cyber <br /> Invitational
                    </motion.div>
                </div>

                <div className="w-fit h-full">
                    <motion.div
                        className="w-81 h-81  my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}

                    >
                        <Timer />
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
                    </motion.div>
                    {/* 
                    <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white -mt-[10vh]">
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

                    {/* <motion.div
                        className=" flex flex-col justify-center items-center text-center text-2xl mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className=''>

                            Learn more
                            <br />
                            &#9660;
                        </div>
                        
                    </motion.div> */}
                </div>

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
                <section className="flex flex-col items-center justify-center w-full p-8  text-white mt-[20vh] lg:mt-[17.5vh]">
                    <h2 className="text-violet-500 text-6xl font-bold text-center mb-4">Our Mission</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:px-12">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image
                                src={cyb9}
                                width={500}
                                height={500}
                                alt="Eagle Logo"
                                className="rounded-lg"

                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/3 md:text-3xl font-light text-justify text-xl">
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


                        <div className="text-violet-500 text-5xl lg:text-6xl font-bold py-8 text-center">Meet The Team</div>
                        <div className='flex justify-center items-center'>
                            <Carousel className="w-[27.5%] md:w-[72.5%] lg:w-full max-w-6xl p-2">
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
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}

            >
                <section id="faq" className="w-full flex mt-20 justify-center items-center font-bold ">
                    <div className="flex flex-col w-[80vw]">
                        <div className="flex flex-col justify-center items-center border-2 border-white w-full rounded-xl mb-3">
                            <div className="text-violet-500 text-4xl lg:text-6xl font-bold pt-10 pb-7 text-center">FAQs</div>
                            <div className="text-sm lg:text-3xl font-light pb-10 text-center">
                                Have More Questions?
                                <br />
                                Email them to us at 12345@gmail.com
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="items-center lg:grid grid-cols-2 gap-4">
                            {faq.map((item) => (
                                <AccordionItem key={item.question} value={item.question} >
                                    <AccordionTrigger className="text-3xl">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-2xl">{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                    </div>
                </section>
            </motion.div>

            <Separator className="mt-10" />
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
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20,
                                                }}
                                            >
                        <div className={`flex w-full items-center justify-between px-10 md:px-24 lg:px-52 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} key={sponsor.name}>
                            <Image
                                src={sponsor.image}
                                alt={sponsor.name}
                                width={4032}
                                height={3024}
                                className="h-[35%] w-[35%] md:h-[20%] md:w-[20%] rounded-md object-cover"
                            />
                            <Card className="w-[60%]">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-36 md:p-2">
                                    <span className="mt-5 text-center text-xl md:text-3xl font-bold">{sponsor.name}</span>
                                    <span className="mt-2 text-center md:text-lg font-light">{sponsor.amount}</span>
                                </CardContent>
                            </Card>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Gallery Section */}
            <section id="last-year" className="w-full min-h-screen z-10">
                <div className="text-violet-500 text-6xl font-bold lg:pl-10 pt-10 pb-7 text-center">
                    Last Year's Event!
                </div>
                <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 z-10">
                    {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map((image, index) => (
                        <motion.div
                            key={index} // Move key prop to motion.div
                            className="w-81 h-81 my-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                    className="object-cover h-full w-full hover:zoom-in"
                                />
                            </div>
                        </motion.div>
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
import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Team from '@/components/Home/Team';

import faq from '@/data/faq.json';

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
import Link from 'next/link';
import { AppearOnScroll } from '@/components/Home/AppearOnScroll';

export default function Home() {
    return (
        <main className="h-full">
            {/* Main Section */}
            <section className="h-full items-center">
                <div className="flex h-3/5 flex-col items-center justify-center text-center md:flex-row md:text-left">
                    <AppearOnScroll duration={300}>
                        <Image src={ico} width={500} height={500} alt="Eagle Logo" className="size-80" />
                    </AppearOnScroll>
                    <AppearOnScroll duration={500}>
                        <div className="text-7xl font-bold lg:text-8xl xl:text-9xl">
                            Allen Cyber <br /> Invitational
                        </div>
                    </AppearOnScroll>
                </div>

                {/* Sign Up Section without animation, TODO: Add transitions back after refactoring */}
                <div className="h-2/5">
                    <AppearOnScroll duration={700}>
                        <div className="flex flex-row items-center justify-center gap-5 text-center text-xl font-light uppercase tracking-widest text-white">
                            <Link
                                href="/register"
                                className="rounded-md bg-green-600 px-6 py-4 shadow-xl transition hover:bg-green-700"
                            >
                                Register
                            </Link>

                            <Link
                                href="/login"
                                className="rounded-md bg-blue-500 px-6 py-4 shadow-xl hover:bg-blue-600"
                            >
                                Login
                            </Link>
                        </div>
                    </AppearOnScroll>
                    <AppearOnScroll duration={1000}>
                        {/* Learn more section with bounce animation */}
                        <div className="mt-20 flex animate-bounce flex-col items-center justify-center text-center text-2xl">
                            Learn more
                            <br />
                            &#9660;
                        </div>
                    </AppearOnScroll>
                </div>
            </section>
            {/* Countdown */}
            <section className="mt-6 flex flex-col items-center justify-center border-y border-slate-600 py-8 text-center">
                <Timer />
            </section>
            <section className="flex w-full flex-col items-center justify-center bg-black p-8 text-white">
                <h2 className="mb-8 text-center text-6xl font-bold text-violet-500">Our Mission</h2>

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

            {/* Meet The Team */}
            <AppearOnScroll duration={1000}>
                <Team />
            </AppearOnScroll>

            <section id="faq" className="mt-20 flex w-full items-center justify-center font-bold">
                <div className="flex w-[80vw] flex-col">
                    <div className="mb-3 w-full rounded-xl border-2 border-white">
                        <div className="pb-7 pl-10 pt-10 text-center text-6xl font-bold text-violet-500">FAQs</div>
                        <div className="pb-10 pl-10 text-center text-3xl font-light">
                            Do you still have questions about the event?
                            <br />
                            Feel free to contact us at [TODO EMAIL]
                        </div>
                    </div>

                    <Accordion type="single" collapsible className="items-center text-3xl">
                        {faq.map((item) => (
                            <AccordionItem key={item.question} value={item.question}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent className="text-2xl">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <Separator className="mt-10" />
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

import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Timer from '@/components/Timer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Main from '@/components/Home/Main';
import Team from '@/components/Home/Team';

import team from '@/data/team.json';
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


export default function Home() {
    return (
        <main className=" w-full flex flex-col bg-gradient-to-bl font-sans overflow-x-hidden">
            <div className=" w-full">
                <div className="flex justify-center items-center text-center">
                    {['Sponsors', 'FAQ', 'Last Year', 'Meet the Team'].map((text) => {
                        const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <a href={href} key={text}>
                                <div className=" p-5 text-2xl" key={text}>
                                    {text}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Main Section */}
           <Main>
            </Main> 
            

            {/* Countdown */}
            <section className="flex flex-col items-center justify-center text-center">
                <Timer />
            </section>

            <section className="flex flex-col md:flex-row items-center justify-center text-center w-[100%]">
                <div className="w-81 h-81 z-20 my-0">
                    <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
                </div>

                <div className='flex flex-col w-screen'>
                    <div className="text-violet-500 text-6xl font-bold py-8">Our Mission</div>

                    <div className="flex flex-col text-2xl font-light text-center">
                        We aim to help students have an oppurtunity to learn and sharpen their cybersecurity skills
                        through this competition. Whether you are a beginner or skilled, this events offer something for
                        everyone. The Allen Cyber Invitational is open for all North Texan high school students. We hope
                        to see you there!
                    </div>
                </div>
            </section>

            {/* Meet The Team */}
            <Team/>
            
            <section id="faq" className="w-full flex mt-20 justify-center items-center font-bold ">
                <div className="flex flex-col w-[80vw]">
                    <div className="border-2 border-white w-full rounded-xl mb-3">
                        <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">FAQs</div>
                        <div className=" text-3xl font-light pl-10 pb-10 text-center">
                            Do you still have questions about the event?
                            <br />
                            Feel free to contact us at [TODO EMAIL]
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

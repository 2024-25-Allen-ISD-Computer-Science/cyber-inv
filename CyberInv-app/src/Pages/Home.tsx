import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cyb1 from "@/gal/cybinv1.jpg";
import cyb2 from "@/gal/cybinv2.jpg";
import cyb3 from "@/gal/cybinv3.jpg";
import cyb4 from "@/gal/cybinv4.jpg";
import cyb5 from "@/gal/cybinv5.jpg";
import cyb6 from "@/gal/cybinv6.jpg";
import cyb7 from "@/gal/cybinv7.jpg";
import cyb8 from "@/gal/cybinv8.jpg";
import cyb9 from "@/gal/cybinv9.jpg";
import Countdown from 'react-countdown';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function Home() {
// Define the target date: March 15, 2025
const targetDate = new Date('2025-03-15T00:00:00');

// Countdown renderer function
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex flex-row gap-5">
      {/* Days */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-7xl text-red-300 p-4 rounded-md animate-pulse">{String(days).padStart(2, '0')}</div>
        </div>
        Days
      </div>
      {/* Hours */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-7xl  text-red-300  p-4 rounded-md animate-pulse">{String(hours).padStart(2, '0')}</div>
        </div>
        Hours
      </div>
      {/* Minutes */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-7xl  text-red-300  p-4 rounded-md animate-pulse">{String(minutes).padStart(2, '0')}</div>
        </div>
        Minutes
      </div>

      {/* Seconds */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="text-7xl  text-red-300  p-4 rounded-md animate-pulse">{String(seconds).padStart(2, '0')}</div>
        </div>
      Seconds
      </div>
    </div>
  );
};
  return (
    <main className=" w-full min-h-screen flex flex-col bg-gradient-to-bl  font-sans">

      {/* Nav Bar */}
      <div className=" w-full">
        <div className="flex justify-center items-center text-center">
          {["Sponsors", "FAQ", "Last Year", "Meet the Team", "Sign Up", "Login"].map(
            (text) => {
              const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <a href={href}>
                  <div className="text-white p-5 text-xl" key={text}>
                    {text}
                  </div>
                </a>
              );
            }
          )}
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full h-screen  flex flex-col items-center  text-white ">
        {/* Eagle Logo and Title */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 h-full pt-[5vh]">
          {/* Eagle Icon */}
          <div className=" w-72 h-72 z-20 my-0">
            <img
              src="/favicon.ico"

              width={500}
              height={500}
              alt="Eagle Logo"
            />
          </div>

          {/* Title */}
          <div className="text-5xl md:text-6xl font-bold z-20">
            Allen Cyber <br /> Invitational
          </div>
        </div>

        {/* Sign Up */}
        <div className="w-full h-[50vh]">
          <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl">
            <a href="/Signup">
              <button className="bg-violet-500 text-white py-4 px-6 rounded-xl shadow-xl shadow-zinc-400/10 hover:cursor-pointer opacity-100 z-10 hover:bg-violet-600 ease-in-out duration-200">
                Sign Up
              </button>
            </a>

            <a href="/Login">

              <button className="bg-blue-500 text-white py-4 px-6 rounded-xl shadow-xl shadow-zinc-400/10 hover:cursor-pointer opacity-100 z-10 hover:bg-slate-500 ease-in-out duration-200">
                Login
              </button>
            </a>
          </div>
          {/* Learn More */}
          <div className=" animate-bounce flex flex-col justify-center items-center text-center text-2xl mt-[25vh]">
            Learn more
            <br />
            <div className=" mt-3">
              &#9660;
            </div>
          </div>
        </div>
      </section>
      {/* links Section */}
      <section className="py-[3vh] bg-slate-800/30 border-y z-20 mt-10 ">
        <div className="flex flex-col justify-center items-center">

          <div className="text-white text-2xl font-light mb-5">
            Get In Touch
          </div>
          <div className="flex flex-row text-white">
            <MdEmail style={{ fontSize: '40px', color: 'gray' }} className="hover:cursor-pointer mr-2 ml-2" />
            <AiOutlineDiscord style={{ fontSize: '40px', color: '#7289DA' }} className="hover:cursor-pointer mr-2 ml-2" />
            <FaInstagram style={{ fontSize: '40px', color: '#E4405F' }} className="hover:cursor-pointer mr-2 ml-2" />
          </div>
        </div>
      </section>
      {/* Countdown */}
      <section className="opacity-100  gap-5 flex items-center justify-center text-center z-10 h-[50vh] mb-20">
        <div className="rounded-3xl">
          <div className="flex  justify-center items-center text-center text-5xl p-10 text-violet-500 font-extrabold">
            COUNTDOWN TIMER
          </div>
          <Countdown date={targetDate} renderer={renderer} />
          </div>
      </section>

      {/* FAQ Section */}
      <section className="opacity-100 flex z-10 min-h-screen w-full mb-20 justify-center items-center font-bold">
        <div className="flex flex-col w-[80vw]">
          <div className="border-2 border-white w-full rounded-xl mb-3">
            <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">FAQ</div>
            <div className=" text-3xl font-light pl-10 pb-10 text-center">
              Do you still have questions about the event?<br />
              Feel free to contact us at abelsemahagen@student.allenisd.org
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-cols-2 gap-5 text-3xl">
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the location?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the price?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>When does it start?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I need prior cybersecurity knowledge?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Are there any prizes?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What is the schedule for the day?</AccordionTrigger>
                  <AccordionContent className="text-2xl">
                    TBD
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>





      {/*Meet the team*/}
      <section className="opacity-100 gap-5 flex z-10 h-[70vh] w-[80vw] mb-20">




      </section>

      {/* Gallery Section */}
      <section className=" w-full min-h-screen z-10">

        <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">Last Years Event!</div>

        {/* Gallery items */}
        <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 z-10">
          {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map(
            (image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-cover h-full w-full hover:zoom-in-75"
                />
              </div>
            )
          )}
        </div>
      </section>


    </main>
  );
}
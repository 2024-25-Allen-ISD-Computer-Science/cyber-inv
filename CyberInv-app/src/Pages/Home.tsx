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
import TimerComp from "@/components/TimerComp";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

export default function Home() {


  return (
    <main className=" w-full min-h-screen flex flex-col bg-gradient-to-bl  font-sans">
      {/* Nav Bar */}
      <div className=" w-full">
        <div className="flex justify-center items-center text-center">
          {["Sponsors", "FAQ", "Last Year", "Meet the Team"].map(
            (text) => {
              const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <a href={href} key={text}>
                  <div className=" p-5 text-xl" key={text}>
                    {text}
                  </div>
                </a>
              );
            }
          )}
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full h-screen flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 h-full pt-[5vh]">
          <div className=" w-72 h-72 z-20 my-0">
            <img
              src="/favicon.ico"
              width={500}
              height={500}
              alt="Eagle Logo"
              className="fill-accent"
            />
          </div>

          <div className="text-5xl md:text-6xl font-bold z-20">
            Allen Cyber <br /> Invitational
          </div>
        </div>

        {/* Sign Up */}
        <div className="w-full h-[50vh]">
          <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white">
            <a href="/Signup">
              <button className="bg-violet-500 py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-violet-600 ease-in-out duration-200">
                Sign Up
              </button>
            </a>

            <a href="/Login">
              <button className="bg-blue-500 text-accent py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-blue-700 ease-in-out duration-200">
                Login
              </button>
            </a>
          </div>
          <div className=" animate-bounce flex flex-col justify-center items-center text-center text-2xl mt-[25vh]">
            Learn more
            <br />
            <div className="mt-3">&#9660;</div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="sponsors" className="py-[3vh] bg-slate-800/30 border-y z-20 mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-accent text-2xl font-light mb-5">Get In Touch</div>
          <div className="flex flex-row text-accent">
            <MdEmail style={{ fontSize: "40px", color: "gray" }} className="hover:cursor-pointer mr-2 ml-2" />
            <AiOutlineDiscord style={{ fontSize: "40px", color: "#7289DA" }} className="hover:cursor-pointer mr-2 ml-2" />
            <FaInstagram style={{ fontSize: "40px", color: "#E4405F" }} className="hover:cursor-pointer mr-2 ml-2" />
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section id="meet-the-team" className="opacity-100 gap-5 flex items-center justify-center text-center z-10 h-[50vh] mb-20">
        <div className="rounded-3xl">
          <div className="flex justify-center items-center text-center text-5xl p-10 text-violet-500 font-extrabold">
            COUNTDOWN TIMER
          </div>
          <TimerComp/>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="opacity-100 flex z-10 min-h-screen w-full mb-20 justify-center items-center font-bold">
        <div className="flex flex-col w-[80vw]">
          <div className="border-2 border-white w-full rounded-xl mb-3">
            <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">FAQ</div>
            <div className=" text-3xl font-light pl-10 pb-10 text-center">
              Do you still have questions about the event?<br />
              Feel free to contact us at abelsemahagen@student.allenisd.org
            </div>
          </div>

          <div className="grid grid-flow-row md:grid-cols-2 gap-5 text-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the location?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What is the price?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>When does it start?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need prior cybersecurity knowledge?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there any prizes?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What is the schedule for the day?</AccordionTrigger>
                <AccordionContent className="text-2xl">TBD</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="last-year" className="w-full min-h-screen z-10">
        <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">Last Year's Event!</div>
        <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 z-10">
          {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map((image, index) => (
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
          ))}
        </div>
      </section>
    </main>
  );
}

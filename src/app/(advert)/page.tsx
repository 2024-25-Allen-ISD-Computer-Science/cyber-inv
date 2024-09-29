import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import cyb1 from "@/app/gal/cybinv1.jpg";
import cyb2 from "@/app/gal/cybinv2.jpg";
import cyb3 from "@/app/gal/cybinv3.jpg";
import cyb4 from "@/app/gal/cybinv4.jpg";
import cyb5 from "@/app/gal/cybinv5.jpg";
import cyb6 from "@/app/gal/cybinv6.jpg";
import cyb7 from "@/app/gal/cybinv7.jpg";
import cyb8 from "@/app/gal/cybinv8.jpg";
import cyb9 from "@/app/gal/cybinv9.jpg";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  return (
    <main className="relative w-full h-full bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      {/* Blobs */}
      {/* Blob 1 */}
      <div
        className=" animate-pulse absolute -top-4 right-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "rotate(45deg)" }}
      ></div>
      {/* Blob 2 */}
      <div
        className="animate-pulse delay-500 absolute left-1/2 w-[400px] h-[400px] bg-violet-300 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"
        style={{ transform: "rotate(-30deg)" }}
      ></div>
      {/* Blob 3 */}
      <div
        className="absolute left-1/2 right-1/3 w-[450px] h-[450px] bg-blue-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2"
        style={{ transform: "rotate(60deg)" }}
      ></div>

      {/* Main Section */}
      <section className="w-full h-screen flex flex-col items-center justify-between text-white relative z-10">
        {/* Eagle Logo and Title */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 h-full">
          {/* Eagle Icon */}
          <div className="relative w-72 h-72 z-20 my-20">
            <Image
              src="/favicon.ico"
              priority // Replace with actual logo path
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

        {/* Footer Section - Made in collaboration */}
        <div className="w-full py-4 bg-gray-50 bg-opacity-10 border-y border-gray-500 z-20">
          <div className="text-center text-2xl text-gray-200/60 mb-4">
            Made in collaboration with
          </div>

          {/* Collaboration Logos */}
          <div className="flex justify-center space-x-16"></div>
        </div>
      </section>

      {/* Placeholder for Additional Sections */}
      <section className="w-full h-full px-4 flex flex-col justify-center place-content-center gap-5">
        {/* Responsive grid layout */}
        <div className="inline-flex justify-center gap-x-10 my-10">
          <Link href={"#"}>
            <AiOutlineDiscord className="size-24 hover:fill-blue-400" />
          </Link>
          <Link href={"https://www.instagram.com/allencyberinvitational/"}>
            <FaInstagram className="size-24 hover:fill-violet-400" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-black bg-opacity-30 p-10 rounded-3xl h-full">
              <h1 className="text-5xl text-center font-bold underline">
                Information
              </h1>
              <div className="text-9xl font-bold text-center flex justify-center place-content-center p-5">
                TBD
              </div>
            </div>

            <div className="bg-black bg-opacity-30 p-10 rounded-3xl h-full">
              <h1 className="text-5xl text-center font-bold underline">
                TimeLine
              </h1>
              <div className="text-9xl font-bold text-center flex justify-center place-content-center p-5">
                TBD
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-black bg-opacity-30 p-10 rounded-3xl h-full">
              <h1 className="text-5xl text-center font-bold underline">
                Prizes
              </h1>

              <div className="text-9xl font-bold text-center  w-full md:p-5">
                <div className="flex space-x-4 items-end h-96 w-full  justify-center place-content-center">
                  <div className="flex flex-col justify-end items-center w-28 h-40 rounded-md bg-zinc-900">
                    <div className="w-full h-20 mb-2 "></div>
                    <span className="text-2xl mb-2">$$$</span>
                    <span className="text-3xl">3rd</span>
                  </div>

                  <div className="flex flex-col justify-end items-center w-36 h-52 rounded-md bg-zinc-900">
                    <div className="w-full h-28 mb-2 "></div>
                    <span className="text-3xl mb-2">$$$$$</span>
                    <span className="text-3xl">1st</span>
                  </div>

                  <div className="flex flex-col justify-end items-center w-32 h-48 rounded-md bg-zinc-900">
                    <div className="w-full h-24 mb-2 "></div>
                    <span className="text-2xl mb-2">$$$$</span>
                    <span className="text-3xl">2nd</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-30 p-10 rounded-3xl h-full">
              <h1 className="text-5xl text-center font-bold underline">FAQ</h1>
              <div className="text-lg flex justify-center place-content-center p-5">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it
                      if you prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-30 p-10 rounded-3xl w-full">
          <h1 className="text-7xl text-center font-bold underline">
            Brought to you by!
          </h1>

          {/* Carousel wrapper */}
          <div className="flex justify-center mt-10">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="grid grid-cols-3 gap-6 h-fit justify-items-center">
                    {/* Each person */}
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 1
                      </div>
                      <div className="text-lg text-center">Role 1</div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 2
                      </div>
                      <div className="text-lg text-center">Role 2</div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 3
                      </div>
                      <div className="text-lg text-center">Role 3</div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="grid grid-cols-3 gap-6 h-fit justify-items-center">
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 4
                      </div>
                      <div className="text-lg text-center">Role 4</div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 5
                      </div>
                      <div className="text-lg text-center">Role 5</div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                      <div className="rounded-full bg-gray-300 md:h-32 md:w-32 h-16 w-16"></div>
                      <div className="text-lg font-bold mt-4 text-center">
                        Person 6
                      </div>
                      <div className="text-lg text-center">Role 6</div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="relative w-full h-full">
        {/* Fade-out shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {/* Gallery items */}
          {[cyb1, cyb2, cyb3, cyb4, cyb5, cyb6, cyb7, cyb8, cyb9].map(
            (image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  placeholder="blur"
                  className="object-cover h-full w-full hover:zoom-in-75"
                />
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

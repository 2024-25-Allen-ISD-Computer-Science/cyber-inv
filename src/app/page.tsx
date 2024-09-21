import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import cyb1 from "@/app/gal/cybinv1.jpg";
import cyb2 from "@/app/gal/cybinv2.jpg";
import cyb3 from "@/app/gal/cybinv3.jpg";
import cyb4 from "@/app/gal/cybinv4.jpg";
import cyb5 from "@/app/gal/cybinv5.jpg";
import cyb6 from "@/app/gal/cybinv6.jpg";
import cyb7 from "@/app/gal/cybinv7.jpg";
import cyb8 from "@/app/gal/cybinv8.jpg";
import cyb9 from "@/app/gal/cybinv9.jpg";

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
              src="/favicon.ico" // Replace with actual logo path
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
          <div className="text-center text-2xl text-gray-200 mb-4">
            Made in collaboration with
          </div>

          {/* Collaboration Logos */}
          <div className="flex justify-center space-x-16"></div>
        </div>
      </section>

      {/* Placeholder for Additional Sections */}
      <section className="w-full h-full px-4 flex flex-col justify-center place-content-center gap-5">
        <div className="bg-black bg-opacity-30 p-10 rounded-3xl w-full">
          <h1 className="text-7xl text-center font-bold underline">
            Social Links
          </h1>

          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 h-fit justify-center place-items-center mt-10 w-full">
            {/* Each person */}
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
            </div>
          </div>
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
              <div className="text-9xl font-bold text-center flex justify-center place-content-center p-5">
                <div></div>
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

          {/* Responsive grid layout */}
          <div className="border-white border-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 h-fit justify-items-center mt-10">
            {/* Each person */}
            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>

            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>

            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>

            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>

            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>

            <div className="flex flex-col items-center h-full">
              <div className="rounded-full bg-gray-300 h-32 w-32"></div>
              <div className="text-lg font-bold mt-4 text-center">
                Name of the person
              </div>
              <div className="text-lg text-center">Role of the person</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full">
        {/* <h1 className="text-7xl text-center font-bold underline mb-10">
          Gallery
        </h1> */}
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
            )
          )}
        </div>
      </section>
    </main>
  );
}

import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import cyb1 from "@/gal/cybinv1.jpg";
import cyb2 from "@/gal/cybinv2.jpg";
import cyb3 from "@/gal/cybinv3.jpg";
import cyb4 from "@/gal/cybinv4.jpg";
import cyb5 from "@/gal/cybinv5.jpg";
import cyb6 from "@/gal/cybinv6.jpg";
import cyb7 from "@/gal/cybinv7.jpg";
import cyb8 from "@/gal/cybinv8.jpg";
import cyb9 from "@/gal/cybinv9.jpg";
import FAQ from "@/components/FAQ";
import TimerComp from "@/components/TimerComp";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

export default function Home() {


  return (
    <main className=" w-full flex flex-col bg-gradient-to-bl font-sans overflow-x-hidden">
      {/* Nav Bar */}
      <div className=" w-full">
        <div className="flex justify-center items-center text-center">
          {["Sponsors", "FAQ", "Last Year", "Meet the Team", "Sign Up", "Login"].map(
            (text) => {
              const href = `#${text.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <a href={href} key={text}>
                  <div className=" p-5 text-2xl" key={text}>
                    {text}
                  </div>
                </a>
              );
            }
          )}
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full h-[100vh] flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left md:space-y-0 md:space-x-8 h-full">
          <div className=" w-81 h-81 z-20 my-0">
            <img
              src="/ico.svg"
              width={500}
              height={500}
              alt="Eagle Logo"
              className="fill-accent"
            />
          </div>

          <div className="text-9xl font-bold z-20">
            Allen Cyber <br /> Invitational
          </div>
        </div>

        {/* Sign Up */}
        <div className="w-full h-[50vh]">
          <div className="flex flex-row gap-5 justify-center items-center text-center text-3xl text-white -mt-[10vh]">
            <a href="/Signup">
              <button className="bg-violet-500 py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-violet-600 ease-in-out duration-200">
                Sign Up
              </button>
            </a>

            <a href="/Login">
              <button className="bg-blue-500 py-4 px-6 rounded-xl shadow-xl hover:cursor-pointer hover:bg-blue-700 ease-in-out duration-200">
                Login
              </button>
            </a>
          </div>
          <div className=" animate-bounce flex flex-col justify-center items-center text-center text-2xl mt-[15vh]">
            Learn more
            <br />
            <div className="mt-3">&#9660;</div>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section id="meet-the-team" className="opacity-100 gap-5 flex items-center justify-center text-center z-10 h-[50vh] mb-20">
        <div className="rounded-3xl">
          <div className="flex justify-center items-center text-center text-5xl p-10 text-violet-500 font-extrabold">
            COUNTDOWN TIMER
          </div>
          <TimerComp />
        </div>
      </section>

      {/* Meet The Team */}
      <section className="flex items-center justify-center flex-col">
        <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">Meet The Team</div>
        <Carousel className="mt-16">
          <CarouselContent>

            <CarouselItem className="basis-1/3"> <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center scale-125">
                  <div className="flex flex-col w-80 h-80">
                    <img
                      src={cyb1}
                      alt="headshot"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="text-center mt-5 text-2xl font-bold">Abel Semahagen</div>
                    <div className="text-center mt-2 text-lg font-light">Project Manager</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3"> <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center scale-125">
                  <div className="flex flex-col w-80 h-80">
                    <img
                      src={cyb3}
                      alt="headshot"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="text-center mt-5 text-2xl font-bold">Richard Jang</div>
                    <div className="text-center mt-2 text-lg font-light">Project Manager</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3"> <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center scale-125">
                  <div className="flex flex-col w-80 h-80">
                    <img
                      src={cyb6}
                      alt="headshot"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="text-center mt-5 text-2xl font-bold">Darrion Nguyen</div>
                    <div className="text-center mt-2 text-lg font-light">Project Manager</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3"> <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center scale-125">
                  <div className="flex flex-col w-80 h-80">
                    <img
                      src={cyb8}
                      alt="headshot"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div className="text-center mt-5 text-2xl font-bold">Tanay Sreedharan</div>
                    <div className="text-center mt-2 text-lg font-light">Project Manager</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="opacity-100 flex z-10 min-h-screen w-full mb-20 justify-center items-center font-bold -mt-20">
        <div className="flex flex-col w-[80vw]">
          <div className="border-2 border-white w-full rounded-xl mb-3">
            <div className="text-violet-500 text-6xl font-bold pl-10 pt-10 pb-7 text-center">FAQ</div>
            <div className=" text-3xl font-light pl-10 pb-10 text-center">
              Do you still have questions about the event?<br />
              Feel free to contact us at abelsemahagen@student.allenisd.org
            </div>
          </div>

          <FAQ />

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

      {/* Footer */}
      <div className="w-screen bg-zinc-900 p-8 flex justify-center mt-[50vh]">
        <div className="flex flex-col w-11/12 lg:w-5/6 items-center text-white">
          <div className="w-full flex items-center justify-evenly">
            <div className="w-1/4 lg:w-1/3 bg-zinc-100 h-0.5"></div>
            <div className="w-1/2 lg:w-1/3 flex flex-row justify-evenly border-zinc-100 items-center">
              <a href="mailto:allencyberinvitational@gmail.com"><SiGmail /></a>
              <a href=""><FaInstagram /></a>
              <a href=""><FaDiscord /></a>
              <a href=""><FaLinkedin /></a>
            </div>
            <div className="w-1/4 lg:w-1/3 bg-zinc-100 h-0.5"></div>
          </div>
          <div className="flex items-center gap-3 my-3">
            <img src={"/ico.svg"} className="w-20 h-20" />
            <div className="text-white font-bold tracking-widest text-lg lg:text-3xl text-center">Allen Cyber Invitational</div>
          </div>
          <div className="text-sm lg:text-base">Copyright @ 2024 Allen Cyber Invitational</div>
        </div>
      </div>

    </main>
  );
}

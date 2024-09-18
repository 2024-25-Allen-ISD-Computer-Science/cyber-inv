import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-gradient-to-r from-gray-900 to-black ">
      {/* Main Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-white">
        {/* Eagle Logo and Title */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4 overflow-hidden">
          {/* Eagle Icon */}
          <div className="relative w-full h-screen flex flex-col items-center justify-center text-white ">
            {/* Eagle Icon Backgrounds */}
            <div className="absolute w-1/3 h-full rounded-full blur-3xl bg-violet-400 mr-auto opacity-30 -rotate-45"></div>
            <div className="absolute w-1/6 h-full rounded-full blur-3xl bg-blue-400 ml-96 opacity-30 rotate-12 z-30"></div>

            {/* Main Content */}
            <div className="z-20 flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
              {/* Eagle Logo */}
              <Image
                src="/favicon.ico"
                width={550}
                height={550}
                alt="Eagle Logo"
                className="z-20"
              />
              {/* Title */}
              <div className="text-4xl font-bold">Allen Cyber Invitational</div>
            </div>
          </div>

          {/* Title */}
        </div>

        {/* Footer Section with Collaboration Logos */}
        <div className="text-center text-2xl text-gray-200">
          Made in collaboration with
        </div>
        <div className="w-full py-4 bg-gray-50 bg-opacity-10 border-y border-gray-200 overflow-x-auto">
          <div className="flex justify-center space-x-8">
            {/* Collaboration Logos */}
            <Image
              src="/favicon.ico" // Replace with actual logo paths
              width={80}
              height={80}
              alt="MD7 Logo"
            />
            <Image
              src="/favicon.ico" // Replace with actual logo paths
              width={80}
              height={80}
              alt="AFA Logo"
            />
            <Image
              src="/favicon.ico" // Replace with actual logo paths
              width={80}
              height={80}
              alt="The Walker Group Logo"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-screen p-2">
          <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 ">
              
          </div>

      </section>
    </main>
  );
}

import * as motion from "framer-motion/client"
import Image from 'next/image';
import ico from '~/images/ico.svg';

export default function Main() {
    return (
        <section className="w-full h-[100vh] flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left md:space-y-0 md:space-x-8 h-full">
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
                    <Image src={ico} width={500} height={500} alt="Eagle Logo" className="" />
                </motion.div>

                {/* Title Animation */}
                <motion.div 
                    className="text-9xl font-bold z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Allen Cyber <br /> Invitational
                </motion.div>
            </div>

            {/* Sign Up Section with animation */}
            <div className="w-full h-[50vh]">
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
                </div>

                {/* Learn more section with bounce animation */}
                <motion.div 
                    className="animate-bounce flex flex-col justify-center items-center text-center text-2xl mt-[15vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Learn more
                    <br />
                        &#9660;
                </motion.div>
            </div>
        </section>
    );
}

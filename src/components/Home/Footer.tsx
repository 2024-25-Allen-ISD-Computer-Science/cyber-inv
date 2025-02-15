import BLUR1 from "~/BLUR1.svg"
import BLUR3 from "~/BLUR3.svg"
import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/20 py-6 flex flex-col md:flex-row justify-between items-center text-center px-6 md:px-24">
            {/* Background Accent */}
            <div className="absolute inset-0 w-full h-full -z-30 overflow-hidden pointer-events-none">
                <Image src={BLUR1} alt="blur1" layout="fill" objectFit="cover" className="opacity-25" />
            </div>

            <div className="text-sm md:text-base">© {new Date().getFullYear()} Allen CS Forum</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://discord.gg/qJJNqgxCnk" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="size-8 md:size-10 hover:text-blue-500 transition-colors duration-200" />
                </a>
                <a href="https://instagram.com/allen.cyber.inv" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="size-8 md:size-10 hover:text-purple-400 transition-colors duration-200" />
                </a>
            </div>

            {/* Second Background Accent */}
            <div className="absolute inset-0 w-full h-full -z-30 overflow-hidden pointer-events-none">
                <Image src={BLUR3} alt="blur3" layout="fill" objectFit="cover" className="opacity-25" />
            </div>
        </footer>
    );
}

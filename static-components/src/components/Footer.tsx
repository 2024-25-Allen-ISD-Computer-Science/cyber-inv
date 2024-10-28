import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Logo from "../assets/logos/ACI_Logo.svg";

export default function Footer() {
    return (
        <>
        <div className="w-screen bg-zinc-900 p-8 flex justify-center">
            <div className="flex flex-col w-11/12 lg:w-5/6 items-center">
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
                    <img src={Logo} className="w-20 h-20" />
                    <div className="text-white font-bold tracking-widest text-lg lg:text-3xl text-center">Allen Cyber Invitational</div>
                </div>
                <div className="text-sm lg:text-base">Copyright @ 2024 Allen Cyber Invitational</div>
            </div>
        </div>
        </>
    );
}
import { SiGmail, SiDiscord, SiInstagram, SiLinkedin } from 'react-icons/si';
import Image from 'next/image';
import ico from '~/images/ico.svg';

export default function Footer() {
    return (
        <div className="bg-zinc-900 p-8 flex justify-center mt-8 w-full">
            <div className="flex w-11/12 flex-col items-center text-white lg:w-5/6">
                <div className="flex w-full items-center justify-evenly">
                    <div className="h-0.5 w-1/4 bg-zinc-100 lg:w-1/3"></div>
                    <div className="flex w-1/2 flex-row items-center justify-evenly border-zinc-100 lg:w-1/3">
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
                    <div className="h-0.5 w-1/4 bg-zinc-100 lg:w-1/3"></div>
                </div>
                <div className="my-3 flex items-center gap-3">
                    <Image src={ico} width={20} height={20} className="h-20 w-20" alt="Cyber Invitational Icon" />
                    <div className="text-center text-lg font-bold tracking-wide text-white lg:text-3xl">
                        Allen Cyber Invitational
                    </div>
                </div>
                <div className="text-sm lg:text-base">Copyright &copy; 2024 Allen Cyber Invitational</div>
            </div>
        </div>
    );
}
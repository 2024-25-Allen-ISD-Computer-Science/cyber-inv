import { IoLogoInstagram } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Image1 from "../assets/images/compMedia1.jpg";
import CS_Squared from "../assets/logos/CSSquared_Logo.png";
// import SponsorCard from "../components/SponsorCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
export default function Home() {
    return (
        <>
         <Navbar />
        <div className="flex flex-col items-center bg-black">
            {/* Cover */}
            <div className="h-[45vh] w-full background1">
                <div className="w-full h-full grid grid-rows-1 ">
                    <div className="z-10 w-full h-full row-start-1 col-start-1 flex items-center justify-center textContainer">
                        <h1 className="text-center inter-800 text-5xl md:text-7xl text-white drop-shadow-lg">
                        Allen Cyber Invitational
                        </h1>
                    </div>
                <div className="w-full h-full row-start-1 col-start-1 bg-gradient-to-t from-black to-transparent pointer-events-none "></div>
                </div>
            </div>


            {/* Mission */}
            <div className="w-5/6 my-20 flex flex-col lg:flex-row justify-evenly items-center">
                <div className="flex flex-col m-5 lg:w-1/3 text-white">
                    <div className="text-2xl lg:text-4xl font-semibold tracking-widest text-center lg:text-start">Mission</div>
                    <div className="bg-white w-full h-0.5 my-3"></div>
                    <div className="text-sm lg:text-base tracking-wide">Our mission is to introduce students to the world of cybersecurity by allowing them to dip their toes into cybersecurity topics and ideas. Participants will solve Linux based puzzles covering major concepts used in cybersecurity, and the competition is designed for students who are new to the field as well as students with some experience.</div>
                </div>
                <div className="w-2/3 lg:w-1/3 flex items-center">
                    <img src={Image1} className="rounded-lg" />
                </div>
            </div>

            {/* Sponsors */}
            <div className="w-10/12 lg:w-7/12 my-20 flex flex-col justify-center items-center">
                <div className="text-2xl lg:text-4xl font-semibold tracking-widest text-white text-center">Sponsors</div>
                <div className="bg-white w-full h-0.5 my-5"></div>
                <div className="flex flex-col w-full lg:w-5/6">
                    <div className="card card-side card-bordered h-[30vh] w-full bg-base-100 my-5 p-2">
                        <div className="w-1/3 h-full p-4 flex items-center justify-center">
                            <img src={CS_Squared} className="w-11/12" />
                        </div>
                        <div className="divider divider-horizontal m-0"></div>
                        <div className="w-2/3 h-full p-4 flex flex-col justify-center">
                            <div className="text-white text-xl lg:text-3xl font-semibold tracking-widest self-center my-2">CS-Squared</div>
                            <div className="text-white text-sm lg:text-base my-1">Amount: </div>
                            <div className="text-white text-sm lg:text-base my-1">Contribution: </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="w-10/12 lg:w-7/12 h-[75vh] my-20 hidden lg:flex flex-row justify-evenly items-center">
                <div className="text-white text-2xl tracking-wide font-bold">
                    <div className="my-2"><span className="text-4xl text-blue-600">F</span>requently<br /></div>
                    <div className="my-2"><span className="text-4xl text-blue-600">A</span>sked<br /></div>
                    <div className="my-2"><span className="text-4xl text-blue-600">Q</span>uestions<br /></div>
                </div>
                <div className="w-0.5 h-96 bg-white"></div>
                <div className="w-1/2">
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" defaultChecked />
                        <div className="collapse-title text-white text-xl font-medium">How much will it cost?</div>
                        <div className="collapse-content">
                            <p>There is absolutely no entry fee! The STEM field can be quite expensive at times, and we would like to alleviate some of the financial burden for students taking their first steps into the field. This is made possible by our wonderful sponsors listed above.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">Will the competitors have to bring their own food?</div>
                        <div className="collapse-content">
                            <p>We will cater food during the event, but the food options will be quite limited default to dietary restrictions. Outside food may be brought in, but AHS Invitational will not cover the fee. We also ask that you clean up after yourself.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">Do I need previous experience to compete?</div>
                        <div className="collapse-content">
                            <p>No previous experience is required. Students will get their introduction to vital topics during the competition, which they will then use to solve CTF based puzzles.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">What is the competition like?</div>
                        <div className="collapse-content">
                            <p>The details of the competition will be explained during the introduction ceremony, but competitors will need a team member to compete. Feel free to register with someone you know, but if you do not have a team member in mind, check the box labeled "Assign me a random team member" while registering.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-10/12 my-20 flex lg:hidden flex-col justify-center items-center">
                <div className="text-2xl font-semibold tracking-widest text-white text-center">FAQ</div>
                <div className="bg-white w-full h-0.5 my-5"></div>
                <div className="w-full">
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" defaultChecked />
                        <div className="collapse-title text-white text-xl font-medium">How much will it cost?</div>
                        <div className="collapse-content">
                            <p>There is absolutely no entry fee! The STEM field can be quite expensive at times, and we would like to alleviate some of the financial burden for students taking their first steps into the field. This is made possible by our wonderful sponsors listed above.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">Will the competitors have to bring their own food?</div>
                        <div className="collapse-content">
                            <p>We will cater food during the event, but the food options will be quite limited default to dietary restrictions. Outside food may be brought in, but AHS Invitational will not cover the fee. We also ask that you clean up after yourself.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">Do I need previous experience to compete?</div>
                        <div className="collapse-content">
                            <p>No previous experience is required. Students will get their introduction to vital topics during the competition, which they will then use to solve CTF based puzzles.</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-0.5 my-5"></div>
                    <div className="collapse collapse-arrow bg-base-200 bg-transparent">
                    <input type="radio" name="FAQ" />
                        <div className="collapse-title text-white text-xl font-medium">What is the competition like?</div>
                        <div className="collapse-content">
                            <p>The details of the competition will be explained during the introduction ceremony, but competitors will need a team member to compete. Feel free to register with someone you know, but if you do not have a team member in mind, check the box labeled "Assign me a random team member" while registering.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-10/12 lg:w-7/12 mt-20 flex flex-col justify-center items-center h-[50vh]">
                <div className="text-2xl lg:text-4xl text-white font-semibold tracking-widest">Interested? Reach out!</div>
                <div className="w-full h-[30vh] text-4xl lg:text-7xl grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 justify-evenly items-center my-8">
                    <div className="w-24 h-24 hover:lg:w-32 hover:lg:h-32 flex justify-center items-center m-3 transition-all hover:lg:text-8xl hover:text-5xl text-[#d44638] bg-white rounded-full"><a href="mailto:allencyberinvitational@gmail.com"><SiGmail /></a></div>
                    <div className="w-24 h-24 hover:lg:w-32 hover:lg:h-32 flex justify-center items-center m-3 transition-all hover:lg:text-8xl hover:text-5xl text-[#ffffff] instagramGradient rounded-full"><a href=""><IoLogoInstagram /></a></div>
                    <div className="w-24 h-24 hover:lg:w-32 hover:lg:h-32 flex justify-center items-center m-3 transition-all hover:lg:text-8xl hover:text-5xl text-[#ffffff] bg-[#7289da] rounded-full"><a href=""><FaDiscord /></a></div>
                    <div className="w-24 h-24 hover:lg:w-32 hover:lg:h-32 flex justify-center items-center m-3 transition-all hover:lg:text-8xl hover:text-5xl text-[#0072b1] bg-[#ffffff] rounded-full"><a href=""><FaLinkedin /></a></div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
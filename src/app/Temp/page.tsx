"use client";

import Timer from "@/components/Timer";

export default function Tmp() {





    return (
        <main className="w-full h-full flex justify-center">
            <div className="rounded-3xl p-5 w-full max-w-4xl h-fit shadow-2xl">
                <div className="text-6xl text-center mb-5 font-bold tracking-wide">
                    Preparation
                </div>
                {/* Countdown Timer */}
                <div className="flex justify-center text-center p-8">
                    <Timer />
                </div>

                {/* Grid for Questions */}
                <div className="w-full grid grid-cols-1 gap-5 place-items-center">
                    <div className="text-center font-semibold mt-2">So what now??</div>


                    <div className="flex justify-center space-x-20 mt-8 mb-8">
                        {/* First Video Embed */}
                        <div className="w-full max-w-lg">
                            <div
                                className="relative overflow-hidden"
                                style={{ paddingTop: "56.25%" }}
                            >
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/videoseries?si=ARhkE1QeX9MPoRHl&amp;list=PLzVrhECG8ZbJJ0O5-AD8YCUbhv3ij2lC_"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className="text-center font-semibold mt-2">
                                Hey, Check out this playlist to get you ahead for the
                                competition.
                            </div>
                        </div>

                        {/* Second Video Embed */}
                        <div className="w-full max-w-lg">
                            <div
                                className="relative overflow-hidden"
                                style={{ paddingTop: "56.25%" }}
                            >
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/wjbbl0TTMeo?si=G41n8Ph3MEMJKuF2"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className="text-center font-semibold mt-2">
                                Hey, Check out this video to set up your laptop.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
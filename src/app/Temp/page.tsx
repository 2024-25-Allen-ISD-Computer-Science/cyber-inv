"use client";

import Timer from "@/components/Timer";
import Footer from '@/components/Footer'
import * as motion from 'framer-motion/client'

export default function Tmp() {

    return (
        <main className="flex h-full w-full flex-col items-center overflow-x-hidden">
            <div className="h-fit w-full max-w-4xl rounded-3xl p-5 shadow-2xl">
                <div className="mb-5 text-center text-5xl font-bold tracking-wide lg:text-6xl">Preparation</div>
                {/* Countdown Timer */}
                <div className="flex justify-center p-8 text-center">
                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 50,
                        }}
                    >
                        <Timer />
                    </motion.div>
                </div>

                {/* Grid for Questions */}
                <div className="grid w-full grid-cols-1 place-items-center gap-5">
                    <div className="mt-2 text-center font-semibold">So what now??</div>

                    <motion.div
                        className="w-81 h-81 z-20 my-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 50,
                        }}
                    >
                        <div className="mb-8 mt-8 flex justify-center space-x-20">
                            {/* First Video Embed */}
                            <div className="w-full max-w-lg">
                                <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute left-0 top-0 h-full w-full"
                                        src="https://www.youtube.com/embed/videoseries?si=ARhkE1QeX9MPoRHl&amp;list=PLzVrhECG8ZbJJ0O5-AD8YCUbhv3ij2lC_"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="mt-2 text-center font-semibold">
                                    Hey, Check out this playlist to get you ahead for the competition.
                                </div>
                            </div>

                            {/* Second Video Embed */}
                            <div className="w-full max-w-lg">
                                <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute left-0 top-0 h-full w-full"
                                        src="https://www.youtube.com/embed/wjbbl0TTMeo?si=G41n8Ph3MEMJKuF2"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="mt-2 text-center font-semibold">
                                    Hey, Check out this video to set up your laptop.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
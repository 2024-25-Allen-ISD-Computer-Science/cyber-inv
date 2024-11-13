import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import team from '@/data/team.json';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

export default function Team() {
    return (
        <div>
            <section id="meet-the-team" className="flex items-center justify-center flex-col mt-20">
                <motion.div
                    className="w-81 h-81 z-20 my-0"
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 0.9 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <div className="text-violet-500 text-6xl font-bold py-8 text-center">Meet The Team</div>
                    <Carousel className="w-full max-w-6xl p-2">
                        <CarouselContent className="flex items-center justify-between">
                            {team.map((member) => (
                                <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                                    <Card>
                                        <CardContent className="flex items-center justify-center h-max md:h-80 flex-col p-6 md:p-2">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={4032}
                                                height={3024}
                                                className="object-cover rounded-md w-3/5"
                                            />
                                            <span className="text-center mt-5 text-3xl font-bold">{member.name}</span>
                                            <span className="text-center mt-2 text-lg font-light">{member.title}</span>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </motion.div>
            </section>
        </div>
    );
}

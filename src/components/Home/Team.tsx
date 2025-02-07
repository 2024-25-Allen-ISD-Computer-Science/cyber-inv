import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import team from '@/data/team.json';
import Image from 'next/image';

export default function Team() {
    return (
        <div>
            <section id = "meet-the-team" className = "mt-20 flex flex-col items-center justify-center">
                <div className = "py-8 text-center text-6xl font-bold text-blue-500">Meet The Team!</div>
                <Carousel className = "w-full max-w-6xl p-2">
                    <CarouselContent className = "flex items-center justify-between">
                        {team.map((member) => (
                            <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                                <Card>
                                    <CardContent className="flex h-max flex-col items-center justify-center p-6 md:h-80 md:p-2">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={4032}
                                            height={3024}
                                            className="w-3/5 rounded-md object-cover"
                                        />
                                        <span className="mt-5 text-center text-3xl font-bold">{member.name}</span>
                                        <span className="mt-2 text-center text-lg font-light">{member.title}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    );
}

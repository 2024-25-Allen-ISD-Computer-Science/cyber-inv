"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/images/cybinv1.jpg",
  "/images/cybinv2.jpg",
  "/images/cybinv3.jpg",

  "/images/cybinv7.jpg",
  "/images/cybinv8.jpg",
];

export default function Car() {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <Carousel
        className="w-full max-w-7xl  overflow-hidden"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <div className="w-full h-full relative">
                <Image
                  src={src}
                  height={100}
                  width={900}
                  alt={`Carousel item ${index}`}
                  className="rounded-lg object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

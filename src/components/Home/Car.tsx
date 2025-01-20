"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const img: string[] = [
  "/images/cybinv1.jpg",
  "/images/cybinv2.jpg",
  "/images/cybinv3.jpg",
  "/images/cybinv4.jpg",
  "/images/cybinv5.jpg",
  "/images/cybinv6.jpg",
  "/images/cybinv7.jpg",
  "/images/cybinv8.jpg",
  "/images/cybinv9.jpg",
];

export default function Car() {
  return (
    <Carousel
      className="w-full max-w-sm"
      plugins={[
        Autoplay({
          delay: 10000,
        }),
     
      ]}
    >
      <CarouselContent className="flex w-full pl-0 items-center place-content-center">
        {img.map((image, i) => (
          <CarouselItem key={i} className="flex-shrink-0 w-full ">
            <Image
              src={image}
              alt={`Carousel item ${i}`}
              width={400} // Reduced width
              height={200} // Reduced height
              className=" w-full h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  );
}

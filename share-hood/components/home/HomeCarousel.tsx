import * as React from "react";

import {Card, CardContent} from "@components/shad.ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/shad.ui/carousel";

import Image from "next/image";

interface HomeSliderProps {
  text: string;
  description?: string;
  image?: string;
}

export function HomeCarousel({text, description, image}: HomeSliderProps) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({length: 5}).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center rounded-lg bg-defaultBgBlue p-5">
                  <div className="flex flex-col space-y-2 text-white">
                    <span className="text-sm font-semibold">{text}</span>
                    <span className="text-xs">{description}</span>
                  </div>
                  <Image
                    src={image || "/default-image.png"}
                    alt="home-slider-image"
                    width={300}
                    height={300}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

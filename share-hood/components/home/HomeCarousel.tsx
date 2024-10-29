"use client";

import React from "react";

import {Card, CardContent} from "@components/shad.ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@components/shad.ui/carousel";

import Image from "next/image";

interface HomeSliderProps {
  text: string;
  description?: string;
  image?: string;
}

export default function HomeCarousel({text, description, image}: HomeSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi}>
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
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
      <div className="mt-1 text-center text-xs">
        {current} / {count}
      </div>
    </div>
  );
}

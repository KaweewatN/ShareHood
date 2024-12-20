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
import {mockCarousels} from "src/constants/mockData";

export default function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrent(index);
    }
  };

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {Array.isArray(mockCarousels) &&
            mockCarousels?.map((data, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center rounded-lg bg-defaultBgBlue p-5">
                      <div className="flex flex-col space-y-2 text-white">
                        <span className="text-sm font-semibold">{data.text}</span>
                        <span className="text-xs">{data.description}</span>
                      </div>
                      <Image
                        src={data.image || "/default-image.png"}
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
      <div className="mt-1 flex justify-center space-x-2">
        {Array.from({length: count}).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 cursor-pointer rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Imgchanger = ({
  Lists,
  folder,
}: {
  Lists: any[];
  folder: string;
}) => {
  return (
    <div className="m-10">
      <h1 className="text-center m-5 font-bold underline text-2xl">
        {folder} History
      </h1>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-xs h-80">
          <CarouselContent>
            {Lists.map((props: any, index: number) => (
              <CarouselItem key={props.name}>
                <div className="p-1">
                  <Card>
                    <div className="text-center">
                      <div className="m-2">
                        <a href={props.URL}>{props.name}</a>
                      </div>
                      <p className="text-sm">{props.years}</p>
                    </div>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold"></span>
                      <Image
                        src={`/img/${folder}/${folder}${index + 1}.jpeg`}
                        alt={props.name}
                        width={250}
                        height={250}
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
      </div>
    </div>
  );
};

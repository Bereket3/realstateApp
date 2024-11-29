"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import cardValue from "./constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Real estate search&nbsp;</span>
        <span className={title({ color: "violet" })}>simplified&nbsp;</span>
        <br />
        <span className={subtitle({ class: "mt-4" })}>
          Let's help you find your real estate in Ethiopia <br />
        </span>
      </div>

      <div className="flex items-center  max-w-md rounded-full overflow-hidden shadow">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-[#EAEAF4] placeholder-gray-500 px-4 py-2 focus:outline-none"
        />
        <button className="bg-accent-400 text-white px-4 py-2 hover:bg-accent-200 transition ease-in-out duration-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-8      "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m-3.15 0A7 7 0 1117 10a7 7 0 01-3.15 6.65z"
            />
          </svg>
        </button>
      </div>

      <div className="text-[2.5rem] font-bold text-accent-400  text-center justify-center mt-[80px] md:mt-[130px]">
        Featured Properties
      </div>

      <div className="w-[80%] mt-20">
        <Carousel
          className="w-full  "
          plugins={[
            // @ts-ignore
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="flex justify-between ml-2 ">
            {cardValue.map((d) => (
              <CarouselItem
                key={d.id}
                className="lg:basis-1/3 hover:shadow-2xl transition-transform hover:scale-105"
              >
                <div className="md:flex md:space-x- px-15">
                  <div>
                    {d.discription}
                    <div className="border-b-2 w-[180px] border-accent-400 mb-2"></div>
                    {d.bedroom} bedrooms <br />
                    {d.bathroom} bathrooms
                  </div>
                  <div>
                    {d.price} <br />
                    {d.location}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

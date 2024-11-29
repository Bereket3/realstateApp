import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

} from "@/components/ui/carousel";
import cardValue from "@/app/constants";
import Autoplay from "embla-carousel-autoplay";
import SampleImage from "@/public/assets/background-image-1.jpg";
import Image from "next/image";


export default function CarousalComponent() {
  return <section
    className="flex flex-col justify-center gap-12 pb-24"
  >
    <div className="text-[2.5rem] font-bold text-accent-400 text-center justify-center mt-[80px] md:mt-[130px]">
      Featured Properties
    </div>

    <div className="w-[90%] mt-20 mx-auto">
      <Carousel
        className="w-full"
        plugins={[
          // @ts-ignore
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="flex justify-between">
          {cardValue.map((d) => (
            <CarouselItem
              key={d.id}
              className="lg:basis-1/3 hover:shadow-2xl transition-transform hover:scale-100"
            >
              <div className="flex flex-col m-2 justify-center content-center">
                <Image
                  src={SampleImage.src}
                  width={SampleImage.width}
                  height={SampleImage.height}
                  alt="sample image"
                  className="rounded-lg object-cover"
                />
                <div className="flex">
                  {d.discription}
                  {d.bedroom} bedrooms <br />
                  {d.bathroom} bathrooms
                </div>
                <div className="flex">
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
}

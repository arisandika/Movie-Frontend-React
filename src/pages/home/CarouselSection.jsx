import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Play } from "lucide-react";

const CarouselSection = () => (
  <div className="relative mt-4 overflow-hidden aspect-[2/1] rounded-xl">
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <img
              src="/assets/images/cover/themarvels_lob_mas_min_mob_01.jpg"
              alt="Featured Movie"
              className="object-cover w-full aspect-[2/1]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-4 transition rounded-full bg-light/20 backdrop-blur-sm hover:bg-light/30">
                <Play className="w-4 h-4" fill="light" />
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
);

export default CarouselSection;

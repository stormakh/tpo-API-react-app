import React, { useState, useEffect, useCallback, ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import { cn } from "@/lib/utils";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
};

const EmblaCarouselThumbs: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    {
      containScroll: "keepSnaps",
      dragFree: true,
      watchSlides: true,
    },
    [Autoplay({ playOnInit: true, delay: 10 })]
  );

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section
      className={cn(props.className, "embla h-full flex flex-col relative m-0")}
    >
      <div className="embla__viewport flex-initial " ref={emblaMainRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide h-full" key={index}>
              <div className="embla__slide__number border-none shadow-none h-full">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs w-full flex-grow">
        <div className="embla-thumbs__viewport h-full" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container h-full  grid grid-cols-2 lg:grid-cols-4  gap-2">
            {slides.map((slide, index) => (
              <Thumb
                slide={slide}
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselThumbs;

import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'

type PropType = {
  slides: ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla h-full relative" >
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          
          {slides.map((slide,index) => (
            <div className="embla__slide h-full" key={index}>
              <div className="embla__slide__number border-none shadow-none h-full">{slide}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute flex flex-row items-center justify-center w-full h-auto bottom-4 ">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot  '.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

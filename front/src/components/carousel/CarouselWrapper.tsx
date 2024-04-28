import React, { ReactNode } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import EmblaCarousel from './EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'

interface CarouselWrapperProps {
    slides: ReactNode[]
    options?: EmblaOptionsType
    children? : ReactNode
    ratio?: number
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ children,slides,options,ratio }: CarouselWrapperProps) => {
    return (
        <AspectRatio className="relative bg-stone-300" ratio={ratio}>
            {children}
            <EmblaCarousel slides={slides} options={options} />
        </AspectRatio>
    );
};

export default CarouselWrapper;
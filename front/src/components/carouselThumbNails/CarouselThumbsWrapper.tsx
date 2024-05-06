import React, { ReactNode } from 'react';
import { AspectRatio } from '../ui/aspect-ratio';
import EmblaCarousel from './EmblaCarouselThumbs';
import { EmblaOptionsType } from 'embla-carousel'
import { cn } from '@/lib/utils';

interface CarouselWrapperProps {
    slides: ReactNode[]
    options?: EmblaOptionsType
    children? : ReactNode
    ratio?: number
    className?: string
}

const CarouselThumbsWrapper: React.FC<CarouselWrapperProps> = ({ children,slides,options,ratio ,className}: CarouselWrapperProps) => {
    return (
        <AspectRatio className={cn("relative bg-stone-300", className)} ratio={ratio}>
            {children}
            <EmblaCarousel slides={slides} options={options} />
        </AspectRatio>
    );
};

export default CarouselThumbsWrapper;
import CarouselWrapper from "../carousel/CarouselWrapper";

import { Skeleton } from "../ui/skeleton";

export default function CatalogSkeleton(){
    return (
    <div>
        <CarouselWrapper
          ratio={9 / 16}
          slides={[<Skeleton className="w-full h-full"/>]}
          options={{ loop: true }}
          className="min-w-[200px] "
        >
          <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
            <b>NEW</b> IN
          </p>
        </CarouselWrapper>
        <Skeleton className="w-full"/>
    
  </div>)
}
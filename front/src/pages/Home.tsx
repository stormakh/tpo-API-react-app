

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function () {
  return (
    <>
      
      <Carousel className="w-screen">
        <CarouselContent>
          <CarouselItem>
            <img src="src/assets/LogIn_Back.svg" className="object-fill"></img>
          </CarouselItem>
          <CarouselItem>
            <img src="src/assets/Carousel_2.svg" className="object-fill"></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
      <Card className="w-screen">
        <CardContent className="flex justify-center pt-36">
          <div className="flex flex-col justify-center items-center">
            <img src="src/assets/nopay.svg" className="w-54 pb-12"></img>
            <p className="text-left px-56 text-xl">
              Somos una marca nueva que promueve la excelencia en el diseño. Nos
              identificamos con las personas que nos eligen a través de
              experiencias de un sentido de pertenencia, de un estilo de vida,
              transmitiendo la energía y el amor del proceso creativo a cada una
              de nuestras prendas.
            </p>
          </div>
          <div className="flex-none pr-16">
            <img src="src/assets/nopay2.svg" className="w-96"></img>
          </div>
        </CardContent>
      </Card>
     
    </>
  );
}

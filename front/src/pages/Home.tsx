import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import nopay from "@/assets/nopay.svg";
import nopay2 from "@/assets/nopay2.svg";
import loginBack from "@/assets/LogIn_Back.svg";
import carousel2 from "@/assets/Carousel_2.svg";
import { Link } from "react-router-dom";
export default function () {
  return (
    <>
      <Carousel className="w-screen">
        <CarouselContent>
          <CarouselItem>
            <Link to={"catalog"}>
              <img src={loginBack} className="object-fill"></img>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <img src={carousel2} className="object-fill"></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
      <Card className="w-screen py-12">
        <CardContent className="flex justify-center gap-8 ">
          <div className="flex flex-col  justify-evenly items-center">
            <img src={nopay} className="w-54" alt="Logo"></img>
            <p className="text-left text-3xl px-48">
              Somos una marca nueva que promueve la excelencia en el diseño. Nos
              identificamos con las personas que nos eligen a través de
              experiencias de un sentido de pertenencia, de un estilo de vida,
              transmitiendo la energía y el amor del proceso creativo a cada una
              de nuestras prendas.
            </p>
          </div>
          <img src={nopay2} className="w-96" alt="Image"></img>
        </CardContent>
      </Card>
    </>
  );
}

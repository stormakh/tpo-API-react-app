import NavBarSeller from "@/components/NavBarSeller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
{
  /* Specific Product Details */
}
import { Save, CircleX, Ban } from "lucide-react";
export default function () {
  return (
    <>
      <NavBarSeller></NavBarSeller>
      <Banner text=""></Banner>
      <div className="flex justify-center pt-24 px-5">
        <div className="mx-12">
          <h1 className="pb-5 font-roboto font-semibold">
            PRODUCTOS PUBLICADOS / EDITAR PRODUCTO
          </h1>
          <Carousel className="w-full justify-center">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 bg-black">
                        <span className="text-4xl font-semibold text-white">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="mx-12 w-5/6 justify-center font-roboto">
          <h1 className="font-semibold">Campera de Cuero - Poco Uso</h1>
          <h2 className="my-4 font-semibold">Precio:</h2>
          <Input placeholder="Precio" className="w-3/4"></Input>
          <h2 className="my-4 font-semibold">Talle:</h2>
          <Input placeholder="Talle" className="w-3/4"></Input>
          <h2 className="my-4 font-semibold">Descipción:</h2>
          <Input
            placeholder="Text informativo del producto..."
            className="w-3/4 h-48 my-4 text-center font-semibold"
          ></Input>
          <div className="flex pl-40">
            <Button className="bg-transparent border-silk border-2 text-black mx-5">
              <Save /> Guardar Cambios
            </Button>
            <Button className="bg-transparent border-silk  border-2 text-black">
              <CircleX />
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

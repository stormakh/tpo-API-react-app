import Footer from "@/components/Footer";
import NavBarSeller from "@/components/NavBarSeller";
import { Save, CircleXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Banner from "@/components/Banner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const imageSources = [
  "src/assets/Sample_1.svg",
  "src/assets/Sample_2.svg",
  "src/assets/Sample_4.svg",
  "src/assets/Sample_3.svg",
];

const sizeSources = [
  "src/assets/Size_1.svg",
  "src/assets/Size_2.svg",
  "src/assets/Size_3.svg",
  "src/assets/Size_4.svg",
  "src/assets/Size_5.svg",
  "src/assets/Size_6.svg",
  "src/assets/Size_7.svg",
];

import { Camera, Pencil } from "lucide-react";
export default function () {
  return (
    <>
      <NavBarSeller></NavBarSeller>
      <Banner text="Mis Productos"></Banner>
      <section className="flex flex-col m-8">
        <h1 className=" pb-5 font-roboto  underline italic">
          Mis Productos / Editar
        </h1>
        <section className="w-svw h-auto flex sm:flex-row flex-col gap-8 items-start justify-center">
          <div className="flex flex-col">
            <img src="src/assets/Sample_Big.svg" className=""></img>
            <Carousel
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-fit"
            >
              <CarouselContent className="-mt-1">
                {imageSources.map((source, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/4 mt-6">
                    <div className="p-1">
                      <img src={source} className="mb-5"></img>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <a className="flex font-semibold">
              Añadir Fotos <Camera className="mx-5" />
            </a>
          </div>

          <Card className="max-w-96">
            <CardContent>
              <CardHeader>
                <h2 className="text-5xl font-bold">Jean Iron washed</h2>
                <h3 className=" font-roboto font-semibold my-5 text-3xl">
                  Precio
                </h3>
                <a className="pt-4 flex font-semibold">
                  $150.000 <Pencil className="mx-5 size-8" />
                </a>
              </CardHeader>
              <h3 className="font-roboto font-semibold my-5 text-3xl pl-5">
                Descripción
              </h3>
              <p className="pl-5 text-2xl">
                Sumérgete en un estilo casual con nuestro jean azul desgastado.
                Su corte holgado y detalles de costuras visibles ofrecen
                comodidad y estilo. Combínalo con una camiseta simple o una
                camisa para cualquier ocasión.
              </p>
              <h2 className="font-roboto font-semibold my-5 text-3xl pl-5">
                Talles
              </h2>
              <div className="my-5">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-mt-1 h-fill w-52 pl-4">
                    {sizeSources.map((source, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                          <img src={source} className="mb-5"></img>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <h2 className="font-roboto font-semibold my-5 text-3xl pl-4">
                Color
              </h2>
              <Popover>
                <PopoverTrigger>
                  <img
                    src="src/assets/ColorPicker.svg"
                    className="size-3/5 pl-4"
                  ></img>
                </PopoverTrigger>
                <PopoverContent>Color palette goes here</PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <img
                    src="src/assets/ColorAdd.svg"
                    className="size-3/5 pl-4"
                  ></img>
                </PopoverTrigger>
                <PopoverContent>Color palette goes here</PopoverContent>
              </Popover>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="my-5 w-96 h-20 text-xl mx-5">
                <Save className="mr-2" /> Save Changes
              </Button>
              <Button className="my-5 w-96 h-20 text-xl mx-5">
                <CircleXIcon className="mr-2" /> Cancel
              </Button>
            </CardFooter>
          </Card>
        </section>
      </section>

      <Footer></Footer>
    </>
  );
}

/* 
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
*/

/*
<div className="mx-12">
        <h1 className="pb-5 font-roboto font-semibold">
          Mis Productos / Editar
        </h1>
      </div>
      <div className="flex mx-24">
        <div className="bg-slate-500 flex-row h-fit w-fit">
          <AspectRatio ratio={16 / 9} className="">
            <img src="src/assets/Sample_Big.svg" className=""></img>
          </AspectRatio>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-mt-1">
              {imageSources.map((source, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <img src={source} className="mb-5"></img>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div />
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
*/

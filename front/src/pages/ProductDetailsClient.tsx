
import Banner from "@/components/Banner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  MapPin,
  CreditCard,
  RefreshCcw,
  Store,
} from "lucide-react";
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

export default function () {
  return (
    <>
      
      <Banner text="Jeans" />
      <h1 className="font-roboto text-left text-3xl mt-5 ml-12 italic font-thin">
        Ropa / Pantalones / Jeans
      </h1>
      <div className="w-auto">
        <div className=" flex items-center">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="flex-none w-full max-w-xs p-5 ml-24"
          >
            <CarouselContent className="-mt-1 h-fill ">
              {imageSources.map((source, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <img src={source} className="mb-5"></img>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <AspectRatio ratio={16 / 9} className="mt-9 flex-none">
            <img src="src/assets/Sample_Big.svg" className="bg-fill"></img>
          </AspectRatio>
          <div className="mx-12 w-fit h-fit self-start pt-8">
            <h2 className="font-bold font-roboto text-5xl">
              Jeans Iron washed
            </h2>
            <div className="flex justify-between my-9">
              <h3 className="font-roboto text-4xl">$150.000</h3>
              <h3 className="font-roboto"> 3 Cuotas sin interés de $50.000</h3>
            </div>
            <Separator className="mx-auto bg-silk" />
            <p className="font-roboto text-2xl">
              Sumérgete en un estilo casual con nuestro jean azul desgastado. Su
              corte holgado y detalles de costuras visibles ofrecen comodidad y
              estilo. Combínalo con una camiseta simple o una camisa para
              cualquier ocasión.
            </p>
            <h2 className="font-roboto font-semibold my-5 text-3xl">Size</h2>
            <div className="my-5">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="-mt-1 h-fill w-52 ">
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
            <h2 className="font-roboto font-semibold my-5 text-3xl">Colour</h2>
            <Popover>
              <PopoverTrigger>
                <img
                  src="src/assets/ColorPicker.svg"
                  className="size-3/5"
                ></img>
              </PopoverTrigger>
              <PopoverContent>Color palette goes here</PopoverContent>
            </Popover>
            <div className="flex flex-col">
              <a className="underline text-3xl mt-20">Ver Guía de talles</a>
              <Button className="my-5 w-96 h-20 text-xl">
                <ShoppingBag className="mr-2" /> Add to Cart
              </Button>
              <div className="flex items-center text-xl">
                <MapPin className="size-auto" />
                <a className="my-5 ml-2 font-roboto font-semibold">
                  Métodos de Envío
                </a>
              </div>
              <div className="flex items-center text-xl">
                <CreditCard className="size-auto" />
                <a className="my-5 ml-2 font-roboto font-semibold">
                  Hasta 6 cuotas sin interés
                </a>
              </div>
              <div className="flex items-center text-xl">
                <RefreshCcw className="size-auto" />
                <a className="my-5 ml-2 font-roboto font-semibold">
                  Cambios y devoluciones
                </a>
              </div>
              <div className="flex items-center text-xl">
                <Store className="size-auto" />
                <a className="my-5 ml-2 font-roboto font-semibold">
                  Pick up en tienda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

/*
<div className="mx-5 ml-12 h-fit w-fit">
            <img src="src/assets/Sample_1.svg" className="mb-5"></img>
            <img src="src/assets/Sample_2.svg" className="mb-5"></img>
            <img src="src/assets/Sample_4.svg" className="mb-5"></img>
            <img src="src/assets/Sample_3.svg" className=""></img>
          </div>
*/

import { useCallback, useEffect, useRef, useState } from "react";
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
import ColorAdd from "../assets/ColorAdd.svg";

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
import { ColorResult, SketchPicker } from "react-color";

export default function ProductDetailsSeller() {
  const [color, setColor] = useState<ColorResult>();
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (colorResult: ColorResult): void => {
    setColor(colorResult); // Update the color in state
  };

  const toggleColorPicker = (): void => {
    setShowPicker(!showPicker); // Toggle visibility of the color picker
  };

  interface ColorPickerRef {
    current: HTMLDivElement | null;
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      setShowPicker(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <Banner text="Mis Productos"></Banner>
      <section className="flex flex-col mx-12 md:my-8 my-4 md:p-4">
        <h1 className=" pb-5 font-roboto  underline italic">
          Mis Productos / Editar
        </h1>
        <section className="w-full max-w-full h-auto flex sm:flex-row flex-col gap-8 items-start justify-between">
          <div className="flex flex-col basis-5/12">
            <img src="src/assets/Sample_Big.svg" className=" w-full"></img>
            <Carousel
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-fit"
            >
              <CarouselContent className="">
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

          <Card className="w-full h-[450px] ">
            <CardContent className="flex flex-col gap-y-2">
              <CardHeader>
                <h2 className="text-5xl font-bold">Jean Iron washed</h2>
                <h3 className=" font-roboto font-semibold my-5 text-3xl">
                  Precio
                </h3>
                <a className=" flex font-semibold">
                  $150.000 <Pencil className="mx-5 size-8" />
                </a>
              </CardHeader>
              <div>
                <h3 className="font-roboto font-semibold  text-3xl pl-5">
                  Descripción
                </h3>
                <p className="pl-5 text-2xl">
                  Sumérgete en un estilo casual con nuestro jean azul
                  desgastado. Su corte holgado y detalles de costuras visibles
                  ofrecen comodidad y estilo. Combínalo con una camiseta simple
                  o una camisa para cualquier ocasión.
                </p>
              </div>

              <h2 className="font-roboto font-semibold text-3xl pl-5">
                Talles
              </h2>
              <div className="flex flex-row">
                {sizeSources.map((source, index) => (
                  <img
                    key={index}
                    src={source}
                    className="w-20 h-auto aspect-square pl-4"
                  ></img>
                ))}
              </div>
              <div>
                <h2 className="font-roboto font-semibold  text-3xl pl-4">
                  Color
                </h2>
                <div className="flex flex-row w-full h-8">
                  <Popover>
                    <PopoverTrigger>
                      <img
                        src="src/assets/ColorPicker.svg"
                        className=" pl-4"
                      ></img>
                    </PopoverTrigger>
                    <PopoverContent>Color palette goes here</PopoverContent>
                  </Popover>
                  <div className="relative">
                    {<div style={{ background: color?.hex }}></div> && (
                      <img
                        src={ColorAdd}
                        className="cursor-pointer"
                        alt="Open color picker"
                        onClick={toggleColorPicker}
                        style={{ userSelect: "none" }}
                      />
                    )}

                    {showPicker && (
                      <div
                        ref={pickerRef}
                        style={{ position: "absolute", zIndex: 2 }}
                      >
                        <SketchPicker
                          color={color?.hex}
                          onChangeComplete={handleColorChange}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <div className="flex flex-row gap-4">
                <Button className=" w-auto h-20 text-xl ">
                  <Save className="mr-2" /> Save Changes
                </Button>
                <Button className=" w-auto px-4 h-20 text-xl ">
                  <CircleXIcon className="mr-2" /> Cancel
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>
      </section>
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

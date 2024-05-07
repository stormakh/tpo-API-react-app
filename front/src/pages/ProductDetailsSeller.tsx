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

const sizeSources = [
  "/src/assets/Size_1.svg",
  "/src/assets/Size_2.svg",
  "/src/assets/Size_3.svg",
  "/src/assets/Size_4.svg",
  "/src/assets/Size_5.svg",
  "/src/assets/Size_6.svg",
  "/src/assets/Size_7.svg",
];

import { Camera, Pencil } from "lucide-react";
import { ColorResult, SketchPicker } from "react-color";
import { Link, useParams } from "react-router-dom";
import { fetchById } from "@/lib/products";
import { Product } from "@/models/products";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";

const initialState: Product = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  colors: [],
  sizes: [],
  stock: 0,
  categories: [],
  material: [],
  images: [],
  parentCategories: [],
  sellerId: 0
};

export default function ProductDetailsSeller() {

  const { id } = useParams<{ id: string }>();
  const [prod, setProd] = useState<Product>(initialState);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!id) return;
    const parsedId = parseInt(id);
    fetchById(parsedId).then((prod) => {
      if (prod === undefined) return;
      setProd(prod);
    });
    console.log(prod);
  }, []);
  
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
            <img src={prod.images[0] ? prod.images[0] : "/src/assets/placeHolderImage.svg"} className=" w-full"></img>
            <Carousel
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-fit"
            >
              <CarouselContent className="">
                {prod.images.map((source, index) => (
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
              <h3 className="font-roboto font-semibold text-3xl">
                  Nombre
                </h3>
                <Input
                  defaultValue={prod.name}
                  className="h-16 w-2/4 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h3 className=" font-roboto font-semibold my-5 text-3xl">
                  Precio
                </h3>
                <Input
                  placeholder={`${prod.price}`}
                  className=" h-16 w-1/6 border-gray-500 text-3xl rounded-xl"
                ></Input>
              </CardHeader>
              <div className="pl-5">
                <h3 className="font-roboto font-semibold text-3xl">
                  Descripción
                </h3>
                <Input
                  defaultValue={prod.description}
                  className=" h-48 border-gray-500 text-3xl rounded-xl"
                  style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
                ></Input>
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
                        src="/src/assets/ColorPicker.svg"
                        className=" pl-4"
                      ></img>
                    </PopoverTrigger>
                    <PopoverContent>{prod.colors}</PopoverContent>
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
                <Link to={"/seller/abm-products"}>
                  <Button className=" w-auto h-20 text-xl ">
                    <Save className="mr-2" /> Save Changes
                  </Button>
                </Link>
                <Link to={"/seller/abm-products"}>
                  <Button className=" w-auto px-4 h-20 text-xl ">
                    <CircleXIcon className="mr-2" /> Cancel
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </section>
      </section>
    </>
  );
}

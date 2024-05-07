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
  Terminal,
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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchById } from "@/lib/products";
import { Product } from "@/models/products";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/store";
import store from "@/store/store";
import { cartProduct } from "@/models/cartProduct";

const imageSources = [
  "/src/assets/Sample_1.svg",
  "/src/assets/Sample_2.svg",
  "/src/assets/Sample_4.svg",
  "/src/assets/Sample_3.svg",
];

const sizeSources = [
  "/src/assets/Size_1.svg",
  "/src/assets/Size_2.svg",
  "/src/assets/Size_3.svg",
  "/src/assets/Size_4.svg",
  "/src/assets/Size_5.svg",
  "/src/assets/Size_6.svg",
  "/src/assets/Size_7.svg",
];

export default function ProductDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const [prod,setProd] = useState<Product>();
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    if (!id) return;
    const parsedId = parseInt(id);
    fetchById(parsedId).then((prod) => {
      setProd(prod);
    });
  }, []);

  const handleAddProductToCart = () => {
    dispatch(addProduct(prod!));
    // add toast here
  }

  return (
    <>
      <Banner text="Jeans" />
      <h1 className="font-roboto text-left text-3xl mt-5 ml-12 italic font-thin">
        {prod?.categories?.join(" / ")}
      </h1>
      <section className="font-roboto w-auto flex flex-row items-center gap-8 h-fit m-8">
        <section className="flex justify-around">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="flex max-w-xs mx-24"
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
          <img src="/src/assets/Sample_Big.svg" className="size-4/6"></img>
        </section>
        <Card className="min-w-0 flex-grow">
          <CardContent className="">
            <CardHeader className="font-bold font-roboto text-5xl">
              {prod?.name}
            </CardHeader>
            <div className="flex justify-between">
              <h3 className="font-roboto text-4xl">${prod?.price}</h3>
              <h3 className="font-roboto"> 3 Cuotas sin interés de ${ prod ? (prod.price/3).toFixed(2) : null}</h3>
            </div>
            <Separator className="mx-auto bg-silk my-7" />
            <p className="font-roboto text-2xl">
             {prod?.description}
            </p>
            <h2 className="font-roboto font-semibold my-5 text-3xl">Size</h2>
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
            <h2 className="font-roboto font-semibold my-5 text-3xl">{prod?.colors}</h2>
            <Popover>
              <PopoverTrigger>
                <img
                  src="src/assets/ColorPicker.svg"
                  className="size-3/5"
                ></img>
              </PopoverTrigger>
              <PopoverContent>Color palette goes here</PopoverContent>
            </Popover>
            <section className="flex flex-col font-roboto">
              <a className="underline text-2xl mt-20">Ver Guía de talles</a>
              <Button className="my-5 w-96 h-20 text-xl" onClick={() => handleAddProductToCart()}>
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
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  );
}


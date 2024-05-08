import Banner from "@/components/Banner";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  MapPin,
  CreditCard,
  RefreshCcw,
  Store,
  Check,
  Loader,
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
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchById } from "@/lib/products";
import { Product } from "@/models/products";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "@/store/store";

import EmblaCarouselThumbs from "@/components/carouselThumbNails/EmblaCarouselThumbs";
import { UserSession } from "@/models/users";

const sizeSources = [
  "/src/assets/Size_1.svg",
  "/src/assets/Size_2.svg",
  "/src/assets/Size_3.svg",
  "/src/assets/Size_4.svg",
  "/src/assets/Size_5.svg",
  "/src/assets/Size_6.svg",
  "/src/assets/Size_7.svg",
];

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
};

export default function () {
  const { id } = useParams<{ id: string }>();
  const [prod, setProd] = useState<Product>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useDispatch();
  const user = useSelector((state: { userSession: UserSession }) => state.userSession);


  useEffect(() => {
    if (!id) return;
    const parsedId = parseInt(id);
    fetchById(parsedId).then((prod) => {
      if (prod === undefined) return;
      setProd(prod);
    });
  }, []);

  function handleAddToCart() {
    if (prod === undefined) return;
    console.log('User', user);
    setErrorMessage("");
    // fake loading 😎
    setIsLoading(true);
  
    if(prod.stock === 0 ) {
      setErrorMessage("No hay stock de este producto");
      setIsLoading(false);
      return;
    }

    if (!user) {
      setErrorMessage("Tenes que estar logueado para comprar");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      dispatch(addProduct(prod));
      setAddedToCart(true);
    }, 1000);
  }

  return (
    <>
      <Banner text={prod.parentCategories[1]} />
      <Link to={"/catalog"}>
        <h1 className="font-roboto text-left text-3xl mt-5 ml-12 italic font-thin">
          {prod?.categories?.join(" / ")}
        </h1>
      </Link>
      <section className="font-roboto grid grid-cols-1 md:grid-cols-8 gap-4 m-8 md:items-start place-items-center">
        <EmblaCarouselThumbs
          slides={prod?.images.map((image) => {
            return <img src={image} className=""></img>;
          })}
          className="md:col-span-3 lg:col-span-3 xl:col-span-2"
        />

        <Card className=" min-w-0 w-full h-fit flex flex-col justify-center col-span-1 md:col-span-5">
          <CardContent className=" ">
            <CardHeader className="font-bold font-roboto text-5xl">
              {prod?.name}
            </CardHeader>
            <div className="flex justify-between">
              <h3 className="font-roboto text-4xl">${prod?.price}</h3>
              <h3 className="font-roboto">
                {" "}
                3 Cuotas sin interés de $
                {prod ? (prod.price / 3).toFixed(2) : null}
              </h3>
            </div>
            <Separator className="mx-auto bg-silk my-7" />
            <p className="font-roboto text-2xl">{prod?.description}</p>
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
            <h2 className="font-roboto font-semibold my-5 text-3xl">
              {prod?.colors}
            </h2>
            <Popover>
              <PopoverTrigger>
                <img src="/src/assets/ColorPicker.svg" className=""></img>
              </PopoverTrigger>
              <PopoverContent>Color palette goes here</PopoverContent>
            </Popover>
            <section className="flex flex-col font-roboto">
              {/* <a className="underline text-2xl mt-20">Ver Guía de talles</a> */}
              {prod?.stock ? (
                <p className="text-2xl">Stock: {prod.stock}</p>
              ) : null}

              <Button
                disabled={isLoading || addedToCart}
                className="my-5 w-96 h-20 text-xl"
                onClick={handleAddToCart}
              >
                {isLoading ? (
                  <Loader className="animate-spin"/>
                ) : addedToCart ? (
                  <Check />
                ) : (
                  <>
                    <ShoppingBag className="mr-2" />
                    <p>Add to Cart</p>{" "}
                  </>
                )}
              </Button>
              {errorMessage ? <div className="inline-flex gap-x-2"><p className="text-red-600">{errorMessage}</p><Link className=" underline" to={'/login'}>Logueate</Link></div> : null}
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


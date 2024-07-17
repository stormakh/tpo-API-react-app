import React, { useState } from "react";
import { Save, CircleXIcon, ArrowLeft } from "lucide-react";
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

const images = ["src/assets/Hoodie-Gray-1.svg", "src/assets/Dress-Black-2.svg"];

import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store/store";
import { postProduct } from "@/store/createProduct";

export default function ProductDetailsSeller() {
  const newProduct = useSelector(
    (state: AppState) => state.createProduct.product
  );
  const status = useSelector((state: AppState) => state.createProduct.status);
  const error = useSelector((state: AppState) => state.createProduct.error);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64String, setBase64String] = useState<string>("");
  const dispatch = useDispatch();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      convertToBase64(file);
    }
  };

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;
      setBase64String(base64);
    };
    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
    };
  };

  return (
    <>
      <Banner text="Mis Productos"></Banner>
      <section className="flex flex-col mx-12 md:my-8 my-4 md:p-4">
        <Link to={"/seller/abm-products"}>
          <button className="flex pb-12">
            <ArrowLeft></ArrowLeft>
            <p className="pl-3">Volver</p>
          </button>
        </Link>
        <h1 className="pb-5 font-roboto underline italic">
          Mis Productos / Editar
        </h1>
        <section className="w-full max-w-full h-auto flex sm:flex-row flex-col gap-8 items-start justify-between">
          <div className="flex flex-col basis-5/12">
            <img
              src={images[0] ? images[0] : "/src/assets/placeHolderImage.svg"}
              className="w-full"
              alt="Product"
            />
            <Carousel
              opts={{
                align: "start",
                containScroll: "trimSnaps",
              }}
              className="w-fit"
            >
              <CarouselContent className="">
                {images.map((source, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/4 mt-6">
                    <div className="p-1">
                      <img src={source} className="mb-5" alt={`Slide ${index + 1}`} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <Card className="w-full h-[450px]">
            <CardContent className="flex flex-col gap-y-2">
              <CardHeader>
                <h3 className="font-roboto font-semibold text-3xl">Descripción</h3>
                <Input className="h-16 w-2/4 border-gray-500 text-3xl rounded-xl" onChange={(e) => {}} />
                <h3 className="font-roboto font-semibold my-5 text-3xl">Precio</h3>
                <Input className="h-16 w-1/6 border-gray-500 text-3xl rounded-xl" />
              </CardHeader>

              <h2 className="font-roboto font-semibold text-3xl pl-5">Talles</h2>
              <div className="flex flex-row"></div>
              <div>
                <h2 className="font-roboto font-semibold text-3xl pl-4">Color</h2>
              </div>

              <div className="flex flex-col mt-4">
                <label className="font-roboto font-semibold text-2xl">Upload Image</label>
                <input type="file" onChange={handleFileChange} />
                {base64String && (
                  <img src={base64String}  alt="Uploaded" className="mt-4 max-w-[100px] max-h-[100px]" />
                )}
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <div className="flex flex-row gap-4">
                <Link to={"/seller/abm-products"}>
                  <Button className="w-auto h-20 text-xl" onClick={() => postProduct(newProduct)}>
                    <Save className="mr-2" /> Save Changes
                  </Button>
                </Link>
                <Link to={"/seller/abm-products"}>
                  <Button className="w-auto px-4 h-20 text-xl">
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

import { AspectRatio } from "@/components/ui/aspect-ratio";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";

import NavBar from "@/components/NavBar";

import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import ImageSlide from "@/components/carousel/ImageSlide";
import CatalogMenu from "@/components/catalog/CatalogMenu";
import Eye from "../assets/Eye.svg";

import CatalogFilter from "@/components/catalog/CatalogFilter";
import { useEffect, useState } from "react";
import { fetchAllProducts, filterByCategorie } from "@/lib/products";
import { Product } from "@/models/products";
import CatalogSkeleton from "@/components/catalog/CatalogSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const categories = [
  "Men", "Casual", "Women", "Formal"
];

export default  function  Catalog() {
  const [currentProds, setCurrentProds] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  

  useEffect(() => {
    fetchAllProducts().then((prods) => {
      setCurrentProds(prods);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      
    });
  }, []);

if(isLoading){
  return (
    <>
      <Banner text="Upper"></Banner>
      <div className="w-2/5 flex flex-row items-baseline m-4 justify-between gap-4 text-xl h-auto">
        <div className="stroke-0">
          <Skeleton className="w-full "/>
        </div>
        <CatalogMenu />
      </div>

      <div className="grid  gap-4 mt-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <CatalogSkeleton/>
      </div>
    </>
  )
}

  return (
    <>
      <Banner text="Upper"></Banner>
      <div className="w-2/5 flex flex-row items-baseline m-4 justify-between gap-4 text-xl h-auto">
        <div className="stroke-0">
          <CatalogFilter categories={categories} action={setCurrentProds} currentProds={currentProds} />
        </div>
        <CatalogMenu />
      </div>

      <div className="grid  gap-4 mt-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {currentProds.map((prod) => (
          <div>
            <CarouselWrapper
              ratio={9 / 16}
              slides={[<ImageSlide src={Eye} />, "text", 5, 3, 4]}
              options={{ loop: true }}
              className="min-w-[200px] "
              key={prod.id}
            >
              <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
                <b>NEW</b> IN
              </p>
            </CarouselWrapper>
            <p className="text-start z-10">
              {prod.name.toUpperCase()} <b>${prod.price}</b>
            </p>
            <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={{ loop: true }} />
          </AspectRatio>
        ))}
      </div>
    </>
  );
}

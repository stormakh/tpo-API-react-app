import Banner from "@/components/Banner";
import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import ImageSlide from "@/components/carousel/ImageSlide";
import CatalogMenu from "@/components/catalog/CatalogMenu";
import CatalogFilter from "@/components/catalog/CatalogFilter";
import { useEffect, useRef, useState } from "react";
import { fetchAllProducts } from "@/lib/products";
import { Product } from "@/models/products";
import CatalogSkeleton from "@/components/catalog/CatalogSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";


export default function Catalog() {
  const currentProdsRef = useRef<Product[]>([]);
  const [filteredProds, setFilteredProds] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts().then((prods) => {
      currentProdsRef.current = prods;
      setFilteredProds(prods);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  function handleNavigateToProduct(id : number) {
    navigate(`/product-details-client/${id}`);
  }

  if (isLoading) {
    return (
      <>
        <Banner text="Catalog"></Banner>

        <div className="w-2/5 flex flex-row items-center m-4 justify-between gap-4 text-xl h-auto">
          <Skeleton className="w-full min-h-10" />
          <Skeleton className="w-1/3 min-h-10" />
        </div>

        <div className="grid  gap-4 mt-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-h-svh">
          {Array.from({ length: 10 }).map((_, index) => (
            <CatalogSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Banner text="Catalog"></Banner>

      <div className="w-2/5 flex flex-row items-baseline m-4 justify-between gap-4 text-xl h-auto">
        <div className="stroke-0">
          <CatalogFilter
            action={setFilteredProds}
            currentProds={currentProdsRef.current}
          />
        </div>
        <CatalogMenu />
      </div>

      <div className="grid  gap-4 m-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {filteredProds.map((prod) => (
          <div className="flex flex-col gap-2 cursor-pointer" key={prod.id} onClick={() => handleNavigateToProduct(prod.id)}>
            <CarouselWrapper
              ratio={9 / 16}
              slides={prod.images.map((img) => (
                <ImageSlide src={img} />
              ))}
              options={{ loop: true }}
              className="min-w-[200px] "
            >
              <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
                <b>NEW</b> IN
              </p>
            </CarouselWrapper>

            <p className="text-start z-10">
              {prod.name.toUpperCase()} <b>${prod.price}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

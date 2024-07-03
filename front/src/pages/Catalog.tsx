import { useEffect, useState, useCallback, useMemo } from "react";
import {  fetchAllProducts, fetchProductsByCategory } from "@/lib/products/products";
import { ProductDetail, Category } from "@/models/products";
import Banner from "@/components/Banner";
import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import ImageSlide from "@/components/carousel/ImageSlide";
import CatalogSkeleton from "@/components/catalog/CatalogSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

import { useNavigate } from "react-router-dom";
import { fetchAllCategories } from "@/lib/products/categories";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await fetchAllCategories();
        setCategories(cats);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = useCallback(async (category: string) => {
    setIsLoading(true);
    try {
      const prods = category ? await fetchProductsByCategory(category) : await fetchAllProducts();
      setProducts(prods);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, fetchProducts]);

  const handleFilterChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const memoizedProducts = useMemo(() => products, [products]);

  const handleNavigateToProduct = (id: number) => {
    navigate(`/product-details-client/${id}`);
  };

  if (isLoading) {
    return (
      <>
        <Banner text="Catalog" />
        <div className="w-2/5 flex flex-row items-center m-4 justify-between gap-4 text-xl h-auto">
          <Skeleton className="w-full min-h-10" />
          <Skeleton className="w-1/3 min-h-10" />
        </div>
        <div className="grid gap-4 mt-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-h-svh">
          {Array.from({ length: 10 }).map((_, index) => (
            <CatalogSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Banner text="Catalog" />
      <div className="w-2/5 flex flex-row items-baseline m-4 justify-between gap-4 text-xl h-auto">
        <div className="stroke-0">
          <Select defaultValue={selectedCategory} onValueChange={(value: string) => handleFilterChange(value)}>
            <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 text-2xl">
              <SelectValue placeholder={selectedCategory || 'FILTER'} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-xl">Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name} className="text-xl">
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 m-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-full min-h-dvh">
        {memoizedProducts.map((prod) => (
          <div className="flex flex-col gap-2 cursor-pointer" key={prod.idProduct} onClick={() => handleNavigateToProduct(prod.idProduct)}>
            <CarouselWrapper
              ratio={9 / 16}
              slides={prod.images.map((img, index) => (
                <ImageSlide src={`data:image/jpeg;base64,${img.image}`} key={index} />
              ))}
              options={{ loop: true }}
              className="min-w-[200px]"
            >
              <p className="text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
                <b>NEW</b> IN
              </p>
            </CarouselWrapper>
            <p className="text-start z-10">
              {prod.description.toUpperCase()} <b>${prod.price}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;

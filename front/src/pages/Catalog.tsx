import Banner from "@/components/Banner";

import NavBar from "@/components/NavBar";

import CarouselWrapper from "@/components/carousel/CarouselWrapper";
import ImageSlide from "@/components/carousel/ImageSlide";
import CatalogMenu from "@/components/catalog/CatalogMenu";
import Eye from "../assets/Eye.svg";

import CatalogFilter from "@/components/catalog/CatalogFilter";

// Assuming you have an ItemCard component
const items = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
  { id: 4, name: "Item 4", price: 40 },
  { id: 5, name: "Item 5", price: 50 },
  { id: 6, name: "Item 6", price: 60 },
  { id: 7, name: "Item 7", price: 70 },
  { id: 8, name: "Item 8", price: 80 },
  { id: 9, name: "Item 9", price: 90 },
  { id: 10, name: "Item 10", price: 100 },
  // Add more items as needed
];

const categories = [
  //clothes categories
  { categorie: "Shirts", link: "/shirts" },
  { categorie: "Pants", link: "/pants" },
  { categorie: "Shoes", link: "/shoes" },
  { categorie: "Accessories", link: "/accessories" },
];

export default function Catalog() {
  return (
    <>
      <Banner text="Upper"></Banner>
      <div className="w-2/5 flex flex-row items-baseline m-4 justify-between gap-4 text-xl h-auto">
        <div className="stroke-0">
          <CatalogFilter categories={categories} />
        </div>
        <CatalogMenu />
      </div>

      <div className="grid  gap-4 mt-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {items.map((item) => (
          <div>
            <CarouselWrapper
              ratio={9 / 16}
              slides={[<ImageSlide src={Eye} />, "text", 5, 3, 4]}
              options={{ loop: true }}
              className="min-w-[200px] "
              key={item.id}
            >
              <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 z-10">
                <b>NEW</b> IN
              </p>
            </CarouselWrapper>
            <p className="text-start z-10">
              {item.name.toUpperCase()} <b>${item.price}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

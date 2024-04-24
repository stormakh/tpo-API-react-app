import { AspectRatio } from "@/components/ui/aspect-ratio";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";

import EmblaCarousel from "@/components/EmblaCarousel";

// Assuming you have an ItemCard component

export default function Catalog() {
  const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
    { id: 4, name: "Item 4", price: 40 },
    { id: 5, name: "Item 5", price: 50 },
    // Add more items as needed
  ];

  return (
    <>
      <NavBar></NavBar>
      <Banner text="Upper"></Banner>
      <div className="grid grid-flow-col-dense gap-4 mt-8 mx-4">
        {items.map((item) => (
          <AspectRatio
            className="relative bg-stone-300  "
            ratio={9 / 16}
            key={item.id}
          >
            <p className="  text-zinc-950 absolute top-0 left-0 transform -rotate-90 -translate-x-2 translate-y-12 antialiased opacity-65 ">
              <b>NEW</b> IN
            </p>
            <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={{ loop: true }} />
          </AspectRatio>
        ))}
      </div>
    </>
  );
}

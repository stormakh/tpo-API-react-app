import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import noPayLogo from "@/assets/nopay.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Product } from '@/models/products';
import { filterProductsByParentCategory } from "./catalog/NavSheetCatalogFilter";

interface NavSheetProps {
  products: Product[]; // Lista completa de productos
}



export default function NavSheet({ products }: NavSheetProps) {
  const categories = ['Upper', 'Lower', 'Accessories'];
  const [filteredProds, setFilteredProds] = useState<Product[]>(products);

  const handleFilterByCategory = (category: string) => {
    const filteredProducts = filterProductsByParentCategory(products, category);
    setFilteredProds(filteredProducts);
};


  return (
    <Sheet>
      <SheetTrigger asChild className="ml-2">
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <AlignJustify color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-md rounded-t-none" side={'left'}>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <Link to="/">
              <img src={noPayLogo} alt="Nopay Logo" className="size-40" />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="border-b border-line pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4">Items</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/catalog?type=${category}`} onClick={() => handleFilterByCategory(category)}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
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
import { useEffect, useState } from "react";
import { fetchAllCategories } from "@/lib/products/categories";
import { Category } from "@/models/products";

export default function NavSheet() {

  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild className="  ml-2">
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <AlignJustify color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-md rounded-t-none " side={"left"}>
        <SheetHeader className="">
          <SheetTitle className="flex items-center justify-center ">
            <img src={noPayLogo} alt="Nopay Logo" className="size-40" />
          </SheetTitle>
        </SheetHeader>
        <div className="border-b border-line pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4">Categories</h3>
          <ul>
            {categories ? categories.map((category) => (
              category.name !== 'None' && (
                <Link to={`catalog/${category.name}`} key={category.id}>
                  <li className="">{category.name}</li>
                </Link>
              )
            )) : undefined}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

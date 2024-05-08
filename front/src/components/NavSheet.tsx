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
import { categories } from "@/models/products.ts";
import { Link } from "react-router-dom";
export default function NavSheet() {
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
            {Object.values(categories).map((categorie) => (
              categorie !== 'None' && (
                <Link to={`catalog/${categorie}`} key={categorie}>
                  <li className="">{categorie}</li>
                </Link>
              )
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

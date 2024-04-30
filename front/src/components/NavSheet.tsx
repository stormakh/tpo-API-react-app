import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";

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
            <img
              src="./src/assets/nopay.svg"
              alt="Nopay Logo"
              className="size-40"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="border-b border-line pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4">Upper</h3>
          <ul>
            <li>Buzos</li>
            <li>Remeras</li>
            <li>Tops</li>
            <li>Abrigos</li>
          </ul>
        </div>
        <div className="border-b border-line pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4 mx-2">
            Lower
          </h3>
          <ul>
            <li>Pantalones</li>
            <li>Shorts</li>
            <li>Minis</li>
            <li>Jeans</li>
          </ul>
        </div>
        <div className="pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4">
            Accesorios
          </h3>
          <ul>
            <li>Mochilas</li>
            <li>Cintos</li>
            <li>Anillos</li>
            <li>Aros</li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

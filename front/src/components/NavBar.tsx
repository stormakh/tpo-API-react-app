import { Button } from "@/components/ui/button";

import {
  Sheet,
  
  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlignJustify,
  Heart,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="static top-0 w-screen h-auto  grid grid-cols-3 items-center px-4">
      <NavSheet />
      <div className="justify-self-center">
        <img
          src="./src/assets/nopay.svg"
          alt="Nopay Logo"
          className="size-40"
        />
      </div>
      <div className="flex justify-self-end gap-2 px-4">
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Search color="black" />
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Link to="/LogIn">
            <UserRound color="black" />
          </Link>
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <Heart color="black" />
        </Button>
        <Button size="icon" className="bg-transparent hover:bg-slate-50">
          <ShoppingBag className="mr-1" color="black" />
          {/*implement UseState here to track products in cart */}
        </Button>
      </div>
    </nav>
  );
}

export function NavSheet() {
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
          <h3 className="text-4xl font-roboto font-extrabold my-4 mx-2">Lower</h3>
          <ul>
            <li>Pantalones</li>
            <li>Shorts</li>
            <li>Minis</li>
            <li>Jeans</li>
          </ul>
        </div>
        <div className="pb-2 flex-grow">
          <h3 className="text-4xl font-roboto font-extrabold my-4">Accesorios</h3>
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

import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  UserRound,
  Heart,
  ShoppingBag,
  AlignJustify,
  Search,
} from "lucide-react";

export default function NavBar() {
  return (
    <div>
      <NavigationMenu className="fixed">
        <NavigationMenuList className="w-screen justify-between h-16 relative">
          <div className="flex my-3 px-5 w-full">
            <NavigationMenuItem>
              <DropdownMenu className="absolute left-0 w-screen">
                <DropdownMenuTrigger asChild className="mx-2">
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-slate-50"
                  >
                    <AlignJustify color="black" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <div className="space-y-4">
                <DropdownMenuLabel className="flex justify-center items-center">
                  <img src="./src/assets/nopay.svg" 
                  alt="Nopay Logo"  
                  className="h-10 w-auto mt-4" />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                  <div className="border-b border-line pb-2 flex-grow">
                    <h3 className="text-3xl font-roboto">Upper</h3>
                    <DropdownMenuItem>Buzos</DropdownMenuItem>
                    <DropdownMenuItem>Remeras</DropdownMenuItem>
                    <DropdownMenuItem>Tops</DropdownMenuItem>
                    <DropdownMenuItem>Abrigos</DropdownMenuItem>
                  </div>
                  <div className="border-b border-line pb-2 flex-grow">
                    <h3 className="text-3xl font-roboto">Lower</h3>
                    <DropdownMenuItem>Pantalones</DropdownMenuItem>
                    <DropdownMenuItem>Shorts</DropdownMenuItem>
                    <DropdownMenuItem>Minis</DropdownMenuItem>
                    <DropdownMenuItem>Jeans</DropdownMenuItem>
                  </div>
                  <div className="pb-2 flex-grow">
                    <h3 className="text-3xl font-roboto">Accesorios</h3>
                    <DropdownMenuItem>Mochilas</DropdownMenuItem>
                    <DropdownMenuItem>Cintos</DropdownMenuItem>
                    <DropdownMenuItem>Anillos</DropdownMenuItem>
                    <DropdownMenuItem>Aros</DropdownMenuItem>
                  </div>
                  </div>
                </DropdownMenuContent> 
             </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Button size="icon" className="bg-transparent hover:bg-slate-50">
                <Link to="/LogIn">
                  <UserRound color="black" />
                </Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Button size="icon" className="bg-transparent hover:bg-slate-50">
                <Heart color="black" />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Button size="icon" className="bg-transparent hover:bg-slate-50">
                <ShoppingBag className="mr-1" color="black" />
                <a className="text-black">0</a>
                {/*implement UseState here to track products in cart */}
              </Button>
            </NavigationMenuItem>
          </div>
          <img
            src="./src/assets/nopay.svg"
            alt="Nopay Logo"
            className="size-24 justify-self-center"
          ></img>
          <div className="justify-self-end px-5 w-full">
            <NavigationMenuItem className="flex relative">
              <Input
                type="Search"
                className="w-80"
                placeholder="Search"
              ></Input>
              <Button
                variant="ghost"
                size="icon"
                className="mx-2 absolute right-0 top-0 mr-3 hover:bg-slate-50"
              >
                <Search />
              </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

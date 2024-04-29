import { Link } from "react-router-dom";
//import { Input } from "@/components/ui/input";
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
} from "@/components/DropdownCustom";
import { Button } from "@/components/ui/button";
import { UserRound, Heart, Bell, AlignJustify, Search } from "lucide-react";

export default function NavBarSeller() {
  return (
    <div>
      <NavigationMenu className="sticky top flex">
        <NavigationMenuList className="w-screen justify-between place-items-start h-28 mt-5 mb-15">
          <div className="flex my-3 px-5">
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
                      <img
                        src="./src/assets/nopay.svg"
                        alt="Nopay Logo"
                        className="h-10 w-auto mt-4"
                      />
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
          </div>
          <img
            src="./src/assets/nopaySellers.svg"
            alt="Nopay Sellers Logo"
            className="size-40 flex bg-cover"
          ></img>
          <div className="flex justify-self-end px-5">
            <NavigationMenuItem className="mx-2">
              <Button size="icon" className="bg-transparent hover:bg-slate-50">
                <Search color="black" />
              </Button>
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
                <Bell className="mr-1" color="black" />
                <a className="text-black">0</a>
              </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

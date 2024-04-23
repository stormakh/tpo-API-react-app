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
      <NavigationMenu className="sticky top-0  ">
        <NavigationMenuList className="w-screen justify-between h-16">
          <div className="flex my-3 px-5">
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="mx-2">
                  <Button
                    size="icon"
                    className="bg-transparent hover:bg-slate-50"
                  >
                    <AlignJustify color="black" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </div>
          <img
            src="./src/assets/nopay.svg"
            alt="Nopay Logo"
            className="size-24 justify-self-center"
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
                <ShoppingBag className="mr-1" color="black" />
                <a className="text-black">0</a>
                {/*implement UseState here to track products in cart */}
              </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

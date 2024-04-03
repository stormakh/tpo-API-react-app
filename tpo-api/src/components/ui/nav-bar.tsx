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
      <NavigationMenu>
        <NavigationMenuList className="w-screen justify-between h-16">
          <div className="flex my-3 px-5">
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="mx-2">
                  <Button variant="outline" size="icon">
                    <AlignJustify />
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
            <NavigationMenuItem className="mx-2">
              <Button variant="outline" size="icon">
                <UserRound />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Button variant="outline" size="icon">
                <Heart />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem className="mx-2">
              <Button variant="outline" size="icon">
                <ShoppingBag className="h-4 w-4 mr-1" />
                <a>0</a>
                {/*implement UseState here to track products in cart */}
              </Button>
            </NavigationMenuItem>
          </div>
          <img
            src="./src/assets/nopay.svg"
            alt="Nopay Logo"
            className="size-24 justify-self-center"
          ></img>
          <div className="justify-self-end px-5">
            <NavigationMenuItem className="flex">
              <Input
                type="Search"
                className="w-80 text-center"
                placeholder="Search"
              ></Input>
              <Button variant="ghost" size="icon" className="mx-2">
                <Search />
              </Button>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

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

export default function NavBar() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="w-screen flex justify-between bg-black">
          <div className="flex my-3 px-5">
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
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
            <NavigationMenuItem className="mx-3">
              <Button>Icono 1</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button>Icono 2</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button>Icono 2</Button>
            </NavigationMenuItem>
          </div>
          <div>
            <h1 className="text-white text-3xl">Chiro Clothing</h1>
          </div>
          <div className="bg-black justify-self-end px-5">
            <NavigationMenuItem className="">
              <Input
                type="Search"
                className="w-96 text-center"
                placeholder="Búsqueda"
              ></Input>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

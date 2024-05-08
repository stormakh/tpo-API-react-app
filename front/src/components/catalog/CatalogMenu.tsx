"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ArrowDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const sizes: { title: string; href: string; description: string }[] = [
    {
        title: "Small",
        href: "/sizes/small",
        description:
            "Clothes for people with small body sizes.",
    },
    {
        title: "Medium",
        href: "/sizes/medium",
        description:
            "Clothes for people with medium body sizes.",
    },
    {
        title: "Large",
        href: "/sizes/large",
        description:
            "Clothes for people with large body sizes.",
    },
    {
        title: "Extra Large",
        href: "/sizes/extra-large",
        description:
            "Clothes for people with extra large body sizes.",
    },
];

export default function CatalogMenu() {
  return (
    <NavigationMenu className="z-20 ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-normal">PRENDA</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <ArrowDown className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Remeras
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Remeras de la mejor calidad a un precio que no te importa pagar.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Conjuntos">
                Los mejores conjuntos para esta temporada.
              </ListItem>
              <ListItem href="/docs/installation" title="Accesorios">
                Accesorios para combinar con tus prendas.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Zapatos">
                Ni veas el precio de los zapatos porque no te va a importar pagarlos.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-normal">TALLE</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {sizes.map((size) => (
                <ListItem
                  key={size.title}
                  title={size.title}
                  href={size.href}
                >
                  {size.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"text-2xl font-normal")}>
              COLOR
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

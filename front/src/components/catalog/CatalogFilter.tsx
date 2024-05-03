import { Product } from "@/models/products";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { filterByCategorie } from "@/lib/products";

interface CatalogFilterProps {
  categories : string[];
  action : React.Dispatch<React.SetStateAction<Product[]>>
  currentProds : Product[]
}
  

export default function CatalogFilter({ categories , action , currentProds} : CatalogFilterProps) {

  function handleFilterByCat(categorie : string){
    console.log("searching by categorie", categorie)
    console.log("filtering products:", currentProds)
    action(filterByCategorie(currentProds, categorie))
  }

return (<Select   onValueChange={(value : string) => handleFilterByCat(value)}>
            <SelectTrigger className=" border-none focus:ring-0 focus:ring-offset-0 text-2xl">
              <SelectValue  className="" placeholder="FILTER" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectLabel className="text-xl">Categories</SelectLabel>
                {categories.map((categorie,index) => (
                  <SelectItem
                    key={index}
                    value={categorie}
                    className="text-xl"
                  >
                    {categorie}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          )
}
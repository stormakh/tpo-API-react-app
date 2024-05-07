import { Product, parentCategorie } from "@/models/products";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { filterByCategorie } from "@/lib/products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { categories } from "@/models/products";
interface CatalogFilterProps {
  action: React.Dispatch<React.SetStateAction<Product[]>>;
  currentProds: Product[];
}

export default function CatalogFilter({
  action,
  currentProds,
}: CatalogFilterProps) {

  const params = useParams<{ categorie: categories }>();

  useEffect(() => {
    if (params.categorie !== undefined && Object.values(categories).includes(params.categorie) ) {
      action(filterByCategorie(currentProds, params.categorie));
    } else if (params.categorie !== undefined && !Object.values(categories).includes(params.categorie)){
      action(currentProds);
    }
  }, [params.categorie]);

  function handleFilterByCat(categorie: string) {
    action(filterByCategorie(currentProds, categorie));
  }

  

  return (
    <Select defaultValue={params.categorie} onValueChange={(value: string) => handleFilterByCat(value)}>
      <SelectTrigger className=" border-none focus:ring-0 focus:ring-offset-0 text-2xl">
        <SelectValue className="" placeholder={params.categorie && Object.values(categories).includes(params.categorie) ? params.categorie : 'FILTER'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xl">Categories</SelectLabel>
          {Object.values(categories).map((categorie, index) => (
            <SelectItem key={index} value={categorie} className="text-xl">
              {categorie}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

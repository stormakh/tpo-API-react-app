import { Category, ProductDetail } from "@/models/products";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { filterByCategorie } from "@/lib/products/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { fetchAllCategories } from "@/lib/products/categories";
interface CatalogFilterProps {
  action: React.Dispatch<React.SetStateAction<ProductDetail[]>>;
  currentProds: ProductDetail[];
}

export default function CatalogFilter({
  action,
  currentProds,
}: CatalogFilterProps) {

  const params = useParams();

  useEffect(() => {
    if (params.categorie !== undefined && Object.values(params.categorie).includes(params.categorie) ) {
      action(filterByCategorie(currentProds, params.categorie));
    } else if (params.categorie !== undefined && !Object.values(params.categorie).includes(params.categorie)){
      action(currentProds);
    }
  }, [params.categorie]);

  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await fetchAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
  },[]);

  function handleFilterByCat(categorie: string) {
    action(filterByCategorie(currentProds, categorie));
  }


  return (
    <Select defaultValue={params.categorie} onValueChange={(value: string) => handleFilterByCat(value)}>
      <SelectTrigger className=" border-none focus:ring-0 focus:ring-offset-0 text-2xl">
        <SelectValue className="" placeholder={params.categorie !== undefined ? params.categorie : 'FILTER'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xl">Categories</SelectLabel>
          {categories != null ? categories.map((categorie, index) => (
            <SelectItem key={index} value={categorie.id.toString()} className="text-xl">
              {categorie.name}
            </SelectItem>
          )) : undefined}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

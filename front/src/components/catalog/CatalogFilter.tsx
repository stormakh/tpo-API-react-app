import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";


  

export default function CatalogFilter({ categories  } : {categories: {categorie: string, link: string}[]}) {
return (<Select>
            <SelectTrigger className=" border-none focus:ring-0 focus:ring-offset-0 text-2xl">
              <SelectValue className="" placeholder="FILTER" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectLabel className="text-xl">Categories</SelectLabel>
                {categories.map((categorie) => (
                  <SelectItem
                    key={categorie.categorie}
                    value={categorie.categorie}
                    className="text-xl"
                  >
                    {categorie.categorie}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          )
}
import productsMock from "@/mock/productsMock.json";
import { Product } from "@/models/products";

export async function fetchAllProducts() {
  const products: Product[] = productsMock.map((prod) => prod);
  return products;
}

export function filterByCategorie(
  products: Product[],
  categorie: string
): Product[] {
  if (categorie === "None") {
    return products;
  } else {
    return products.filter((product) => product.categories.includes(categorie));
  }
}

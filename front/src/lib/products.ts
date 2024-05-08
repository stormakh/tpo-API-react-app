import productsMock from "@/mock/productsMock.json";
import { Product } from "@/models/products";

export async function fetchAllProducts() {
  const products: Product[] = productsMock.map((prod) => prod as Product);
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

export async function fetchById(id: number){
  const prod = productsMock.find((prod) => prod.id === id) as Product;
  return prod;
} 

export async function fetchBySellerId(id: number): Promise<Product[]> {
  const prods = productsMock.filter((prod) => prod.sellerId === id) as Product[];
  return prods;
}
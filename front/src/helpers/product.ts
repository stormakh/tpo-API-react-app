import { fetchAllCategories } from "@/lib/products/categories";
import { Category } from "@/models/products";

export async function loadCategories(){
    const categories = await fetchAllCategories();
    localStorage.setItem('categories',JSON.stringify(categories));
}

export function getCategories(){
    
}
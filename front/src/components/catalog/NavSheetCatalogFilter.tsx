import { Product } from '@/models/products';

export function filterProductsByParentCategory(products: Product[], parentCategory: string): Product[] {
  return products.filter((product) => product.parentCategories.includes(parentCategory));
}
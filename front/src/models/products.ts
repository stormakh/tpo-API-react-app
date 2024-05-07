// Define the product interface
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  colors: string[];
  sizes: string[];
  stock?: number;
  categories: string[];
  material: string[];
  images: string[];
  parentCategories: parentCategorie[];
  sellerId: number;
}

export enum parentCategorie {
  Lower = "Lower",
  Upper = "Upper",
  Footwear = "Footwear",
  Accessories = "Accessories",
  FullBody = "Full Body",
  Clothes = "Clothes",
}

export enum categories {
  Men = "Men",
  Casual = "Casual",
  Formal = "Formal",
  Women = "Women",
  None = "None",
}

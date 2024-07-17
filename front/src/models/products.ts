// Define the product interface

interface Seller {
  idSeller: number;
  name: string;
}

export interface Product {
  idProduct: number;
  description: string;
  price: number;
  quantity: number;
  categories: string[];
  seller: Seller;
}

export interface Size {
  size: string;
  stock: number;

}

export interface ProductDetail {
  idProduct: number;
  description: string;
  price: number;
  stock: number;
  categories: Category[];
  sizes: Size[];
  colors: string[];
  materials: { description: string }[];
  images: Image[];
  seller: { idSeller: number; name: string };
}
export interface Image {
  name: string;
  file: string;
}

export interface Category{
  id: number;
  name: string;
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
  None = "None",
}

export interface Material {
  description: string;
}
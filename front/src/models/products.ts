// Define the product interface

interface Seller {
  idSeller: number;
  name: string;
}

export interface Product {
  idProducto: number;
  description: string;
  price: number;
  quantity: number;
  categories: string[];
  seller: Seller;
}

export interface Image {
  idImage: string;
  image: string;
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
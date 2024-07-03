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

export interface ProductDetail{
  idProduct: number;
  description: string;
  price: number;
  stock: number;
  categories: string[];
  sizes: Size[];
  colors: string[];
  materials: string[];
  seller: Seller;
  images: Image[];
}

export interface Size{
  size: string;
  stock: number;
}

export interface Color{
  name: string;
}

export interface Image {
  name: string;
  file: string;
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
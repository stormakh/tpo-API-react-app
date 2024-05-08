import { Product } from "./products";

export interface shoppingItem extends Product{
    amount: number;
}

export interface shoppingCart {
    products: shoppingItem[];
    totalAmount: number;
    totalPrice: number;
}
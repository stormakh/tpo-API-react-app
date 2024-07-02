import { ProductDetail } from "./products";

export interface shoppingItem extends ProductDetail{
    amount: number;
}

export interface shoppingCart {
    products: shoppingItem[];
    totalAmount: number;
    totalPrice: number;
}
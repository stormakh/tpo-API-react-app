import { Product } from "./products";

export interface shoppingItem extends Product{
    amount: number;
}
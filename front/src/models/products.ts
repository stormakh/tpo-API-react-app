// Define the product interface
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    colors : string[];
    sizes : string[];
    stock ? : number;
    categories: string[];
    material : string[];
    images: string[];
    parentCategories: string[];
}

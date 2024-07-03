export interface OrderDetail {
    productId: Number;
    quantity: Number;
    sizeDescription: string;
}

export interface Order {
    id: number;
    user: string;
    orderDate: string;
    totalPrice: number;
    status: number;
    items: OrderItem[];
    discounts: [];
}

interface OrderItem {
    productId: number;
    productDescription: string;
    sizeDescription: string;
    quantity: number;
    price: number;
}

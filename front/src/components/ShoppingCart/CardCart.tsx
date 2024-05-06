import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import React from "react";
import store from "@/store/store"

interface CardProps{
    subTotal: number;
    shipCost: number;
    serviceTax: number;
}

function countSubTotal(){
    const products = store.getState().products;
    let amount = 0;
    products.map((prod) =>{
        amount = amount + prod.price;
    })
    return amount;
}

export default function CardCart({subTotal, shipCost, serviceTax}: CardProps){

    return (
        <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 pl-6 pr-6">
            <div className="h-20 w-full flex items-center"> 
                <span className="w-3/4">Subtotal</span>
                <span className="w-1/4 flex justify-end">${countSubTotal()}</span>
            </div>
            <Separator className="bg-gray-300"></Separator> 
            <div>
                <div className="h-20 w-full flex items-center justify-between"> 
                    <span className="w-3/4">Costo Envio</span>
                    <span className="w-1/4 flex justify-end">${shipCost}</span>
                </div>
                <div className="h-20 w-full flex items-center">
                    <span className="w-3/4">Tarifa por servicio</span>
                    <span className="w-1/4 flex justify-end">${serviceTax}</span>
                </div>
            </div>
            <Separator className="bg-gray-300"></Separator> 
            <div className="h-20 w-full flex items-center"> 
                <span className="w-3/4"><b>Total</b></span>
                <span className="w-1/4 flex justify-end"><b>${subTotal+shipCost+serviceTax}</b></span>
            </div>
        </Card>
    );

}
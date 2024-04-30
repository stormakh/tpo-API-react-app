import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import React from "react";

export default function(props){

    let {sub, shipCost, serviceTax} = props.cartCosts;

    return (
        <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 pl-6 pr-6">
            <div className="h-20 w-full flex items-center"> 
                <span className="w-3/4">Subtotal</span>
                <span className="w-1/4 flex justify-end">${sub}</span>
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
                <span className="w-1/4 flex justify-end"><b>${sub+shipCost+serviceTax}</b></span>
            </div>
        </Card>
    );

}
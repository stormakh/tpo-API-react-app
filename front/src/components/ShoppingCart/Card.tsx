import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import React from "react";

export default function(){
    return (
        <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 ">
            <div className="h-20 w-full flex ">
            <span className="w-3/4">Subtotal</span>
            <span className="w-1/4">$300.000</span>
            </div>
            <Separator className="bg-gray-300 w-5/6"></Separator> 
            <div>
                <div className="h-20 w-full flex ">
                <span className="w-3/4">Costo Envio</span>
                <span className="w-1/4">A calcular</span>
                </div>
                <div className="h-20 w-full flex ">
                <span className="w-3/4">Tarifa por servicio</span>
                <span className="w-1/4">$2.350</span>
                </div>
            </div>
            <Separator className="bg-gray-300"></Separator> 
            <div className="h-20 w-full flex ">
            <span className="w-3/4">Total</span>
            <span className="w-1/4">$304.500</span>
            </div>
        </Card>
    );

}
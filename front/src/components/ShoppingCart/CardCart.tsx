import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

interface CardProps{
    subTotal: number;
    shipCost: number;
    serviceTax: number;
}

export default function CardCart({subTotal, shipCost, serviceTax}: CardProps){

    return (
        <Card className=" border-solid border-gray-300 mb-20 mt-20 pl-6 pr-6">
            <div className="h-20 w-full flex items-center"> 
                <span className="w-3/4">Subtotal</span>
                <span className="w-1/4 flex justify-end">${(subTotal).toFixed(2)}</span>
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
                <span className="w-1/4 flex justify-end"><b>${(subTotal+shipCost+serviceTax).toFixed(2)}</b></span>
            </div>
        </Card>
    );

}
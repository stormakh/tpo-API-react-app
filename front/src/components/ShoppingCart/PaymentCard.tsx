import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import React from "react";
import CheckButton from "@/components/ShoppingCart/CheckButton"

export default function(){

    const paymentMethods = [
        {title: "Depósito / Transferencia Bancaria", description: "Realiza tu pago directamente en nuestra cuenta bancaria. Por favor, usa el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta." },
        {title: "3 Cuotas sin interés", description: "Realiza tu pago directamente en nuestra cuenta bancaria. Por favor, usa el número del pedido como referencia de pago. Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta." }
        ]

    return (
        <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 ">

            {paymentMethods.map(method => ( 
                <div className=" w-full flex m-6">
                    <div className="flex justify-center items-center">
                        <CheckButton></CheckButton>
                    </div>
                    <div className="flex flex-col ml-6 mr-12">
                        <span className="">{method.title}</span>
                        <span className=" font-light text-base mt-3">
                            {method.description}
                        </span>
                    </div>
                </div>
            ))}
        </Card>
    );

}
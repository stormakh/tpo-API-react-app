import React from "react";
import { Separator } from "../ui/separator";

interface CheckoutItemProps{

        imgUrl?: string; 
        description: string;
        price: number;
        quantity: number;
        size: string;
}

export default function CheckoutItem({imgUrl="https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp", description, price, quantity, size} : CheckoutItemProps){

    return (
        <tr className="flex justify-between mt-6">
            <td className="p-2 flex w-1/3">
                <img className="rounded-lg w-32 h-32 object-cover" src={imgUrl} alt="Ejemplo" />
            </td>
            <td className="flex flex-col w-1/3 justify-start ">
                    <p className="flex justify-start">{description}</p>
                    <p className="flex justify-start font-thin">{"estilo"}</p>
                    <p className="flex justify-start font-thin">{size}</p>
            </td>
            <td className="flex flex-col w-1/3 justify-start ">
                    <p className="flex justify-end font-medium">${price}</p>
                    <p className="flex justify-end font-thin">Unidades: {quantity}</p>
            </td>
        </tr>
    );
}
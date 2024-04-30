import React from "react";
import { Separator } from "../ui/separator";

export default function(props){

    let {imgUrl, description, price, quantity, size} = props.productData;

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
                    <p className="flex justify-end font-medium">{price}</p>
                    <p className="flex justify-end font-thin">Unidades: {quantity}</p>
            </td>
        </tr>
    );
}
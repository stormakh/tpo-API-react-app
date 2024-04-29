import React from "react";
import { Separator } from "../ui/separator";

export default function(props){

    let {imgUrl, description, price, quantity, size} = props.productData;

    return (
        <tr className="">
            <td className="p-2">
                <img className="rounded-lg w-32 h-32 object-cover" src={imgUrl} alt="Ejemplo" />
            </td>
            <td className="flex flex-col">
                <div>{description}</div>
                <div>{size}</div>
            </td>
            <td>
                <div>{price}</div>
                <div>{quantity}</div>
            </td>
        </tr>
    );
}
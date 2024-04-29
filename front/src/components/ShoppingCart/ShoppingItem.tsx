import React from "react";
import { Input } from "@/components/ui/input";
import {PlusIcon, MinusIcon, TrashIcon} from "lucide-react";
import producQuantity from "../../pages/ShoppingCart"

export default function (props){

    let {id, name, size, quantity, price} = props.productData;


    const sumarProducto = (id) => {
        quantity = quantity + 1;
      };
    
    const restarProducto = (id) => {
        if (quantity > 0){
            quantity = quantity + 1;
        }
    };
    
    return (
    <tr key={id} className="h-40">
        <td className="">
          <img className="rounded-lg w-32 h-32 object-cover" src={'https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp'} alt="Ejemplo" />
        </td>
        <td className="justify-center text-center">
            <div className="flex flex-col justify-between ">
                <div><b>{name}</b></div>
            </div>
        </td>
        <td className="justify-center text-center">
          <div>{price}</div>  
        </td>
        <td className="text-center h-32 justify-center">
          <div className="flex justify-center h-full items-center">
            <div className="flex rounded-md h-8 items-center">
              <button className="flex items-center justify-center content-start w-6 h-6 border-2 border-black hover:bg-gray-200 rounded-full" onClick={() => sumarProducto(id)}>
                <PlusIcon className="w-4 h-4 text-black-900" /> 
              </button>
              <input type="text" className="w-14 outline-none ml-2 mr-2 border-2 border-chiro-nopay text-center rounded-md text-black" placeholder={quantity.toString()} />
              <button className="flex items-center justify-center w-6 h-6 border-2 border-black hover:bg-gray-200 rounded-full" onClick={() => restarProducto(id)}>
                <MinusIcon className="w-4 h-4 text-black-900" /> 
              </button> 
            </div>
          </div>
        </td>
        <td className=" h-40 text-center align-top flex justify-center items-center text-center">
          <p><b>$ {(price * quantity).toFixed(2)}</b></p>
        </td>
        <td className=" text-center">
            <button>
                <TrashIcon className="w-8 w-8"></TrashIcon>
            </button>
            
        </td>
    </tr>
    );

}
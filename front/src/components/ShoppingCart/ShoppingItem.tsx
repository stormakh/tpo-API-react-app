import { useState } from "react";
import {PlusIcon, MinusIcon, TrashIcon} from "lucide-react";
import { shoppingItem } from "@/models/shoppingItem";
import { useDispatch } from "react-redux";
import { addAmountToProduct } from "@/store/store";

export default function ShoppingItem(product: shoppingItem){

    let [countQuantity, setQuantity] = useState(product.amount);
    const dispatch = useDispatch();
    
    const addAmount = () => {
      dispatch(addAmountToProduct({id: product.id, amount: 1}));
      setQuantity(countQuantity + 1);
      };
    
    const discountAmount = () => {
      const amount = 1;
      if (product.amount >= amount){
        dispatch(addAmountToProduct({id: product.id, amount: amount}));
      }  
    };
    
    return (
    <tr key={product.id} className="h-40">
        <td className="">
          <img className="rounded-lg w-32 h-32 object-cover" src={'https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp'} alt="Ejemplo" />
        </td>
        <td className="justify-center text-center">
            <div className="flex flex-col justify-between">
                <p className="text-3xl"><b>{product.name}</b></p>
            </div>
        </td>
        <td className="justify-center text-center">
          <p className="text-3xl" >{product.price}</p>  
        </td>
        <td className="text-center h-32 justify-center">
          <div className="flex justify-center h-full items-center">
            <div className="flex rounded-md h-8 items-center">
              <button className="flex items-center justify-center content-start w-6 h-6 hover:bg-gray-200 rounded-full" onClick={() => addAmount()}>
                <PlusIcon className="w-4 h-4 text-black-900" /> 
              </button>
              <input readOnly type="text" className="w-14 outline-none ml-2 mr-2 text-center rounded-md text-black" placeholder={countQuantity.toString()} />
              <button className="flex items-center justify-center w-6 h-6 hover:bg-gray-200 rounded-full" onClick={() => discountAmount()}>
                <MinusIcon className="w-4 h-4 text-black-900" /> 
              </button> 
            </div>
          </div>
        </td>
        <td className=" h-40 text-center align-top flex justify-center items-center text-center">
          <p className="text-3xl" ><b>$ {(product.price * product.amount).toFixed(2)}</b></p>
        </td>
        <td className=" text-center">
            <button>
                <TrashIcon className="w-8 w-8"></TrashIcon>
            </button>
            
        </td>
    </tr>
    );

}
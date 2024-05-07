import { useState } from "react";
import {PlusIcon, MinusIcon, TrashIcon} from "lucide-react";
import { addProduct, removeProduct } from "@/store/store";
import { useDispatch } from "react-redux";
import { cartProduct } from "@/models/cartProduct";

export default function ShoppingItem(product: cartProduct){

  let [countQuantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleAddProductToCart(){
    dispatch(addProduct(product));
    setQuantity(countQuantity+1);
  }
      
  function handleRemoveProductToCart(){
    dispatch(removeProduct(product.id));
    setQuantity(countQuantity-1);
  }
    
    return (
    <tr key={product.id} className="h-40">
        <td className="">
          <img className="rounded-lg w-32 h-32 object-cover" src={'https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp'} alt="Ejemplo" />
        </td>
        <td className="justify-center text-center">
            <div className="flex flex-col justify-between">
                <p className="text-3xl"><b>{product.description}</b></p>
            </div>
        </td>
        <td className="justify-center text-center">
          <p className="text-3xl" >{product.price}</p>  
        </td>
        <td className="text-center h-32 justify-center">
          <div className="flex justify-center h-full items-center">
            <div className="flex rounded-md h-8 items-center">
              <button className="flex items-center justify-center content-start w-6 h-6 hover:bg-gray-200 rounded-full" onClick={handleAddProductToCart}>
                <PlusIcon className="w-4 h-4 text-black-900" /> 
              </button>
              <input readOnly type="text" className="w-14 outline-none ml-2 mr-2 text-center rounded-md text-black" placeholder={countQuantity.toString()} />
              <button className="flex items-center justify-center w-6 h-6 hover:bg-gray-200 rounded-full" onClick={handleRemoveProductToCart}>
                <MinusIcon className="w-4 h-4 text-black-900" /> 
              </button> 
            </div>
          </div>
        </td>
        <td className=" h-40 text-center align-top flex justify-center items-center text-center">
          <p className="text-3xl" ><b>$ {(product.price * product.quantity).toFixed(2)}</b></p>
        </td>
        <td className=" text-center">
            <button onClick={handleRemoveProductToCart}>
                <TrashIcon className="w-8 w-8"></TrashIcon>
            </button>
        </td>
    </tr>
    );

}

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

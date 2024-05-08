import { useState } from "react";
import { PlusIcon, MinusIcon, TrashIcon } from "lucide-react";
import { shoppingItem } from "@/models/shoppingCart";
import { useDispatch } from "react-redux";
import { addAmountToProduct, discountAmountToProduct, removeProduct } from "@/store/store";


export default function ShoppingItem(product: shoppingItem){
  const [countQuantity, setCountQuantity] = useState(product.amount);
  const dispatch = useDispatch();

  const addAmount = (id: number) => {
    dispatch(addAmountToProduct({ id: id, amount: 1 }));
    setCountQuantity(prevCount => prevCount + 1);
  };

  const discountAmount = (id: number) => {
    const amount = 1;
    if (countQuantity > amount) {
      dispatch(discountAmountToProduct({ id: id, amount: amount }));
      setCountQuantity(prevCount => prevCount - amount);
    } else {
      deleteProduct(id);
    }
  };

  const deleteProduct = (id: number) => {
    dispatch(removeProduct(id));
  };

  return (
    <tr id={product.id.toString()} className="h-40">
      <td className="">
        <img className="rounded-lg w-32 h-32 object-cover" src={product.images[0]} alt="Ejemplo" />
      </td>
      <td className="justify-center text-center">
        <div className="flex flex-col justify-between">
          <p className="text-3xl"><b>{product.name}</b></p>
        </div>
      </td>
      <td className="justify-center text-center">
        <p className="text-3xl">{product.price}</p>
      </td>
      <td className="text-center h-32 justify-center">
        <div className="flex justify-center h-full items-center">
          <div className="flex rounded-md h-8 items-center">
            <button className="flex items-center justify-center content-start w-6 h-6 hover:bg-gray-200 rounded-full" onClick={() => addAmount(product.id)}>
              <PlusIcon className="w-4 h-4 text-black-900" />
            </button>
            <input readOnly type="text" className="w-14 outline-none ml-2 mr-2 text-center rounded-md text-black" value={countQuantity} />
            <button className="flex items-center justify-center w-6 h-6 hover:bg-gray-200 rounded-full" onClick={() => discountAmount(product.id)}>
              <MinusIcon className="w-4 h-4 text-black-900" />
            </button>
          </div>
        </div>
      </td>
      <td className=" h-40 text-center align-top flex justify-center items-center ">
        <p className="text-3xl"><b>$ {(product.price * countQuantity).toFixed(2)}</b></p>
      </td>
      <td className="text-center">
        <button onClick={() => deleteProduct(product.id)}>
          <TrashIcon className="w-8" />
        </button>
      </td>
    </tr>
  );
};

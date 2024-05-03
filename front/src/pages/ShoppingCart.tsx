import NavBar from "@/components/NavBar";

import { Separator } from "@/components/ui/separator";

import {PlusIcon, MinusIcon} from "lucide-react";
import { useState } from "react";

export default function(){

  

  const [products, setProducts] = useState([
    {id: 1, name: 'Producto 1', price: 200.23, size: "xs", quantity: 1 },
    {id: 2, name: 'Producto 2', price: 300.44, size: "m", quantity: 2 },
    {id: 3, name: 'Producto 3', price: 250.66, size: "L", quantity:1 },
  ]);

  const [productsQuantity, setQuantity] = useState(products.reduce((total, element) => total + element.quantity,0));

  const sumarProducto = (id) => {
    console.log(products);
    setProducts(products =>{
      return products.map(element =>
        {
          if (element.id == id){
            setQuantity(productsQuantity+1);
            return {...element, quantity: element.quantity+1};
          }
          else {
            return element;
          }
        }
      );
    });
  };

  const restarProducto = (id) => {
    console.log(products);
    setProducts(products =>{
      return products.map(element =>
        {
          if (element.id == id && element.quantity >0){
            setQuantity(productsQuantity-1);
            return {...element, quantity: element.quantity-1};
          }
          else {
            return element;
          }
        }
      );
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center mt-24 h-screen">
        <div className="p-10 w-2/3 pr-20 text-2xl">
          <div className="flex  mb-3">
            <h1 className="pb-5 font-roboto font-semibold w-3/4">
              SHOPPING CART
            </h1>
            <h1 className="pb-5 pr-24 font-roboto font-semibold w-1/4 text-right">
              {productsQuantity} ITEMS
            </h1>
          </div>

          <Separator className="bg-chiro-nopay"></Separator>

          <table className="w-full divide-x-100 mt-10 text-xl">
            <thead>
              <tr className=" h-14 align-top">
                <th className="w-1/2 text-left font-normal">Product Details</th> 
                <th className="w-1/4 text-center font-normal">Quantity</th>  
                <th className="w-1/4 text-center font-normal ">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(item => (
                <tr key={item.id} className="h-32">
                  <td className="text-left flex mb-10">
                    <img className="rounded-lg w-32 h-32 object-cover mr-4" src={'https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp'} alt="Ejemplo" />
                    <div className="flex flex-col justify-between ">
                      <div><b>{item.name}</b></div>
                      <div><b>Precio:</b> {item.price}</div>
                      <div><b>Talle:</b>  {item.size}</div>
                    </div>
                  </td>
                  <td className="text-center h-32">
                    <div className="flex justify-center h-full">
                      <div className="flex rounded-md h-8 items-center">
                        <button className="flex items-center justify-center content-start w-6 h-6 border-2 border-black hover:bg-gray-200 rounded-full" onClick={() => sumarProducto(item.id)}>
                          <PlusIcon className="w-4 h-4 text-black-900" /> 
                        </button>
                        <input type="text" className="w-14 outline-none ml-2 mr-2 border-2 border-chiro-nopay text-center rounded-md text-black" placeholder={item.quantity.toString()} />
                        <button className="flex items-center justify-center w-6 h-6 border-2 border-black hover:bg-gray-200 rounded-full" onClick={() => restarProducto(item.id)}>
                          <MinusIcon className="w-4 h-4 text-black-900" /> 
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className=" h-32 text-center align-top">
                    <b>$ {(item.price * item.quantity).toFixed(2)}</b> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-10 w-1/3 justify-center font-roboto bg-gray-300 h-full">
          <h1 className="font-semibold">SUMMARY</h1>  
        </div>
      </div>
    </>
  );
};
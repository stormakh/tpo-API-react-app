import NavBar from "@/components/NavBar";
import ShoppingItem from "@/components/ShoppingCart/ShoppingItem";
import { Button } from "@/components/ui/button";
import  Card  from "@/components/ShoppingCart/CardCart";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function(){

    const [products, setProducts] = useState([
      {id: 1, name: 'Producto 1', price: 200.23, size: "xs", quantity: 1 },
      {id: 2, name: 'Producto 2', price: 300.44, size: "m", quantity: 2 },
      {id: 3, name: 'Producto 3', price: 250.66, size: "L", quantity:1 },
    ]);

    const cartAmouts = {subTotal:1000, shipCost:300, serviceTax:20};

    const [productsQuantity, setQuantity] = useState(products.reduce((total, element) => total + element.quantity,0));

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center mt-24 h-screen">
        <div className="p-10 pl-30 w-2/3 text-2xl ">
          
          <div className="flex  mb-3">
            <h1 className="pb-5 font-roboto font-semibold w-3/4 text-4xl">
              SHOPPING CART
            </h1>
            <h1 className="pb-5 pr-24 font-roboto font-semibold w-1/4 text-right text-3xl">
              {productsQuantity} ITEMS
            </h1>
          </div>

          <Separator className="bg-chiro-nopay"></Separator>

          <table className="w-full divide-x-100 mt-10 text-xl">
            <thead>
              <tr className="h-14 w-full">
                <th className="w-1/5 text-left font-normal underline text-2xl">Producto</th> 
                <th className="w-1/5 text-center font-normal underline text-2xl">Detalle</th> 
                <th className="w-1/5 text-center font-normal underline text-2xl">Precio</th>  
                <th className="w-1/5 text-center font-normal underline text-2xl">Cantidad</th> 
                <th className="w-1/5 text-center font-normal underline text-2xl">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(item => ( 
                <ShoppingItem {...item}></ShoppingItem>
              ))}
            </tbody>
          </table>
          <button className="flex pt-12">
            <ArrowLeft></ArrowLeft>
            <p className="pl-3">Continue Shopping</p>
          </button>
        </div>

        <div className=" w-1/3 font-roboto h-full p-10 pl-20 pr-20 flex flex-col justify-start">
          <h1 className="font-semibold text-4xl">Resumen de la compra</h1>  
          <Card {...cartAmouts}></Card>
          <span>Al hacer click en Finalizar compra, estás aceptando nuestros <b>Términos y condiciones</b></span>
          <Button className="bg-black border-silk border-2 text-black w-full h-16 text-2xl text-white mt-5">
            Finalizar Compra 
          </Button>
        </div>
      </div>

    </>
  );
};
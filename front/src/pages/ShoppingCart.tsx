import NavBar from "@/components/NavBar";
import ShoppingItem from "@/components/ShoppingCart/ShoppingItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CircleX, Save, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function(){

    const [products, setProducts] = useState([
      {id: 1, name: 'Producto 1', price: 200.23, size: "xs", quantity: 1 },
      {id: 2, name: 'Producto 2', price: 300.44, size: "m", quantity: 2 },
      {id: 3, name: 'Producto 3', price: 250.66, size: "L", quantity:1 },
    ]);

    const [productsQuantity, setQuantity] = useState(products.reduce((total, element) => total + element.quantity,0));

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center mt-24 h-screen">
        <div className="p-10 pl-30 w-2/3 text-2xl">
          
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
              <tr className="h-14 w-full">
                <th className="w-1/5 text-left font-normal">Producto</th> 
                <th className="w-1/5 text-center font-normal">Detalle</th> 
                <th className="w-1/5 text-center font-normal">Precio</th>  
                <th className="w-1/5 text-center font-normal">Cantidad</th> 
                <th className="w-1/5 text-center font-normal ">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(item => ( 
                <ShoppingItem productData={item}></ShoppingItem>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" w-1/3 font-roboto h-full pl-20 pr-20 flex flex-col justify-start">
          <h1 className="font-semibold text-4xl">Resumen de la compra</h1>  
          <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 ">
            <div className="h-20 w-full flex ">
              <span className="w-3/4">Subtotal</span>
              <span className="w-1/4">$300.000</span>
            </div>
            <Separator className="bg-gray-300 w-5/6"></Separator> 
              <div>
                <div className="h-20 w-full flex ">
                  <span className="w-3/4">Costo Envio</span>
                  <span className="w-1/4">A calcular</span>
                </div>
                <div className="h-20 w-full flex ">
                  <span className="w-3/4">Tarifa por servicio</span>
                  <span className="w-1/4">$2.350</span>
                </div>
              </div>
            <Separator className="bg-gray-300"></Separator> 
            <div className="h-20 w-full flex ">
              <span className="w-3/4">Total</span>
              <span className="w-1/4">$304.500</span>
            </div>
          </Card>
          <span>Al hacer click en Finalizar compra, estás aceptando nuestros <b>Términos y condiciones</b>. </span>
          <Button className="bg-black border-silk border-2 text-black w-full h-16 text-2xl text-white mt-5">
            Finalizar Compra 
          </Button>
        </div>
      </div>
    </>
  );
};
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import Card from "@/components/ShoppingCart/Card";
import CheckoutItem from "@/components/ShoppingCart/CheckoutItem";
import PaymentCard from "@/components/ShoppingCart/PaymentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react"

export default function(){
    const [products, setProducts] = useState([
        {imgUrl: "https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp", description: 'Producto 1', price: 200.23, size: "xs", quantity: 1 },
        {imgUrl: "https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp", description: 'Producto 2', price: 300.44, size: "m", quantity: 2 },
        {imgUrl: "https://acdn.mitiendanube.com/stores/001/126/411/products/img_6410-45e22b7745aa8ecce417076008276388-1024-1024.webp", description: 'Producto 3', price: 250.66, size: "L", quantity:1 },
      ]);
      
    return(
        <div className="flex flex-col">
            <NavBar></NavBar>
            <Banner text="Checkout"></Banner>
            <button className="">
                <ArrowLeft></ArrowLeft>
                Continue Shopping
            </button>
            <div className="flex">
                <div className="w-3/4 p-24">
                    <div className="flex pb-10">
                        <h1 className="text-5xl  font-medium">Settings</h1>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 flex flex-col text-left">
                            <h2 className="my-4 font-semibold place-items-start">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Talle:</h2>
                            <Input placeholder="Talle" className="w-3/4 h-24"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                        </div>   
                        <div className="w-1/2 flex flex-col text-left">
                            <h2 className="my-4 font-semibold place-items-start">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Talle:</h2>
                            <Input placeholder="Talle" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                        </div>  
                    </div>
                    <h2 className="my-4 font-semibold">Precio:</h2>
                    <Input placeholder="Precio" className="w-3/4 h-48"></Input>
                </div>

                <div className="w-1/4 p-16">
                <h1 className="text-4xl  font-medium">Tu pedido</h1>
                <table className="w-full">
                    <thead>
                        <tr className="h-14 w-full">
                            <th className="w-1/3 text-left font-normal"></th> 
                            <th className="w-1/3 text-center font-normal"></th> 
                            <th className="w-1/3 text-center font-normal"></th>  
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {products.map(item => ( 
                            <CheckoutItem productData={ item}></CheckoutItem>
                        ))}
                    </tbody>
                </table>
                <Card></Card>
                <PaymentCard></PaymentCard>
                <div>
                    Tu información personal será utilizada para procesar tu pedido y apoyar tu experiencia en este sitio web. 
                    La misma también podrá ser utilizada para futuras acciones de marketing.
                </div>
                <Button className="bg-black border-silk border-2 text-black w-full h-16 text-2xl text-white mt-5">
                    Finalizar Compra 
                </Button>
                </div>
            </div>
        </div>
    );
}
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
    
    const cartAmouts = {sub:1000, shipCost:300, serviceTax:20};

    return(
        <div className="flex flex-col">
            <NavBar></NavBar>
            <Banner text="Checkout"></Banner>
            <button className="flex pt-12">
            <ArrowLeft></ArrowLeft>
            <p className="pl-3">Continue Shopping</p>
          </button>
            <div className="flex">
                <div className="w-3/4 m-36 ">
                    <div className="flex pb-10">
                        <h1 className="text-6xl font-medium">Settings</h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-full flex flex-col text-left mr-12">
                            <h2 className="my-4 font-light place-items-start text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Talle:</h2>
                            <Input placeholder="Talle" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        </div>   
                        <div className="w-full flex flex-col text-left ml-12">
                            <h2 className="my-4 font-light place-items-start text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Talle:</h2>
                            <Input placeholder="Talle" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                            <h2 className="my-4 font-light text-5xl pt-9 pb-3">Precio:</h2>
                            <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        </div>  
                    </div>
                    <div className="">
                        <h2 className="my-4 font-light text-5xl pt-9 pb-3">Precio:</h2>
                        <Input placeholder="Precio" className=" h-48 text-3xl rounded-xl border-gray-500"></Input>
                    </div>
                </div>

                <div className="w-1/4 pr-12 pt-24">
                <h1 className="text-4xl  font-medium">Tu pedido</h1>
                <table className="w-full">
                    <tbody className="">
                        {products.map(item => ( 
                            <div>
                                <CheckoutItem productData={item}></CheckoutItem>
                            </div>
                        ))}
                    </tbody>
                </table>
                <Card cartCosts={cartAmouts}></Card>
                <PaymentCard></PaymentCard>
                <div className="font-thin">
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
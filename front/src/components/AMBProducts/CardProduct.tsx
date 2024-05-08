import {
    Card,
    CardContent
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { Product } from "@/models/products";
import { Link } from "react-router-dom";

export default function CardProduct(product: Product){
    return (
        <Card className="flex flex-row justify-center items-center p-6 m-3 ">
            <CardContent className="items-center h-64 w-full">
                <div className="flex h-64 w-full">
                    <div className="justify-start pr-9">
                        <img src={product.images[0]} alt="" className="w-auto h-64 rounded"/>
                    </div>
                    <div className="">
                        <p className="text-4xl font-medium h-1/4">{product.name}</p>
                        <p className="text-4xl font-light h-1/4"><b>Precio: </b> ${product.price}</p>
                        <p className="text-4xl font-light h-1/4"><b>Talle: </b>{product.sizes[0]}</p>
                        <div className="flex h-1/4 gap-6">
                        <Button disabled className="bg-white border-silk border-2 w-48 h-16 text-2xl text-black">
                            Sold
                        </Button>
                        <Button disabled className="bg-white border-silk border-2 w-48 h-16 text-2xl text-black">
                            Shared
                        </Button>
                        <Link to={`/seller/product-details-sellers/${product.id.toString()}`}>
                            <Button className="bg-white border-silk border-2 w-48 h-16 text-2xl text-black">
                                Edit  
                            </Button>
                        </Link>
                        </div>
                    </div>  
                </div>
            </CardContent>
        </Card>     
    );
}
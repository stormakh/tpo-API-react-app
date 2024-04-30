import {
    Card,
    CardContent
  } from "@/components/ui/card"
import { EyeIcon, Trash, Wallet } from "lucide-react"
import { Button } from "../ui/button";

export default function (props){

    let {orderNro, total, paymentMethod, state} = props.orderData;
    
    return (
        <Card className="flex flex-row justify-center items-center p-3 m-3">
            <CardContent className="">
                <div className="flex">
                    <div className=" pr-36">
                        <p className="text-4xl font-medium">N° {orderNro}</p>
                        <p className="font-thin text-l">TOTAL</p>
                        <p><b>${total}</b></p>
                        <p className="font-thin text-l">METODO DE PAGO</p>
                        <p><b>{paymentMethod}</b></p>
                    </div>
                    <div className="flex flex-col justify-between text-end">
                        <div className="flex text-end">
                            <p className=" pl-6 pr-3">ver detalles</p>
                            <EyeIcon></EyeIcon>
                        </div>
                        <Button className="bg-black border-silk border-2 text-black w-52 h-16 text-2xl text-white">
                            {state}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>     
    );
}
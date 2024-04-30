import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Pencil, Wallet } from "lucide-react";
import CardAdded from "./CardAdded";


export default function (){

    const cards = [
        {finished:"9456", bank: "ICBC Argentina", expDate: "22/2027"},
        {finished:"1234", bank: "HSBC Argentina", expDate: "23/2026"},
        {finished:"5564", bank: "Banco Galicia", expDate: "04/2028"},
        {finished:"1234", bank: "Santander Rio", expDate: "12/2027"}
    ];

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <div className="w-full h-1/6 pt-12 text-4xl font-medium flex">
                    <div className="h-full content-center pr-12">Credit Cards</div>
                    <Separator className="w-5/6 bg-chiro-nopay mt-20"></Separator>
                </div>
                <div className="flex pb-12 flex-wrap">
                    {cards.map(card => ( 
                        <CardAdded cardData={card}></CardAdded>
                    ))}
                </div>
                <div className="h-1/6 flex justify-end pr-52 mt-12">
                    <Button className="bg-black border-silk border-2 text-black w-52 h-16 text-2xl text-white">
                        Añadir 
                        <Wallet className="w-10 pl-4"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
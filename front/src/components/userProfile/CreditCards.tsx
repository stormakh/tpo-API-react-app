import { CreditCard } from "lucide-react";
import CardAdded from "./CardAdded";
import DefaultButton from "../DefaultButton";
import Header from "../Header";


export default function (){

    const cards = [
        {last:"9456", bankName: "ICBC Argentina", expDate: "22/2027"},
        {last:"1234", bankName: "HSBC Argentina", expDate: "23/2026"},
        {last:"5564", bankName: "Banco Galicia", expDate: "04/2028"},
        {last:"1234", bankName: "Santander Rio", expDate: "12/2027"}
    ];

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <Header text={"Orders"} height={"1/6"} width={"full"}></Header>  
                <div className="flex pb-12 flex-wrap">
                    {cards.map(card => ( 
                        <CardAdded {...card}></CardAdded>
                    ))}
                </div>
                <div className="h-1/6 flex justify-end pr-52 mt-12">
                    <DefaultButton text={"Añadir"} icon={<CreditCard size="16"/>}></DefaultButton>
                </div>
            </div>
        </div>
    );
}
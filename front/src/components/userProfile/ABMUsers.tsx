import CardOrder from "./CardOrder";
import SectionTitle from "../SectionTitle";
import DefaultButton from "../DefaultButton";

export default function (){

    const orders =[
        {order:11456, totalAmount:300000, paymentMethod:"TARJETA DE CREDITO", state:"DESPACHADO"},
        {order:12345, totalAmount:546000, paymentMethod:"TRANSFERENCIA BANCARIA", state:"EN CURSO"}
    ];

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <SectionTitle text={"ABM USers"} height={"1/6"} width={"full"}></SectionTitle>  
                <div className="flex pb-12 flex-wrap">

                    
                </div>
            </div>
        </div>
    );
}
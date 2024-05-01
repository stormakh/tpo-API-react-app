import {
    Card,
    CardContent
  } from "@/components/ui/card"
import { Trash, Wallet } from "lucide-react"


interface CardAddedProps {
    last: string;
    bankName: string;
    expDate: string;
}

export default function CardAdded({last,bankName,expDate}: CardAddedProps){
    return (
        <Card className="flex flex-row justify-center items-center p-6 m-6">
            <button className="h-16 w-16 border border-gray-400 rounded-full border-r-3xl flex justify-center items-center">
                <Wallet></Wallet>
            </button>
            <CardContent className="ml-3">
                <p className="font-medium">TERMINADA en {last}</p>
                <p className="font-thin">{bankName}</p>
                <p className="font-thin">Vencimiento {expDate}</p>
            </CardContent>
            <button>
                <Trash className="m-9"></Trash>
            </button>
        </Card>     
    );
}
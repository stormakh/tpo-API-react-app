import { AlertTriangle, LogOut } from "lucide-react";
import Header from "../Header";
import DefaultButton from "../DefaultButton";

export default function (){

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <Header text={"log Out"} height={"1/6"} width={"full"}></Header>  
                <div className="flex justify-center flex-col items-center">
                    <AlertTriangle className="w-36 h-36"></AlertTriangle>
                    <p className="m-36 text-4xl">VAS A CERRAR LA SESIÓN DE TU CUENTA</p>
                </div>
                <div className="h-1/6 flex justify-end pr-52 mt-12">
                    <DefaultButton text={"Salir"} icon={<LogOut size="16"/>}></DefaultButton>
                </div>
            </div>
        </div>
    );
}
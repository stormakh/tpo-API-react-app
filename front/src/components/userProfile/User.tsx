import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";


export default function (){

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <div className="w-full h-1/6 pt-12 text-4xl font-medium flex">
                    <div className="h-full content-center pr-12">User Profile</div>
                    <Separator className="w-5/6 bg-chiro-nopay mt-20"></Separator>
                </div>
                <div className="flex pb-12">
                    <div className="w-full flex flex-col text-left">
                        <h2 className="my-4 font-bold place-items-start text-4xl pt-9 pb-3">Nombre</h2>
                        <Input placeholder="Precio" className="h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">Correo Electronico</h2>
                        <Input placeholder="Talle" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">Dirección</h2>
                        <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">Celular</h2>
                        <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                    </div>        
                    <div className="w-full flex flex-col text-left ml-12">
                        <h2 className="my-4 font-bold place-items-start text-4xl pt-9 pb-3">Apellido</h2>
                        <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">DNI</h2>
                        <Input placeholder="Talle" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">Ciudad</h2>
                        <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                        <h2 className="my-4 font-bold text-4xl pt-9 pb-3">Codigo Postal</h2>
                        <Input placeholder="Precio" className=" h-24 border-gray-500 text-3xl rounded-xl"></Input>
                    </div>   
                </div>
                <div className="h-1/6 flex justify-end pr-52 mt-12">
                    <Button className="bg-black border-silk border-2 text-black w-52 h-16 text-2xl text-white">
                        Edit 
                        <Pencil className="w-10 pl-4"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
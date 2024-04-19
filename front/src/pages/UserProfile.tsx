import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, CircleX, Save, Pencil, Pen } from "lucide-react";

export default function(){

    return (
        <>
        <NavBar></NavBar>
        <div>
            <div></div>
            <img src="src/assets/Banner.svg" className=""></img>
        </div>
        <div className="flex h-screen">
            <div className="w-1/5 h-screen pt-32 pl-12">
                <h1 className="text-5xl ml-5 font-medium">Settings</h1>
                <Separator className="bg-chiro-nopay mt-10"></Separator>
                <div className="flex flex-col place-items-start justify-start ml-10 mt-5">
                    <button className="pl-5 mb-5 font-bold border-l-4 border-black">User Profile</button>
                    <button className="pl-5 mb-5">Credit Cards</button>
                    <button className="pl-5 mb-5">Orders</button>
                    <button className="pl-5 mb-5">Log Out</button>
                </div>
            </div>
            <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
                <div className="h-5/6 h-full ">
                    <div className="w-full h-1/6 pt-12 text-4xl font-medium flex">
                        <div className="h-full content-center pr-12">User Profile</div>
                        <Separator className="w-5/6 bg-chiro-nopay mt-20"></Separator>
                    </div>
                    <div className="flex pb-12">
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
                        <div className="w-1/2 flex flex-col">
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Talle:</h2>
                            <Input placeholder="Talle" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
                            <h2 className="my-4 font-semibold">Precio:</h2>
                            <Input placeholder="Precio" className="w-3/4 h-16"></Input>
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
        </div>
        </>
    );
};
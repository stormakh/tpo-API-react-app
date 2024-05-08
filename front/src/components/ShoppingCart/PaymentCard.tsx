import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import React from "react";
import CheckButton from "@/components/ShoppingCart/CheckButton"
import paymentMethods from "@/mock/paymentMethods.json"
export default function(){



    return (
        <Card className="bg-gray-100 border-solid border-gray-300 mb-20 mt-20 ">

            {paymentMethods.map(method => ( 
                <div className=" w-full flex m-6">
                    <div className="flex justify-center items-center">
                        <CheckButton></CheckButton>
                    </div>
                    <div className="flex flex-col ml-6 mr-12">
                        <span className="">{method.title}</span>
                        <span className=" font-light text-base mt-3">
                            {method.description}
                        </span>
                    </div>
                </div>
            ))}
        </Card>
    );

}
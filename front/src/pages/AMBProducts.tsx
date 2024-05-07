import CardProduct from "@/components/AMBProducts/CardProduct";
import DefaultButton from "@/components/DefaultButton";
import { Card, CardContent } from "@/components/ui/card";
import { fetchBySellerId } from "@/lib/products";
import { Product } from "@/models/products";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function(){

    const currentProdsRef = useRef<Product[]>([]);
    const [filteredProds, setFilteredProds] = useState<Product[]>([]);

    useEffect(() => {
        fetchBySellerId(1).then((prods) => {
        currentProdsRef.current = prods;
        setFilteredProds(prods);
      });
    }, []);

    return(
        <div>
            <div className={"flex flex-row justify-between m-3 content-center text-center"}>
                <div>   
                    Mis Productos
                </div>
                <div>
                    {/*<DefaultButton text="Filtrar"></DefaultButton>*/}
                    <Link to={`/seller/product-details-sellers/-1`}>
                        <DefaultButton text="Add Product"></DefaultButton>
                    </Link>
                </div>
            </div>
            <Card style={{margin: "20px"}}>
                <CardContent className="flex flex-row flex-wrap bg-gray-200 p-12 justify-between">
                    {filteredProds.map(prod => ( 
                        <CardProduct {...prod}></CardProduct>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
import CardProduct from "@/components/AMBProducts/CardProduct";
import Banner from "@/components/Banner";
import DefaultButton from "@/components/DefaultButton";
import { Card, CardContent } from "@/components/ui/card";
import { getUserSession } from "@/helpers/user";
import { fetchBySellerId } from "@/lib/products/products";
import { ProductDetail } from "@/models/products";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function(){

    const currentProdsRef = useRef<ProductDetail[]>([]);
    const [filteredProds, setFilteredProds] = useState<ProductDetail[]>([]);
    const user = getUserSession();

    useEffect(() => {
        fetchBySellerId(user.id).then((prods) => {
        currentProdsRef.current = prods;
        setFilteredProds(prods);
      });
    }, []);

    return(
        <div>
            <Banner text="Mis Productos"></Banner>
            <div className={"flex flex-row justify-between m-3 content-center text-center p-6"}>
                <div>   
                    Mis Productos
                </div>
                <div>
                    {/*<DefaultButton text="Filtrar"></DefaultButton>*/}
                    <Link to={`/seller/product-details-seller`}>
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
import { sellerRequest } from "@/models/users";
import SectionTitle from "../SectionTitle";
import { useEffect, useState } from "react";
import { getUsersRequests } from "@/lib/users";

export default function (){

    const [sellersRequests, setSellersRequests] = useState<sellerRequest[]>();

    useEffect(() => {
        const asyncOrders = async () => {
            console.log("holis");
            setSellersRequests(await getUsersRequests(JSON.parse(localStorage.getItem('accessToken')!)));
        }
        asyncOrders();
    }, []);

    return (
        <div className="bg-white w-4/5 h-full flex flex-col pl-32 pr-32"> 
            <div className="h-5/6 h-full ">
                <SectionTitle text={"ABM USers"} height={"1/6"} width={"full"}></SectionTitle>  
                <div className="flex pb-12 flex-wrap">
                    {sellersRequests != null ? sellersRequests.map((request) => (
                <tr key={request.idRequest}>
                    <td>{/* request.user */}</td>
                </tr>
                )) : <tr><td>loading..</td></tr>}
                </div>
            </div>
        </div>
    );
}
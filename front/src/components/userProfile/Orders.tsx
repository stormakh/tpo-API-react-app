import { useDispatch, useSelector } from "react-redux";
import { UserSession } from "@/models/users";
import { fetchByUser } from "@/lib/orders";
import { Order } from "@/models/orders";
import { useEffect, useState } from "react";


export default function (){


    const user = useSelector(
        (state: { userSession: UserSession }) => state.userSession);
        console.log("useeer ",user);
    const [clientOrders, setClientOrders] = useState<Order[]>();

    useEffect(() => {
        const asyncOrders = async () => {
            console.log("holis");
            setClientOrders(await fetchByUser(user.id));
        }
        asyncOrders();
    }, []);

    return (
        <table>
          <thead>
            <tr>
              <th>Orden del Pedido</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {clientOrders != null ? clientOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.orderDate}</td>
              </tr>
            )) : <tr><td>loading..</td></tr>}
          </tbody>
        </table>
      );
}
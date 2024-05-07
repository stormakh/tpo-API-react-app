import Banner from "@/components/Banner";
import CheckOutForm from "@/components/CheckOut/CheckOutForm";
import Card from "@/components/ShoppingCart/CardCart";
import CheckoutItem from "@/components/ShoppingCart/CheckoutItem";
import PaymentCard from "@/components/ShoppingCart/PaymentCard";
import { Button } from "@/components/ui/button";
import store from "@/store/store";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {clearProducts} from "@/store/store"
import { cartProduct } from "@/models/cartProduct";

export default function Checkout() {

  const products = useSelector((state: { products: cartProduct[] }) => state.products);

  const dispatch = useDispatch();
  function handleCheckout(){
    dispatch(clearProducts());
    console.log(store.getState().products);
  }

  return (
    <>
      <Banner text="Checkout"></Banner>
      <div className="flex flex-col">
        <Link to={"/shopping-cart"}>
          <button className="flex pt-12">
            <ArrowLeft></ArrowLeft>
            <p className="pl-3 font-roboto">Volver</p>
          </button>
        </Link>
        <div className="flex">
          <CheckOutForm></CheckOutForm>
          <div className="w-1/4 pr-12 pt-24 font-roboto">
            <h1 className="text-4xl  font-medium">Tu pedido</h1>
            <table className="w-full">
              <tbody className="">
                {products.map((product) => (
                  <div>
                    <CheckoutItem description={product.description} price={product.price} size={product.sizes[0]} quantity={1}></CheckoutItem>
                  </div>
                ))}
              </tbody>
            </table>
            <Card subTotal={20000} shipCost={3230} serviceTax={300}></Card>
            <PaymentCard></PaymentCard>
            <div className="font-roboto font-thin">
              Tu información personal será utilizada para procesar tu pedido y
              apoyar tu experiencia en este sitio web. La misma también podrá
              ser utilizada para futuras acciones de marketing.
            </div>
            <Button className="bg-black border-silk border-2 text-black w-full h-16 text-2xl text-white mt-5" onClick={handleCheckout}>
              <Link to={"/"} >
                Finalizar Compra
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

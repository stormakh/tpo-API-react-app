import Banner from "@/components/Banner";
import Card from "@/components/ShoppingCart/CardCart";
import CheckoutItem from "@/components/ShoppingCart/CheckoutItem";
import PaymentCard from "@/components/ShoppingCart/PaymentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shoppingCart } from "@/models/shoppingCart";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import shoppingTaxes from "@/mock/shoppingTaxes.json";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { clearCart } from "@/store/store";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const cart = useSelector(
    (state: { shoppingCart: shoppingCart }) => state.shoppingCart
  );

 const dispatch = useDispatch();
 const navigate = useNavigate();
  function handleFinalizePurchase() {
    dispatch(clearCart());
    toast("La compra se ha realizado exitosamente!");

    //set timeout for redirecting the user to home
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <>
      <Banner text="Checkout"></Banner>
      <section className="flex flex-col mb-16">
        <button className="flex pt-12">
          <ArrowLeft></ArrowLeft>
          <p className="pl-3 font-roboto">Seguir comprando</p>
        </button>
        <div className="flex">
          <section className="w-3/4 m-36 px-24 font-roboto">
            <h1 className="text-5xl font-medium">Datos Personales</h1>
            <section className="flex justify-between">
              <section className="w-full flex flex-col text-left mr-12">
                <h2 className="my-4 font-light place-items-start text-4xl pt-9 pb-3">
                  Nombre:
                </h2>
                <Input
                  placeholder="Nombre"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">
                  Provincia:
                </h2>
                <Input
                  placeholder="Provincia"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">
                  Codigo Postal:
                </h2>
                <Input
                  placeholder="Codigo Postal"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">
                  Correo electrónico:
                </h2>
                <Input
                  placeholder="Email"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
              </section>
              <section className="w-full flex flex-col text-left ml-12">
                <h2 className="my-4 font-light place-items-start text-4xl pt-9 pb-3">
                  Apellido:
                </h2>
                <Input
                  placeholder="Apellido"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">
                  Localidad:
                </h2>
                <Input
                  placeholder="Localidad"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">
                  Telefono:
                </h2>
                <Input
                  placeholder="Telefono"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
                <h2 className="my-4 font-light text-4xl pt-9 pb-3">DNI:</h2>
                <Input
                  placeholder="DNI"
                  className=" h-24 border-gray-500 text-3xl rounded-xl"
                ></Input>
              </section>
            </section>
            <h2 className="my-4 font-light text-4xl pt-9 pb-3">
              Notas de pedido:
            </h2>
            <Input
              placeholder="Ingrese notas..."
              className=" h-48 text-3xl border-gray-500"
            ></Input>
          </section>
          <div className="w-1/4 pr-12 pt-24 font-roboto">
            <h1 className="text-4xl  font-medium">Tu pedido</h1>

            {cart.products.map((item) => (
              <CheckoutItem {...item}></CheckoutItem>
            ))}

            <Card
              subTotal={cart.totalPrice}
              serviceTax={shoppingTaxes.serviceTax}
              shipCost={shoppingTaxes.shipCost}
            ></Card>
            <PaymentCard></PaymentCard>
            <div className="font-roboto font-thin">
              Tu información personal será utilizada para procesar tu pedido y
              apoyar tu experiencia en este sitio web. La misma también podrá
              ser utilizada para futuras acciones de marketing.
            </div>
            <Button
              className="bg-black border-silk border-2 w-full h-16 text-2xl text-white mt-5"
              onClick={handleFinalizePurchase}
            >
              Finalizar Compra
            </Button>
            <Toaster />
          </div>
        </div>
      </section>
    </>
  );
}

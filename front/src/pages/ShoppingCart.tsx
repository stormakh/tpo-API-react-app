import ShoppingItem from "@/components/ShoppingCart/ShoppingItem";
import { Button } from "@/components/ui/button";
import Card from "@/components/ShoppingCart/CardCart";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shoppingTaxes from "@/mock/shoppingTaxes.json";
import { shoppingCart } from "@/models/shoppingCart";
import { AppState } from "@/store/store";

export default function ShoppingCart() {
  
  const cart = useSelector((state: { shoppingCart : shoppingCart}) => state.shoppingCart);

  return (
    <>
      <div className="flex justify-center mt-24 h-screen">
        <section className="p-10 pl-30 w-2/3 text-2xl font-roboto">
          <div className="flex mb-3">
            <h1 className="pb-5 font-roboto font-semibold w-3/4 text-4xl">
              Carrito de Compras
            </h1>
            <h1 className="pb-5 pr-24 font-roboto font-semibold w-1/4 text-right text-3xl">
              {cart.totalAmount} Items
            </h1>
          </div>

          <Separator className="bg-chiro-nopay"></Separator>

          <table className="w-full divide-x-100 mt-10 text-xl font-roboto">
            <thead>
              <tr className="h-14 w-full">
                <th className="w-1/5 text-left font-normal underline text-2xl">
                  Producto
                </th>
                <th className="w-1/5 text-center font-normal underline text-2xl">
                  Detalle
                </th>
                <th className="w-1/5 text-center font-normal underline text-2xl">
                  Precio
                </th>
                <th className="w-1/5 text-center font-normal underline text-2xl">
                  Cantidad
                </th>
                <th className="w-1/5 text-center font-normal underline text-2xl">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((prod) => (
                <ShoppingItem {...prod}></ShoppingItem>
              ))}
            </tbody>
          </table>
          <Link to={"/catalog"}>
            <button className="flex pt-12">
              <ArrowLeft></ArrowLeft>
              <p className="pl-3">Seguir Comprando</p>
            </button>
          </Link>
        </section>

        <section className=" w-1/3 font-roboto h-full p-10 pl-20 pr-20 flex flex-col justify-start">
          <h1 className="font-semibold text-4xl">Resumen de la compra</h1>
          <Card
            subTotal={cart.totalPrice}
            serviceTax={shoppingTaxes.serviceTax}
            shipCost={shoppingTaxes.shipCost}
          ></Card>
          <span>
            Al hacer click en Finalizar compra, estás aceptando nuestros{" "}
            <b>Términos y condiciones</b>
          </span>
          <Link to={"/checkout"}>
            <Button className="bg-black border-silk border-2 w-full h-16 text-2xl text-white mt-5">
              Finalizar Compra
            </Button>
          </Link>
        </section>
      </div>
    </>
  );
}

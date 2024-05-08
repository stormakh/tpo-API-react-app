import { shoppingItem } from "@/models/shoppingCart";

export default function CheckoutItem(product: shoppingItem) {
  return (
    <div className="flex justify-stretch items-center mt-6">
      <img
        className="rounded-lg w-32 h-32 object-cover"
        src={product.images[0]}
        alt="Ejemplo"
      />

      <div className="flex flex-row flex-shrink min-w-0 max-h-32 px-2 justify-start ">
        <p className="flex justify-start line-clamp-2">
          {product.description}
          {"estilo"}
          {product.sizes[0]}
        </p>
      </div>
      <div className="flex flex-col flex-grow justify-start ">
        <p className=" font-thin">Unidades:{product.amount}</p>
        <p className="flex justify-end font-bold">${product.price}</p>
      </div>
    </div>
  );
}

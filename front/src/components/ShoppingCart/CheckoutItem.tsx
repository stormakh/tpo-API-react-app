import { shoppingItem } from "@/models/shoppingCart";

export default function CheckoutItem(product: shoppingItem) {
  return (
    <tr className="flex justify-between mt-6">
      <td className="p-2 flex w-1/3">
        <img
          className="rounded-lg w-32 h-32 object-cover"
          src={product.images[0]}
          alt="Ejemplo"
        />
      </td>
      <td className="flex flex-col w-1/3 justify-evenly items-start ">
        <p className="flex justify-start">{product.name}</p>
        <p className="flex justify-start font-thin">{product.colors[0]}</p>
        <p className="flex justify-start font-thin">{product.sizes[0]}</p>
      </td>
      <td className="flex flex-col w-1/3 justify-evenly items-start">
        <p className="flex justify-end font-bold">${product.price}</p>
        <p className="flex justify-end font-thin">Unidades: {product.amount}</p>
      </td>
    </tr>
  );
}

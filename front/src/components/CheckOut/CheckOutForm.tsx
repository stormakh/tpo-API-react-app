import SectionTitle from "../SectionTitle";
import { Input } from "../ui/input";

export default function CheckOutForm(){
    return (
        <section className="w-3/4 m-36 px-24 font-roboto">
            <SectionTitle text="Datos Personales"></SectionTitle>
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
    );
}
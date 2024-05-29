import { Card, CardContent } from "@/components/ui/card";
import nopayLogo from "@/assets/nopay.svg";
import nopay2 from "@/assets/nopay2.svg";
import { Link } from "react-router-dom";

const urls = ["/src/assets/home-banner-1.svg"];

export default function () {
  return (
    <>
      <div className="relative">
        <img
          src={urls[0]}
          alt="Descripción de la imagen"
          className="w-full h-auto"
        />
        <Link
          to={"catalog/None"}
          className="absolute inset-0 flex items-center justify-center bg-gray-800/10 text-white font-bold py-2 px-4 rounded text-6xl"
        >
          SHOP NOW
        </Link>
      </div>

      <Card className="w-full py-24 flex flex-col items-center h-1/3">
        <CardContent className="flex justify-start gap-8 w-5/6">
          <div className="flex flex-col items-center w-4/6">
            <img src={nopayLogo} className="w-3/6 h-3/6" alt="Logo"></img>
            <p className="text-center text-6xl items-start italic h-3/6 w-4/5">
              "Somos una marca nueva que promueve la excelencia en el diseño.
              Nos identificamos con las personas que nos eligen a través de
              experiencias de un sentido de pertenencia, de un estilo de vida,
              transmitiendo la energía y el amor del proceso creativo a cada una
              de nuestras prendas."
            </p>
          </div>
          <img src={nopay2} className="w-2/6" alt="Image"></img>
        </CardContent>
      </Card>
    </>
  );
}

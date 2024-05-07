import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";


import React from "react";



const Footer: React.FC = () => {
  return (
    <footer className="bg-footer p-4 sticky bottom-auto w-screen font-roboto">
      <div className="flex justify-between items-center">
        <img
          src="./src/assets/no_pay_footer.svg"
          alt="Nopay Logo"
          className="size-32 mx-8"
        />
        <div className="flex w-full">
          <div className="w-1/4 text-letters">
            <h3 className="font-semibold">Información</h3>
            <p>Sobre nosotros</p>
            <p>Blog</p>
            <p>Eventos</p>
            <p>Terminos & condiciones</p>
          </div>
          <div className="w-1/4 text-letters">
            <h3 className="font-semibold ">Productos</h3>
            <p><Link to="/catalog?type=Upper">Upper</Link></p>
            <p><Link to="/catalog?type=Lower">Lower</Link></p>
            <p><Link to="/catalog?type=Accessories">Accessories</Link></p>
          </div>
          <div className="w-1/4 text-letters">
            <h3 className="font-semibold ">Nuestros servicios</h3>
            <p>Orden</p>
            <p>Devoluciones & Cambios</p>
            <p>Fashion List</p>
          </div>
          <div className="w-1/4 text-letters">
            <h3 className="font-semibold ">Contactanos</h3>
            <div className="flex items-center">
              {" "}
              {/* Alinea los elementos en la misma fila */}
              <Phone className="h-4 mr-2"></Phone>
              <p>+54 9 113 23 236</p>
            </div>
            <div className="flex items-center">
              <Mail className=" h-4 mr-2"></Mail>
              <p>contacto@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b border-line my-4 w-full" />
      <p className="text-center text-letters font-semibold text-sm">
        © No Pay, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
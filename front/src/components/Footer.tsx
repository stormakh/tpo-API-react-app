import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer p-4 sticky bottom-auto w-screen h-auto">
      <div className="flex justify-between items-center">
        <img
          src="./src/assets/no_pay_footer.svg"
          alt="Nopay Logo"
          className="h-23 mr-7"
        />
        <div className="flex w-full">
          <div className="w-1/4 text-letters font-roboto">
            <h3 className="font-semibold ">Información</h3>
            <p>Sobre nosotros</p>
            <p>Blog</p>
            <p>Eventos</p>
            <p>Terminos & condiciones</p>
          </div>
          <div className="w-1/4 text-letters font-roboto">
            <h3 className="font-semibold ">Productos</h3>
            <p>Tops</p>
            <p>Jeans</p>
            <p>Remeras</p>
            <p>Buzos</p>
          </div>
          <div className="w-1/4 text-letters font-roboto"> 
            <h3 className="font-semibold ">Nuestros servicios</h3>
            <p>Orden</p>
            <p>Devoluciones & Cambios</p>
            <p>Fashion List</p>
          </div>
          <div className="w-1/4 text-letters font-roboto"> 
            <h3 className="font-semibold ">Contactanos</h3>
            <div className="flex items-center"> 
              <img
                src="./src/assets/phone-call.svg"
                alt="phone call icon"
                className="h-4 mr-2"
              />
               <p>+54 9 113 23 236</p>
            </div>
            <div className="flex items-center"> 
              <img
                src="./src/assets/mail.svg"
                alt="mail icon"
                className="h-4 mr-2"
              />
               <p>contacto@gmail.com</p>
            </div>
          </div>
        </div>
      </div> 
      <hr className="border-b border-line my-4 w-full" />
      <p className="text-center text-letters">© No Pay, All rights reserved</p>
    </footer>
  );
};

export default Footer;

import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import User from "@/components/userProfile/User";
import Orders from "@/components/userProfile/Orders";
import CreditCards from "@/components/userProfile/CreditCards";
import LogOut from "@/components/userProfile/LogOut";
import Banner from "@/components/Banner";
import { useState } from "react";

export default function () {
  const [activeButton, setActiveButton] = useState("User"); // Estado para almacenar el botón activo

  // Función para manejar el clic en un botón
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId); // Establecer el botón activo al que se ha clicado
  };

  const Buttonclicked = "pl-5 mb-5 font-bold border-l-4 border-black";
  const ButtonNotClicked = "l-5 mb-5";

  const renderActiveComponent = () => {
    switch (activeButton) {
      case "User":
        return <User />;
      case "CreditCard":
        return <CreditCards />;
      case "Orders":
        return <Orders />;
      case "LogOut":
        return <LogOut />;
      default:
        return null;
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <Banner text="Account"></Banner>
      <div className="flex h-screen">
        <div className="w-1/5 h-screen pt-32 pl-12">
          <h1 className="text-5xl ml-5 font-medium">Settings</h1>
          <Separator className="bg-chiro-nopay mt-10"></Separator>
          <div className="flex flex-col place-items-start justify-start ml-10 mt-5">
            <button
              className={
                activeButton === "User" ? Buttonclicked : ButtonNotClicked
              }
              onClick={() => handleButtonClick("User")}
            >
              User Profile
            </button>
            <button
              className={
                activeButton === "CreditCard" ? Buttonclicked : ButtonNotClicked
              }
              onClick={() => handleButtonClick("CreditCard")}
            >
              Credit Cards
            </button>
            <button
              className={
                activeButton === "Orders" ? Buttonclicked : ButtonNotClicked
              }
              onClick={() => handleButtonClick("Orders")}
            >
              Orders
            </button>
            <button
              className={
                activeButton === "LogOut" ? Buttonclicked : ButtonNotClicked
              }
              onClick={() => handleButtonClick("LogOut")}
            >
              Log Out
            </button>
          </div>
        </div>

        {renderActiveComponent()}
      </div>
    </>
  );
}

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "/src/assets/LogIn_Back.svg";
import { UserSession } from "@/models/users"
import {Link } from "react-router-dom";



export default function Register() {
    //tor no tengo ni idea de lo q estoy haciendo, ayuda 
    const [newUser, setNewUser] = useState<UserSession>({
        id: 0,
        username: "",
        type: "customer", // Por defecto
        password: "",
        email: "",
        dni: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState<UserSession[]>([]); //// It's for keeping the array of users and being able to grab the ID, not sure if it works like this thb



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = () => {

    if (!newUser.username || !newUser.dni || !newUser.password || !newUser.email) { //In case they don't fill in all the fields
        console.log("Por favor, complete todos los campos");
        return;
      }
    else{   
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUserData: UserSession = { ...newUser, id: newId };
        const updatedUsers = [...users, newUserData];
        setUsers(updatedUsers);
        setNewUser({
            id: 0,
            username: "",
            dni: "",
            password: "",
            email: "",
            type: "customer"
    
          })}

  };


  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="relative bg-white bg-opacity-90 w-96 p-8 rounded-lg border border-cbcbcb">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src="./src/assets/nopay.svg"
            alt="Nopay logo"
            className="size-32"
          />
          <h1 className="text-3xl font-semibold text-silk">Crea tu cuenta</h1>
          <h2 className="text-center text-silk text-sm font-light">
              <Link to="/login" className="font-light text-black">
                  Volver al Log In
               </Link>
          </h2>
          <div className="relative w-full flex flex-col items-center justify-center">
            <Input
              type="username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              placeholder="Username"
              className="my-6 w-full"
            />
            <Input
              type="dni"
              value={newUser.dni}
              onChange={(e) => setNewUser({ ...newUser, dni: e.target.value })}
              placeholder="DNI"
              className="my-6 w-full"
            />
            <div className="relative w-full flex flex-col items-center justify-center">
              <img
                src={`/src/assets/${showPassword ? "eye-off.svg" : "eye.svg"}`}
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 h-6 w-6 cursor-pointer"
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
              <Input
                type={showPassword ? "text" : "password"}
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                placeholder="Password"
                className="my-6 w-full"
              />
            </div>
            <Input
              className="my-6 w-full"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="Email"
            />
            <Button
              onClick={handleRegistration}
              className="my-6 w-full font-semibold text-lg bg-chiro-nopay"
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
}

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "/src/assets/LogIn_Back.svg";
import { UserSession } from "@/models/users";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "@/lib/users";
import { useDispatch } from "react-redux";
import { setUserSession } from "@/store/store";

export default function Register() {
  const initialUser: UserSession = {
    id: 0,
    username: "",
    type: "customer", // Por defecto
    password: "",
    email: "",
    dni: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<UserSession>(initialUser); //// It's for keeping the array of users and being able to grab the ID, not sure if it works like this thb
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = async () => {
    const newUser = await createUser(user);
    console.log("New user created", newUser);
    dispatch(setUserSession(newUser));
    navigate("/");
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col gap-4 items-center justify-center bg-white bg-opacity-90 w-4/6 md:w-1/2 p-8 rounded-lg border">
        <img
          src="./src/assets/nopay.svg"
          alt="Nopay logo"
          className="size-32"
        />
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-silk text-center">
            Crea tu cuenta
          </h1>
          <h2 className="text-center text-silk text-2xl font-light">
            <Link to="/login" className="font-light text-black hover:underline">
              Volver al Inicio de Sesión
            </Link>
          </h2>
        </div>
        <div className="relative w-full flex flex-col items-stretch justify-center gap-4">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-2 w-full flex-wrap">
            <div className="flex-1 min-w-0 space-y-4">
              <Input
                type="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Usuario"
              />
              <Input
                type="dni"
                value={user.dni}
                onChange={(e) => setUser({ ...user, dni: e.target.value })}
                placeholder="DNI"
              />
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <div className="relative w-full flex flex-col items-center justify-center">
                <img
                  src={`/src/assets/${
                    showPassword ? "eye-off.svg" : "eye.svg"
                  }`}
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 h-6 w-6 cursor-pointer"
                  alt={showPassword ? "Hide Password" : "Show Password"}
                />
                <Input
                  className="w-full"
                  type={showPassword ? "text" : "password"}
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Contraseña"
                />
              </div>
              <Input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
            </div>
          </div>
          <Button
            onClick={handleRegistration}
            className="my-6 w-full font-semibold text-lg bg-chiro-nopay"
          >
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
}

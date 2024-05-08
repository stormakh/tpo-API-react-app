import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import image from "/src/assets/LogIn_Back.svg";
import { useRef, useState } from "react";
import { fetchUserByNameAndPassword } from "@/lib/users";
import { setUserSession } from "@/store/store";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

export default function LogIn() {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (userNameRef.current && passwordRef.current) {
      fetchUserByNameAndPassword(
        userNameRef.current?.value,
        passwordRef.current?.value
      )
        .then((user) => {
          if (user !== null) {
            dispatch(setUserSession(user));
            setErrorMessage(null);
            navigate("/");
          } else {
            setErrorMessage("Usuario no encontrado");
          }
        })
        .catch((error: string) => {
          setErrorMessage(error);
        });
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      className="flex items-center justify-center h-screen"
    >
      <div className="relative bg-white bg-opacity-90 w-96 p-8 rounded-lg border border-cbcbcb">
        <div className="flex flex-col gap-4 items-center justify-center">
          <img
            src="./src/assets/nopay.svg"
            alt="Nopay logo"
            className="size-32"
          />
          <h1 className="text-3lx font-semibold text-silk">Bienvenido</h1>
          <h2 className="text-center text-silk text-sm font-light">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="font-semibold text-black">
              Crea una aquí
            </Link>
          </h2>
          <div className="relative w-full flex flex-col items-center justify-center space-y-4">
            <Input
              ref={userNameRef}
              type="username"
              className=" w-full"
              placeholder="Usuario"
            />
            <div className="relative w-full flex flex-col items-center justify-center">
              <img
                src={`/src/assets/${showPassword ? "eye-off.svg" : "eye.svg"}`}
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 h-6 w-6 cursor-pointer"
                alt={showPassword ? "Hide Password" : "Show Password"}
              />
              <Input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className=" w-full"
              />
            </div>

            <Button
              onClick={handleLogin}
              className="my-6 w-full font-semibold text-lg bg-chiro-nopay"
            >
              Iniciar sesión
            </Button>
            {errorMessage ? errorMessage : null}
          </div>
        </div>
      </div>
    </div>
  );
}

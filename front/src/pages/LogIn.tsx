import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import image from "/src/assets/LogIn_Back.svg";
import { useRef, useState } from "react";
import { fetchUserByNameAndPassword } from "@/lib/users";
import { setUserTypeSession } from "@/store/store";
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
            console.log("asi es se cargo el usuario y que?");
            dispatch(setUserTypeSession(user));
            setErrorMessage(null);
            navigate(`/${user.type}`);
          } else {
            setErrorMessage("User could not be found");
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
      className="w-screen h-screen"
    >
      <div className="flex flex-col gap-4 items-center justify-center bg-white/70 h-screen">
        <img
          src="./src/assets/nopay.svg"
          alt="Nopay logo"
          className="size-32 "
        ></img>
        <h1 className="text-3xl font-semibold text-silk">Bienvenido</h1>
        <h2 className="text-silk" >
              ¿No tenes una cuenta?{' '}
              <Link to="/register" className="font-semibold text-black">Crea una aquí</Link>
          </h2>
        <div className="relative w-80 flex flex-col items-center justify-center mx-auto">

          <Input
            ref={userNameRef}
            type="username"
            className="my-6"
            placeholder="Username"
          />
          <div className="relative w-80 flex flex-col items-center justify-center mx-auto">
          <img
              src={`/src/assets/${showPassword ? "eye-off.svg" : "eye.svg"}`}
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 h-6 w-6 cursor-pointer"
              alt={showPassword ? "Hide Password" : "Show Password"}
          />
          <Input 
              ref={passwordRef} 
              type={showPassword ? "text" : "password"}
              placeholder="Password" />
          </div>

          <Button
            onClick={handleLogin}
            className="w-80 mt-6 font-semibold text-lg bg-chiro-nopay"
          >
            Iniciar sesión
          </Button>
          {errorMessage ? errorMessage : null}
        </div>
      </div>
    </div>
  );
}

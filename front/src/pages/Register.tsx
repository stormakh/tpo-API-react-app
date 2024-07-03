import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "@/assets/LogIn_Back.svg";
import { UserSession, UserType } from "@/models/users";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/lib/auth";
import { setUserSession } from "@/store/store";
import { useDispatch } from "react-redux";
import { getUserSession } from "@/lib/users";

export default function Register() {

  const initialUser: UserSession = {
    id: 0,
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    dni: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    role: "USER",
    fullName: ""
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [user, setUser] = useState<UserSession>(initialUser);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegistration = async() => {
    try {
      const tokenResponse = await register(user);
      if (tokenResponse != null){
        localStorage.setItem('accessToken', tokenResponse);
        const userSession = await getUserSession(tokenResponse);
        localStorage.setItem('userSession', JSON.stringify(tokenResponse));
        dispatch(setUserSession(userSession));
        navigate("/");
      }else{
        setErrorMessage("no se ha podido loguear");
      }
    }
    catch(error) {
      console.error(error);
    }
    navigate("/");
  }

  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col gap-4 items-center justify-center bg-white bg-opacity-90 w-1/6  p-8 rounded-lg border">
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
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
              <Input
                type="firstname"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                placeholder="Firstname"
              />
                            <Input
                type="lastname"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                placeholder="Lastname"
              />
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
            </div>
          </div>
          <Button
            onClick={handleRegistration}
            className="my-6 w-full font-semibold text-lg bg-chiro-nopay"
          >
            Registrarse
          </Button>
          {errorMessage ? errorMessage : null}
        </div>
      </div>
    </div>
  );
}
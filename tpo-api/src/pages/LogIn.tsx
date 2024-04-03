import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import image from "/src/assets/LogIn_Back.svg";

export default function LogIn() {
  {
    /*
    Implement hide and show password later.

    const [isShown, setIsShown] = useState < Boolean > false;

  function handleShowPassword() {}
    */
  }

  return (
    <div
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      className="w-screen h-screen"
    >
      <div className="flex flex-col items-center justify-center bg-white/70 h-screen">
        <img
          src="./src/assets/nopay.svg"
          alt="Nopay logo"
          className="size-32 mb-8"
        ></img>
        <h1 className="text-3xl p-5 font-semibold text-silk">Bienvenido</h1>
        <h2 className=" text-silk">
          ¿No tenes una cuenta?{" "}
          <b className="font-semibold text-black">Crea una aquí</b>
        </h2>
        <div className="relative w-80 flex flex-col items-center justify-center mx-auto">
          <Input type="username" className="my-6" placeholder="Username" />
          <img
            src="/src/assets/Eye.svg"
            className="absolute right-0 top-0.25 transform -translate-y-1/2 mr-2 h-6 w-6"
            alt="User Icon"
          />
          <Input type="password" placeholder="Password" />
          <Button className="w-80 mt-6 font-semibold text-lg bg-chiro-nopay">
            Iniciar sesión
          </Button>
          <h3 className="text-xs mt-2 mb-6 text-silk">
            ¿Olvidaste tu contraseña?{" "}
            <b className="font-semibold text-black">Recupérala</b>
          </h3>
        </div>
        <Separator className="w-80 justify-center mx-auto mt-24 bg-chiro-nopay" />
        <div className=" flex justify-center space-x-4 mt-5">
          <Button variant="outline" size="icon">
            <img src="/src/assets/devicon_google.svg" alt="Google Icon"></img>
          </Button>
          <Button variant="outline" size="icon">
            <img src="/src/assets/logos_apple.svg" alt="Apple Icon"></img>
          </Button>
          <Button variant="outline" size="icon">
            <img src="/src/assets/logos_facebook.svg" alt="Facebook Icon"></img>
          </Button>
        </div>
      </div>
    </div>
  );
}

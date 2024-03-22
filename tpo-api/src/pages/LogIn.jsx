import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "../components/ui/resizable"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function LogIn() {
    return(
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-screen"></ResizablePanel>
      <ResizableHandle/>
        <ResizablePanel className="place-content-center h-screen bg-white bg-opacity-75">
            <h1 className="text-center text-3xl p-5 font-semibold text-pale-sky">Bienvenido</h1>
            <h2 className="text-center text-pale-sky">¿No tenes una cuenta? <b className="font-semibold" >Crea una aquí</b></h2>
            <div className="w-96 flex flex-col items-center justify-center mx-auto">
                <Input type ="username" placeholder="Usuario" className = " my-6"/>
                <Input type ="password" placeholder="Contraseña"/>
                <Button className = "w-96 mt-6 font-semibold text-lg bg-silk"> Iniciar sesión</Button>
                <h3 className="text-xs mt-2 mb-6 text-pale-sky">¿Olvidaste tu contraseña? <b className="font-semibold" >Recuperala</b></h3>
            </div>
            <Separator className = "w-96 justify-center mx-auto"/>
            <div className=" flex justify-center space-x-4 mt-5">
                <Button variant = "outline" size = "icon">
                    <img src="/src/assets/devicon_google.svg" alt="Google Icon"></img>
                </Button>
                <Button variant = "outline" size = "icon">
                    <img src="/src/assets/logos_apple.svg" alt="Apple Icon"></img>
                </Button>
                <Button variant = "outline" size = "icon">
                    <img src="/src/assets/logos_facebook.svg" alt="Facebook Icon"></img>
                </Button>
            </div>
       </ResizablePanel>
    </ResizablePanelGroup>
    )
}

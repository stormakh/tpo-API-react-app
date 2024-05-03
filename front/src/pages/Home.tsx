import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function () {
  return (
    <>
      <NavBar></NavBar>
      <Carousel className="w-screen">
        <CarouselContent>
          <CarouselItem>
            <Link to={"catalog"}>
              <img src={loginBack} className="object-fill"></img>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <img src="src/assets/Carousel_2.svg" className="object-fill"></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
      <Card className="w-screen">
        <CardContent className="flex justify-center gap-8 py-24">
          <div className="flex flex-col items-center justify-evenly">
            <img src={nopay} className="w-54" alt="Logo"></img>
            <p className="text-left text-3xl px-10">
              Somos una marca nueva que promueve la excelencia en el diseño. Nos
              identificamos con las personas que nos eligen a través de
              experiencias de un sentido de pertenencia, de un estilo de vida,
              transmitiendo la energía y el amor del proceso creativo a cada una
              de nuestras prendas.
            </p>
          </div>
          <img src={nopay2} className="w-96" alt="Image"></img>
        </CardContent>
      </Card>
      <Footer></Footer>
    </>
  );
}
/*
<section>
        <Card className="w-screen">
          <CardContent className="flex justify-center">
            <section className="flex flex-col justify-center items-center">
              <img src={nopay} className="w-54"></img>

              <p className="text-left text-3xl">
                Somos una marca nueva que promueve la excelencia en el diseño.
                Nos identificamos con las personas que nos eligen a través de
                experiencias de un sentido de pertenencia, de un estilo de vida,
                transmitiendo la energía y el amor del proceso creativo a cada
                una de nuestras prendas.
              </p>
            </section>
            <div className="flex-none pr-16">
              <img src={nopay2} className="w-96"></img>
            </div>
          </CardContent>
        </Card>
      </section>
*/

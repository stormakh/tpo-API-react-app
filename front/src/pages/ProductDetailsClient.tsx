import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";

export default function () {
  return (
    <>
      <NavBar />
      <Banner text="Jeans" />
      <div>
        <h1 className="font-roboto text-left text-xl mt-5 ml-12">
          {" "}
          Ropa / Pantalones / Jeans{" "}
        </h1>
        <div className=" flex bg-slate-200 items-center">
          <div className="mx-5 ml-12 h-fit w-fit">
            <img src="src/assets/Sample_1.svg" className="mb-5"></img>
            <img src="src/assets/Sample_2.svg" className="mb-5"></img>
            <img src="src/assets/Sample_4.svg" className="mb-5"></img>
            <img src="src/assets/Sample_3.svg" className=""></img>
          </div>
          <img src="src/assets/Sample_Big.svg" className="h-fit"></img>
          <div>
            <h2>Jeans Iron Washed</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              asperiores maiores doloribus error omnis temporibus voluptatem
              odit consequatur pariatur. Nesciunt magnam nemo expedita
              consequuntur repudiandae hic veritatis libero illum voluptates!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

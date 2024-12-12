
import Category from "@/components/Category";
import Gellary from "@/components/Gellary";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import ProductCard2 from "@/components/ProductCard2";
import ProductFeature from "@/components/ProductFeature";

 
export default function Home() {
  return(
    <main className="py-8">
      <div className="container mx-auto max-w-[1320px]  px-4 sm:px-6 lg:px-8 sm:w-full">
        <br />
        <br />
        <br />
        <Hero/>
        <Logo/>
        <ProductFeature/>
        <Category/>
        <Gellary/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ProductCard2/>
        </div>
    </main>
  )
}

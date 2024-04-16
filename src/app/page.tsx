import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import  ProductList  from "./_components/ProductList";
import Footer from "./_components/Footer";
import{RecoilRoot} from 'recoil'
export default function Home() {
  
  return (
    
   <div className=" p-5 md:p-10 px-16">
    <Slider/>
    <CategoryList/>
    <ProductList />
    <Image src="https://online-grocery-store-web.vercel.app/banner.png" width={1000} height={300} alt="banner" className="w-full h-[400px] object-contain"/>
    <Footer/>
   </div>
     
     
  
  );
}

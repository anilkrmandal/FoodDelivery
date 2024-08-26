import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div>
      <div> <Navbar /></div>
      <div><Carousel/></div>
         <div className="m-3">   <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                

         </div>
       <div> <Footer /></div>
    </div>
    
  );
}

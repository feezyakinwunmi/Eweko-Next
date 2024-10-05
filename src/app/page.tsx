import Image from "next/image";
import pic1 from "@/public/pic1.png"
import pic2 from "@/public/pic-2.png"
import pic3 from "@/public/pic-3.png"
import smockup from "@/public/sign-up-mockup.png"
import ImageSlider from "@/components/slider"

import ewekologo from "@/public/ewekologo.png"

export default function Home() {
  return (
    <div className="">
      
    
    <main className="text-black justify-between flex flex-row px-10 "> 

    <div className=" mt-16">
      <h1  className="text-5xl font-bold ">Transforming <span className="text-lime-600">Fresh <br/> Produce </span>  
       supply chains, <br />one customer at a time.</h1>
      <h3 className="text-2xl font-bold text-gray-700">Connecting PEOPLE , PROCESS & PLATFORM.
      </h3>
      <p className="mt-10 font-bold text-gray-700"> <span className="font-bold text-black text-lg">EwekoAggregate</span> is a B2B Digital Platform that leverages <br /> technology to deliver fresh produce on time, consistently and in <br /> the right quality

</p>
<a  href=""><button className="bg-lime-600  p-2 rounded-full text-white mt-5 w-52 h-12">Get Started</button></a>

    </div>
    <Image src={smockup} width={600} height={40} alt="Eweko Logo" />

     </main>


     <div className="bg-lime-100 w-full h-auto flex flex-row justify-between px-10 py-9">
     <Image src={pic1} width={500} height={300} className="m-10" alt="Eweko Logo" />
     <div className="">
      <h1 className="text-black text-5xl font-bold">Quality, Safe and <br /> <span className="text-lime-600">Nutritious Fresh <br />Produce</span>

</h1>
      <p className="font-bold text-gray-700 mt-10">At <span className="text-black ">EwekoAggregate </span> we offer Quality, Safe & Nutritious Fresh <br />Produce by implementing Food Safety and Quality Management <br /> Systems at the first mile. <br />
<p className="mt-5">Inclusive agribusiness approaches that improves the livelihoods of <br /> the farmers & value chain actors, especially in the rural areas.
</p>

</p>
      <a  href=""><button className="bg-lime-600  p-2 rounded-full text-white mt-10 w-52 h-12">Buy Now</button></a>


     </div>

     </div>


     <div className="pt-20 bg-white w-full h-auto flex flex-row-reverse justify-between px-10 py-9">
     <Image src={pic2} width={500} height={300} className="m-10" alt="Eweko Logo" />
     <div className="">
      <h1 className="text-black text-5xl font-bold">Tailored Agribusiness Support Services <br /> <span className="text-lime-600">for Farmers</span>

</h1>
      <p className=" text-gray-400 mt-10"><span className="text-gray-700 ">EwekoAggregate </span>
       aligns buyers’ requests (demand) withFarmers’  <br /> production in a controlled manner that promotes efficiency and <br />reduces post harvest losses.
      <p className="mt-5">Farmers can join  ewekoaggregate , 
        supplying their  produce with <br />options for <span className="text-gray-700 ">agribusiness support services </span> such as 
          <span className="text-gray-700 "> Technical <br />  Support, Crop & Weather Advisory Service ,Market <br />
      Intelligence</span>
      and 
      <span className="text-gray-700 ">Extension Services.</span> </p>
</p>
      <a  href=""><button className="bg-lime-600  p-2 rounded-full text-white mt-10 w-52 h-12">Join Us!</button></a>


     </div>

     </div>

     <div className="bg-emerald-900 gap-3  w-full h-auto flex flex-row  px-10 py-12">
     <Image src={pic3} width={600} height={300} className="m-10" alt="Eweko Logo" />
     <div className=" items-center mt-24 ">
      <h1 className="text-white text-3xl font-bold">Fresh Supply to where <br />
      you need at a click

</h1>
      <p className="font-medium text-white mt-4 items-center">
      We facilitate the delivery of aggregated fresh <br /> produce to your location with tracking that allows <br /> you to monitor the flow of produce right from <br /> aggregation centres to your location of choice.
</p>


      <a  href=""><button className="bg-lime-600  p-2 rounded-full text-white mt-10 w-52 h-12">Join Us!</button></a>


     </div>

     </div>

     <div className="bg-white w-full flex flex-col font-bold pt-16 items-center justify-center">
      <h1 className=" text-3xl text-lime-600">We are building TRUST within the Value Chain.</h1>
      <a  href=""><button className="bg-lime-600  p-2 rounded-full text-white mt-10 w-52 h-12">Sign Up</button></a>

      <h1 className=" text-3xl text-lime-600 mt-10">Our partners</h1>
      
        
     
      
     </div>


     </div>
    
  );
}

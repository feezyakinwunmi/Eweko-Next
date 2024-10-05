import Image from "next/image";


import ewekologo from "@/public/ewekologo.png"



export default function NavHeader(){
    return(
        <div className=" bg-white justify-between flex flex-row px-10 py-4">
            <div className="flex items-center gap-4">
            <a href="#" className="">
                <Image src={ewekologo} width={160} height={40} alt="Eweko Logo" />

            </a>

            </div>
            <div className="flex items-center gap-8 ">  
                <a href="#" className="text-sm font-bold text-gray-900 hover:text-gray-700">Home</a>
                <a href="#" className="text-sm font-bold text-gray-900 hover:text-gray-700">About</a>
                <a href="#" className="text-sm font-bold text-gray-900 hover:text-gray-700">Login</a>
                <a href="#" className="text-sm font-bold text-gray-900 hover:text-gray-700">Register</a>
            </div>
        </div>

    );
}
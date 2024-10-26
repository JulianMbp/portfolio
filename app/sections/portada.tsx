import Logo from "../img/Logo.svg"
import Image from "next/image"
import {Button} from "@nextui-org/react";
const portada = () => {
    return (
        <section>
            {/* Portada de portafolio */}
            <section className="py-[500px] flex flex-col h-[400px] justify-center items-center gap-5 " id="home">
                    {/* Logo */}
                    <Image className="w-44 md:w-64 object-cover md:object-cover" src={Logo} alt="" />
                    {/* Nombre */}
                    <h1 className=" cols-span-1 text-slate-50 font-medium text-5xl text-center text-nowrap">Julian_MBP.dev</h1>
                    {/* Boton contacto */}
                    <a  className="h-24 duration-300 flex items-center rounded-3xl p-3 bg-blue-500 gap-3 
                    shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all shadow-black" href="#contact">
                        <svg className="animate-bounce h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <h1 className="text-slate-100 font-regular hidden md:block">Contact_With_Me</h1>
                    </a>
            </section>
        </section>
    )
}
export default portada
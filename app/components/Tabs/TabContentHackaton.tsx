import Tab from "../../../public/img/Tabs/Hackaton.jpg"; 
import Image from "next/image"

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";



const TabCard = () => {
    return (
        <section className="bg-violet-600 h-[100%] w-[100%] rounded-lg  ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center pr-4">
                
                <Image className="order-2 items-center justify-center rounded-3xl sm:rounded-3xl transition-all ease-in 
                delay-300 sm:transition-all sm:ease-in sm:delay-300 
                md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                h-[200px] w-[250px] sm:h-[200px] sm:w-[90%]
                lg:h-[280px] lg:w-[200px]  p-5 lg:p-0
                object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
                <dl className="p-10 order-1 
                lg:w-[100%] text-center lg:text-left flex flex-col justify-center
                text-slate-50 font-serif ">
                <dl className="lg:flex lg:justify-between grid grid-cols-1 
                md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center 
                lg:text-left ">
                    <h1 className="text-4xl lg:text-left ">Campeon Hackaton Nexo Digital</h1>
                </dl>
                <p className=" text-slate-50 text-opacity-80">Desarrollar un MVP, desarrollo de una aplicacion mobile, JavaScript, React Native, Firebase, node.js, y Nativewind </p>
                <p className="hidden md:block text-slate-50 text-opacity-80">Desarrolle el Frontend de la aplicacion mobile<br />
                        Utilidad de la aplicacion: <br />
                        Navegación por Proyectos: Visualización de la lista de proyectos en el dashboard. <br />
                        Gestión de Tareas y Bitácoras: Acceso y creación de registros en cada proyecto. <br />
                        </p>
                <dl className="grid grid-cols-4 gap-3 mt-5">
                    <SiExpo className="order-4 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-7 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TbBrandReactNative  className="order-1 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiFirebase className="order-6 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-3 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
                <dl className="flex justify-end items-end">
                    <a href="https://github.com/JulianMbp/Hackaton2024" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                        <SlSocialGithub className=" h-8 w-8 text-slate-950"/>
                        <h1>Repositorio</h1>
                    </a>
                </dl>
            </dl>
            </dl>
        </section>
    )
};

export default TabCard;
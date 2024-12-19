import Tab from "../../../public/img/potencia.jpg"; 
import Image from "next/image"

import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAxios } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";






const TabCard = () => {
    return (
        <section className="bg-cyan-500 h-[100%] w-[100%] rounded-lg  ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center pr-4">
                <div className="order-2 items.center w-[100%] pb-2 pl-5">
                <Image className="  rounded-3xl sm:rounded-3xl transition-all ease-in 
                    delay-300 sm:transition-all sm:ease-in sm:delay-300 
                    md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                    h-[100%] w-[110%] sm:h-[200px] sm:w-[100%]
                    lg:h-[280px] lg:w-[200px]  lg:p-0
                    object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
                </div>
            <dl className="p-10 order-1 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-slate-50 font-serif pl-10">
                <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center lg:text-left ">
                    <h1 className="text-4xl lg:text-left ">Campeon Hackaton PotencIA Summit 2024</h1>
                </dl>
                <p className=" text-slate-50 text-opacity-80">Desarrollar un MVP, resolviendo un reto propuesto por la organizacion</p>
                <p className=" text-slate-50 text-opacity-80">Desarrollo full stack</p>
                <p className=" text-slate-50 text-opacity-80 hidden lg:block">Desarrolle el back y el front de todo el proyecto ademas de el marketing del proyecto<br />
                        Utilidad de la aplicacion: <br />
                        Busqueda de medicamentos segun la ubicacion de la eps, gestion <br />
                        de usuarios e implementacion de
                        IA y blockchain<br />
                        Blockchain para la busqueda de medicamentos en tiempo real
                        IA predictiva de medicamentos</p>
                <dl className="grid grid-cols-4 gap-3 mt-5">
                    <FaPython className="order-4 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-7 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <DiDjango  className="order-1 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaReact className="order-6 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-3 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiNextjsFill className="order-5 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <BiLogoPostgresql className="order-8 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiAxios className="order-9 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiHiveBlockchain className="order-10 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
                <div className="flex justify-between gap-5 mt-2 md:mt-2">
                <dl className="flex justify-end items-end">
                    <a href="https://github.com/JulianMbp/Medicamentos.git" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                        <SlSocialGithub className=" h-8 w-8 text-slate-950"/>
                        <h1 className="hidden md:block">Repositorio</h1>
                    </a>
                </dl>
                <div className="flex justify-end items-end">
                    <a href="https://youtu.be/Eze1uJar93A" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all">
                        <FaYoutube className="h-8 w-8 text-slate-950"></FaYoutube>
                        <h1 className="hidden md:block">Presentacion</h1>
                    </a>
                </div>
                </div>
            </dl>
            </dl>
        </section>
    )
};

export default TabCard;
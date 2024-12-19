import Tab from "../../../public/img/Tabs/EPS.png"; 
import Image from "next/image"

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Link from "next/link";
import { SlSocialGithub } from "react-icons/sl";



const TabCard = () => {
    return (
        <section className="bg-violet-600 h-[100%] w-[100%] rounded-lg ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center pr-4">
            <div className="order-2 items.center w-[100%] pb-2 pl-5">
                <Image className="  rounded-3xl sm:rounded-3xl transition-all ease-in 
                    delay-300 sm:transition-all sm:ease-in sm:delay-300 
                    md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                    h-[100%] w-[110%] sm:h-[200px] sm:w-[100%]
                    lg:h-[280px] lg:w-[200px]  lg:p-0
                    object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
                </div>
            <dl className="p-10 order-1 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif pl-10">
                <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center lg:text-left">
                    <h1 className="text-4xl lg:text-left ">App para gestion de una EPS</h1>
                </dl>
                <p className=" text-brownieColor-100 text-opacity-80">Desarrollar un aplicativo web, JavaScript, React, Next.js, PostgreSQL, Docker, node.js, y Tailwind </p>
                <p className=" text-brownieColor-100 text-opacity-80">Diseñar Base de datos.<br />
                        Desarrollar el Sistema de autenticación y sesiones. <br />
                        Gestion de pacientes, medicamentos y citas</p>
                <dl className="grid grid-cols-4 gap-3 mt-5">
                    <RiNextjsFill className="order-4 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-3 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaReact className="order-1 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaDocker className="order-5 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <DiPostgresql className="order-6 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-7 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
                <dl className="flex justify-end items-end">
                    <a href="https://github.com/JulianMbp/EPS_Front.git" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
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
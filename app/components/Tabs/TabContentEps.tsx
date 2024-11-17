import Tab from "../../../public/img/Tabs/AppFilipense.png"; /* Cambiar cuando se tenga el front */
import Image from "next/image"

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";




const TabCard = () => {
    return (
        <section className="bg-violet-600 h-[100%] w-[100%] rounded-lg ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
            <Image className=" order-2 rounded-3xl sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
            md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
            h-[200px] w-[250px] sm:h-[250px] sm:w-[90%] -mt-10 my-10
            lg:my-10 lg:mr-10 lg:h-[280px] lg:w-[350px]  
            object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
            <dl className="p-10 order-1 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif pl-10">
                <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center lg:text-left">
                    <h1 className="text-4xl lg:text-left ">App Gestion para gestion para una EPS</h1>
                </dl>
                <p className=" text-brownieColor-100 text-opacity-80">Desarrollar un aplicativo web, JavaScript, React, Next.js, PostgreSQL, Docker, node.js, y Tailwind </p>
                <p className=" text-brownieColor-100 text-opacity-80">Diseñar Base de datos.<br />
                        Desarrollar el Sistema de autenticación y sesiones. <br />
                        Gestion de pacientes, medicamentos y citas</p>
                <dl className="grid grid-cols-4 gap-3 mt-5">
                    <RiNextjsFill className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaReact className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaDocker className="order-5 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <DiPostgresql className="order-6 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-7 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
            </dl>
            </dl>
        </section>
    )
};

export default TabCard;
import Tab from "../../../public/img/Tabs/AppFilipense.png";
import Image from "next/image"
import { FaBootstrap } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";


const TabCard = () => {
    return (
        <section className="bg-blue-500 h-[100%] w-[100%] rounded-lg ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
            <Image className=" order-2 rounded-3xl sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
            md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
            h-[200px] w-[250px] sm:h-[250px] sm:w-[90%] -mt-10 my-10
            lg:my-10 lg:mr-10 lg:h-[280px] lg:w-[350px]  
            object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
            <dl className="p-10 order-1 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif pl-10">
                <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center lg:text-left">
                    <h1 className="text-4xl lg:text-left ">App para gestion de Trabajo Social</h1>
                </dl>
                <p className=" text-brownieColor-100 text-opacity-80">Desarrollar un aplicativo web PHP, JavaScript, Bootstrap, HTML, y MySQL para certificar estudiantes con generación de PDF, seguridad y autenticación en institución educativa.                </p>
                <p className=" text-brownieColor-100 text-opacity-80">Diseñar Base de datos.	<br />
                        Implementar la generación de certificados en PDF. <br />
                        Desarrollar el Sistema de autenticación y sesiones. <br />
                        Implementar generación de certificados</p>
                <dl className="flex gap-3 mt-5">
                    <FaBootstrap className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TiHtml5 className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaPhp className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiMysql className="order-5 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
                <dl className="flex justify-end items-end">
                    <a href="https://github.com/JulianMbp/PhP-Crud.git" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
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
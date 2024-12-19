import Tab from "../../../public/img/Tabs/Venta de Libros.png";
import Image from "next/image"
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SlSocialGithub } from "react-icons/sl";

const TabBookCard = () => {
    return (
        <section className="bg-green-600 h-[100%] w-[100%] rounded-lg ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center pr-4">
            <div className="order-2 items.center w-[100%] pb-2 pl-5">
                <Image className="  rounded-3xl sm:rounded-3xl transition-all ease-in 
                    delay-300 sm:transition-all sm:ease-in sm:delay-300 
                    md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
                    h-[100%] w-[110%] sm:h-[200px] sm:w-[100%]
                    lg:h-[280px] lg:w-[200px]  lg:p-0
                    object-cover lg:object-cover shadow-2xl shadow-black" src={Tab} alt="" />
                </div>
            <dl className="p-10 order-1 lg:w-[70%] w-[100%] pl-10 text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif ">
                <dl className="lg:flex lg:justify-between 
                grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center 
                text-center md:justify-center md:items-center md:text-center lg:text-left">
                    <h1 className="text-4xl lg:text-left ">Backend CRUD para gestionar la venta de Cursos</h1>
                </dl>
                <p className=" text-brownieColor-100 text-opacity-80">Desarrollar un backend con Java y SpringBoot, Base de datos noSQL, MongoDB </p>
                <p className="hidden md:block text-brownieColor-100 text-opacity-80"><br />
                Gestions de perfiles de usuarios. <br />
                Estudiantes y profesor <br />
                CRUD de libros y cursos. 
                </p>
                <dl className="flex gap-3 mt-5">
                    <SiPostman className="order-3 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiSpringboot className="order-2 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaJava className="order-1 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <BiLogoMongodb className="order-4 h-10 w-10 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
                <dl className="flex justify-end items-end">
                    <a href="https://github.com/JulianMbp/CRUDJavaAPIrest.git" className="bg-slate-200 flex gap-2 items-center  text-zinc-950 rounded-lg p-2 mt-5 hover:scale-110 active:scale-95 active:duration-200 
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

export default TabBookCard;
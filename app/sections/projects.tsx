import Image from "next/image";
import Tabs from "@/app/components/Tabs";
import { FaBootstrap } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { SiExpo, SiFirebase, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
const projects = () => {
return (
    <section id="projects" className="mb-[300px] mt-[80%] md:mt-0 grid lg:grid-cols-5 gird md:grid-cols-2 grid-cols-1  h-screen w-screen items-center justify-center object-center text-center">
        <section className=" dark:text-white text-4xl font-[family-name:var(--font-kode-bold-mono)]">
            Tecnologias Aprendidas
            <dl className="grid grid-cols-4 md:grid-cols-3 dark:text-white text-slate-950  gap-3 m-10 pl-5 md:ml-0">
                    <SiPostman className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiSpringboot className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaJava className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <BiLogoMongodb className="order-6 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiNextjsFill className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaReact className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaDocker className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <DiPostgresql className="order-5 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaBootstrap className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TiHtml5 className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiMysql className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaPhp className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiExpo className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TbBrandReactNative  className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiFirebase className="order-6 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
        </section>
        <dl className="lg:col-span-3 md:col-span-2">
        <Tabs/>
        </dl>
        <section className="dark:text-white text-4xl font-[family-name:var(--font-kode-bold-mono)] lg:block hidden">Tecnologias Aprendidas
        <dl className="grid grid-cols-3 dark:text-white text-slate-950 gap-3 m-10">
                    <SiPostman className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiSpringboot className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaJava className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <BiLogoMongodb className="order-6 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiNextjsFill className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaNodeJs className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaReact className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaDocker className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <DiPostgresql className="order-5 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <RiTailwindCssFill className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaBootstrap className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TiHtml5 className="order-3 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <IoLogoJavascript className="order-2 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <FaPhp className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiMysql className="order-5 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiExpo className="order-4 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <TbBrandReactNative  className="order-1 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                    <SiFirebase className="order-6 h-16 w-16 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200" />
                </dl>
        </section>
    </section>
)};
export default projects
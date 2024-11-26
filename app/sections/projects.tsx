'use client';
import Image from "next/image";
import Tabs from "@/app/components/Tabs";
import { FaBootstrap, FaPhp, FaReact, FaDocker, FaNodeJs, FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpo, SiFirebase, SiMysql, SiSpringboot, SiPostman } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { TbBrandOffice } from "react-icons/tb";

const Projects = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const iconAnimation = {
        hover: { 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.9 }
    };

    const IconWrapper = ({ children }: { children: React.ReactNode }) => (
        <motion.div
            variants={{
                ...itemAnimation,
                ...iconAnimation
            }}
            whileHover="hover"
            whileTap="tap"
            className="h-16 w-16"
        >
            {children}
        </motion.div>
    );

    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            id="projects" 
            className="mb-[300px] mt-[80%] md:mt-0 grid lg:grid-cols-5 gird md:grid-cols-2 grid-cols-1 h-screen w-screen items-center justify-center object-center text-center p-12"
        >
            <motion.section variants={itemAnimation} className="text-white text-4xl font-[family-name:var(--font-kode-bold-mono)] justify-center items-center text-center">
                Tecnologias Aprendidas
                <motion.dl variants={containerAnimation} className="grid grid-cols-4 md:grid-cols-5 text-white  gap-3 m-10 md:m-3">
                    <IconWrapper><SiPostman /></IconWrapper>
                    <IconWrapper><SiSpringboot /></IconWrapper>
                    <IconWrapper><FaJava /></IconWrapper>
                    <IconWrapper><BiLogoMongodb /></IconWrapper>
                    <IconWrapper><RiNextjsFill /></IconWrapper>
                    <IconWrapper><FaNodeJs /></IconWrapper>
                    <IconWrapper><FaReact /></IconWrapper>
                    <IconWrapper><FaDocker /></IconWrapper>
                    <IconWrapper><DiPostgresql /></IconWrapper>
                    <IconWrapper><RiTailwindCssFill /></IconWrapper>
                    <IconWrapper><FaBootstrap /></IconWrapper>
                    <IconWrapper><TiHtml5 /></IconWrapper>
                    <IconWrapper><IoLogoJavascript /></IconWrapper>
                    <IconWrapper><SiMysql /></IconWrapper>
                    <IconWrapper><FaPhp /></IconWrapper>
                    <IconWrapper><SiExpo /></IconWrapper>
                    <IconWrapper><TbBrandReactNative /></IconWrapper>
                    <IconWrapper><SiFirebase /></IconWrapper>
                    <IconWrapper><FaAndroid /></IconWrapper>
                    <IconWrapper><FaVuejs /></IconWrapper>
                    <IconWrapper><TbBrandOffice /></IconWrapper>
                    <IconWrapper><SiMicrosoftazure /></IconWrapper>
                    <IconWrapper><SiGooglecloud /></IconWrapper>
                    <IconWrapper><FaGitAlt /></IconWrapper>
                    <IconWrapper><FaGithub /></IconWrapper>
                    <IconWrapper><SiAxios /></IconWrapper>
                </motion.dl>
            </motion.section>

            <motion.dl variants={itemAnimation} className="lg:col-span-3 md:col-span-2">
                <Tabs/>
            </motion.dl>

            <motion.section variants={itemAnimation} className="text-white text-4xl font-[family-name:var(--font-kode-bold-mono)] lg:block hidden">
                Tecnologias Aprendidas
                <motion.dl variants={containerAnimation} className="grid grid-cols-5 text-white  gap-3 m-10 md:m-3">
                    <IconWrapper><SiPostman /></IconWrapper>
                    <IconWrapper><SiSpringboot /></IconWrapper>
                    <IconWrapper><FaJava /></IconWrapper>
                    <IconWrapper><BiLogoMongodb /></IconWrapper>
                    <IconWrapper><RiNextjsFill /></IconWrapper>
                    <IconWrapper><FaNodeJs /></IconWrapper>
                    <IconWrapper><FaReact /></IconWrapper>
                    <IconWrapper><FaDocker /></IconWrapper>
                    <IconWrapper><DiPostgresql /></IconWrapper>
                    <IconWrapper><RiTailwindCssFill /></IconWrapper>
                    <IconWrapper><FaBootstrap /></IconWrapper>
                    <IconWrapper><TiHtml5 /></IconWrapper>
                    <IconWrapper><IoLogoJavascript /></IconWrapper>
                    <IconWrapper><FaPhp /></IconWrapper>
                    <IconWrapper><SiMysql /></IconWrapper>
                    <IconWrapper><SiExpo /></IconWrapper>
                    <IconWrapper><TbBrandReactNative /></IconWrapper>
                    <IconWrapper><SiFirebase /></IconWrapper>
                    <IconWrapper><FaAndroid /></IconWrapper>
                    <IconWrapper><FaVuejs /></IconWrapper>
                    <IconWrapper><TbBrandOffice /></IconWrapper>
                    <IconWrapper><SiMicrosoftazure /></IconWrapper>
                    <IconWrapper><SiGooglecloud /></IconWrapper>
                    <IconWrapper><FaGitAlt /></IconWrapper>
                    <IconWrapper><FaGithub /></IconWrapper>
                    <IconWrapper><SiAxios /></IconWrapper>
                </motion.dl>
            </motion.section>
        </motion.section>
    );
};

export default Projects;
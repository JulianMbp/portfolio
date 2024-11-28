'use client';
import { MdOutlinePets } from "react-icons/md";
import ButtonPage from "@/app/components/ButtonSmall";
import { motion } from "framer-motion";

const Header = () => {
    // Animación para los iconos
    const iconAnimation = {
        hover: { 
            scale: 1.2,
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.3
            }
        },
        tap: { 
            scale: 0.9,
            transition: {
                duration: 0.1
            }
        }
    };

    return (
        <section className="flex flex-col md:items-center border">
          <header className="gap-2 md:justify-between md:items-center order-1 m-2 fixed p-2 grid grid-cols-1 md:grid-cols-5 col-span-1 items-center bg-[#0F0F0F] bg-opacity-80 backdrop-filter backdrop-blur-sm transparent border border-slate-100 rounded-3xl">
                {/* About Me */}
                <motion.a 
                    whileHover="hover"
                    whileTap="tap"
                    variants={iconAnimation}
                    className="order-1 flex gap-2 items-center justify-center h-5 w-5 md:h-auto md:w-auto" 
                    href="#about"
                >
                    <svg className="h-5 w-5 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <h2 className="text-slate-100  font-regular hidden md:block">About Me</h2>
                </motion.a>

                {/* Projects */}
                <motion.a 
                    whileHover="hover"
                    whileTap="tap"
                    variants={iconAnimation}
                    className="order-2 flex gap-2 items-center justify-center h-5 w-5 md:h-auto md:w-auto" 
                    href="#projects"
                >
                    <svg className="h-5 w-5 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <h2 className="text-slate-100  font-regular hidden md:block">Projects</h2>
                </motion.a>

                <motion.a 
                    whileHover="hover"
                    whileTap="tap"
                    variants={iconAnimation}
                    className="order-3 flex gap-2 items-center justify-center h-5 w-5 md:h-auto md:w-auto" 
                    href="#experience"
                >
                    <svg className="h-6 w-6 text-slate-100 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                    <h2 className="text-slate-100  font-regular hidden md:block">Experience</h2>
                </motion.a>

                {/* Life */}
                <motion.a 
                    whileHover="hover"
                    whileTap="tap"
                    variants={iconAnimation}
                    className="order-4 flex gap-2 items-center justify-center h-5 w-5 md:h-auto md:w-auto" 
                    href="#life"
                >
                    <svg className="h-6 w-6 text-slate-100 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <h2 className="text-slate-100  font-regular hidden md:block">Life</h2>
                </motion.a>

                {/* Pets */}
                <motion.a 
                    whileHover="hover"
                    whileTap="tap"
                    variants={iconAnimation}
                    className="order-5 flex gap-2 items-center justify-center h-5 w-5 md:h-auto md:w-auto" 
                    href="#pets"
                >
                    <MdOutlinePets className="h-6 w-6 text-slate-100 " />
                    <h2 className="text-slate-100  font-regular hidden md:block">Pets</h2>
                </motion.a>
          </header>
          <dl className="md:ml-[700px] md:mt-2 mt-[38%] fixed ml-2">
            <ButtonPage/>
          </dl>
        </section>
    );
}

export default Header;
'use client';
import { motion } from "framer-motion";
import ButtonCommAdv from '@/app/components/Button/ButtonCommAdv';
import ButtonCourses from '@/app/components/Button/ButtonCourses';
import ButtonCyclist from '@/app/components/Button/ButtonCyclist';
import ButtonExp from '@/app/components/Button/ButtonExp';
import ButtonExpUni from '@/app/components/Button/ButtonExpUni';
import ButtonTraining from '@/app/components/Button/ButtonTraining';
import ButtonWorkUni from '@/app/components/Button/ButtonWorkUni';
import { Tooltip } from 'react-tooltip';

const Experience = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };
    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    const borderAnimation = {
        hidden: { scale: 0.9, opacity: 0 },
        show: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };
    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            id="experience" 
            className="flex h-screen w-screen items-center justify-center mb-[10%] mt-[20%] lg:mt-0"
        >
            <motion.section 
                variants={borderAnimation}
                className="w-[70%] border-b-4 border-r-4 border-slate-900 rounded-lg text-zinc-950"
            >
                <motion.section 
                    variants={borderAnimation}
                    className="h-[100%] w-[100%] border-t-4 border-l-4 border-slate-200 rounded-lg"
                >
                    <motion.section 
                        variants={borderAnimation}
                        className="h-[100%] w-[100%] border-[30px] border-minecraft-border-300 rounded-sm"
                    >
                        <motion.dl 
                            variants={borderAnimation}
                            className="border-minecraft-border-950 border-4 h-[100%] w-[100%] bg-opacity-50 bg-[url('/img/texture.jpg')] bg-cover bg-center"
                        >
                            <motion.h1 
                                variants={itemAnimation}
                                className="-mt-8 font-[family-name:var(--font-kode-medium-mono)] text-xl"
                            >
                                Experiencia
                            </motion.h1>
                            <motion.a 
                                variants={itemAnimation}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="duration-30 items-center gap-3 shadow-xl hover:bg-minecraft-border-500 hover:border 
                                gap-x-3 pl-1 bg-minecraft-border-500 ml-[80%] md:ml-[85%] h-6 w-[50px] md:w-[150px] border 
                                border-zinc-950 rounded-sm -mt-7 flex" 
                                href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link"
                            >
                                <dl className="flex">
                                    <h1 className="font-[family-name:var(--font-kode-medium-mono)] hidden md:block">Descargar</h1>
                                    <h1 className='font-[family-name:var(--font-kode-bold-mono)]'>CV</h1>
                                </dl>
                                <svg className="animate-bounce h-5 w-5 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </motion.a>
                            <div className="flex flex-col justify-center items-center">
                                <motion.dl 
                                    variants={itemAnimation}
                                    className="mt-5 transition-all flex flex-col  md:flex-row"
                                >
                                    <ButtonExp />
                                    <ButtonExpUni />
                                    <ButtonWorkUni />
                                </motion.dl>
                                <motion.dl 
                                    variants={itemAnimation}
                                    className="mt-10 transition-all flex flex-row"
                                >
                                    <ButtonCommAdv />
                                </motion.dl>
                                <motion.dl 
                                    variants={itemAnimation}
                                    className="mt-10 transition-all flex flex-row"
                                >
                                    <ButtonTraining />
                                    <ButtonCyclist />
                                </motion.dl>
                                <motion.dl 
                                    variants={itemAnimation}
                                    className="mt-10 transition-all flex flex-row"
                                >
                                    <ButtonCourses />
                                </motion.dl>
                            </div>
                            <Tooltip id='my-tooltip' />
                        </motion.dl>
                    </motion.section>  
                </motion.section>      
            </motion.section>        
        </motion.section>
    );
};

export default Experience;
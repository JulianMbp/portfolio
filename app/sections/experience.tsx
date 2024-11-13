'use client';
import { HiAcademicCap } from "react-icons/hi2";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";


import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tooltip';
const experience = () => {
return (
    <section id="experience" className="flex h-screen w-screen items-center justify-center">
        <section className="h-[70%] w-[70%] border-b-4 border-r-4 border-slate-900 rounded-lg text-zinc-950">
            <section className="h-[100%] w-[100%] border-t-4 border-l-4 border-slate-200 rounded-lg">
                <section className="h-[100%] w-[100%] border-[30px] border-minecraft-border-300 rounded-sm">
                    <dl className="border-minecraft-border-950 border-4 h-[100%] w-[100%] bg-opacity-50 bg-[url('/img/texture.jpg')] bg-cover bg-center">
                        <h1 className="-mt-8 font-[family-name:var(--font-kode-medium-mono)] text-xl">Experience</h1>
                        {/* CV */}
                        <a className=" duration-30 items-center gap-3 
                                    shadow-xl hover:scale-110 
                                    active:scale-95 active:duration-200 
                                    hover:shadow-2xl transition-all flex  hover:bg-minecraft-border-500 
                                    hover:border gap-x-3 pl-1 bg-minecraft-border-500  
                                    ml-[60%] md:ml-[88%]
                                    -mt-7 h-6 w-40 border border-zinc-950 rounded-sm" 
                            href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link">
                                
                            <h1 className="font-[family-name:var(--font-kode-medium-mono)]">Descargar CV</h1>
                            <svg className="animate-bounce h-5 w-5 text-zinc-950"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />  <polyline points="7 10 12 15 17 10" />  <line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </a>
                        {/* tooltip */}
                        {/* Estudios */}
                        {/* Titulo de Bachiller */}
                        <dl className="mt-10 justify-center items-center">
                            <button
                                className='bg-experiencie-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Bachiller Academico del Colegio Nuestra Señora de las Lajas'
                                data-tooltip-place='top'>
                                    <HiAcademicCap className="h-8 w-8"/>
                            </button>
                            {/* Titulo de Ingenieria de Software */}
                            <button
                                className='bg-experiencie-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Estudiante de Ingenieria de Software en la Universidad Cooperatia de Colombia y Universidad Manuela Beltrán'
                                data-tooltip-place='top'>
                                    <PiStudentFill className="h-8 w-8"/>
                            </button>
                            {/* Practica Empresarial */}
                            <button
                                className='bg-experiencie-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Practica Empresarial en el desarrollo de un aplicativo web para el colegio Filipense (Ipiales)'
                                data-tooltip-place='top'>
                                    <MdWorkOutline className="h-8 w-8"/>
                            </button>
                        </dl>
                        <dl className="mt-10">
                            <button
                                className='bg-red-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Bachiller Academico del Colegio Nuestra Señora de las Lajas'
                                data-tooltip-place='top'>
                                    <HiAcademicCap className="h-8 w-8"/>
                            </button>
                            {/* Titulo de Ingenieria de Software */}
                            <button
                                className='bg-red-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Estudiante de Ingenieria de Software en la Universidad Cooperatia de Colombia y Universidad Manuela Beltrán'
                                data-tooltip-place='top'>
                                    <PiStudentFill className="h-8 w-8"/>
                            </button>
                            {/* Practica Empresarial */}
                            <button
                                className='bg-red-600 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Practica Empresarial en el desarrollo de un aplicativo web para el colegio Filipense (Ipiales)'
                                data-tooltip-place='top'>
                                    <MdWorkOutline className="h-8 w-8"/>
                            </button>
                        </dl>
                        
                <Tooltip id='my-tooltip' />
                    </dl>
                </section>  
            </section>      
        </section>        
    </section>
)
};
export default experience
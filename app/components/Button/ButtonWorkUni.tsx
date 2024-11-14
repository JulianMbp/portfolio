import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalWorkUni';
import { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";

const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
              <button
                                className='bg-experiencie-600 shadow-2xl justify-center items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Practica Universitaria'
                                data-tooltip-place='bottom'
                                onClick={openModal}>
                                <MdWorkOutline className="h-12 w-12"/>
              </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Desarrollador de Software">
        
        <p className="font-semibold text-xl text-cyan-500 ">Desde:</p>
        <p className="text-zinc-950">Mayo-2023</p>
        <p className="font-semibold  text-xl text-cyan-500">Hasta:</p>
        <p className="text-zinc-950 ">Septiembre-2023</p>
        <p className="font-semibold  text-xl text-cyan-500 mt-2">Tareas a desarrollar:</p>
        <p className="text-zinc-950 text-justify">- Desarrollo de Aplicacion web para control del trabajo social de los
                                                      estudiantes del colegio filipense en PHP y JavaScript. Participación
                                                      activa en reuniones y revisión de código.</p>
        <p className="text-zinc-950 text-justify mt-3">- Diseño y desarrollo de interfaces de usuario intuitivas. Integración de
                                                      la aplicación web y bases de datos. Realización de pruebas unitarias y
                                                      funcionales para garantizar la calidad del software.</p>
      </ModalExp>
      </section>
    );
};
export default ModExp;
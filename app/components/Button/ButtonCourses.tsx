import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalCourses';
import { useState } from 'react';
import { GrAchievement } from "react-icons/gr";


const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
              <button
                                className='bg-violet-500 shadow-2xl justify-center items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Estudios Complementarios'
                                data-tooltip-place='bottom'
                                onClick={openModal}>
                                <GrAchievement className="h-12 w-12"/>
              </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Certificaciones y Diplomados">
        
        <p className="font-semibold text-xl text-cyan-500 ">Desde:</p>
        <p className="text-zinc-950">Mayo-2023</p>
        <p className="font-semibold  text-xl text-cyan-500">Hasta:</p>
        <p className="text-zinc-950 ">Septiembre-2023</p>
        <p className="font-semibold  text-xl text-cyan-500 mt-2">Estudios Complementarios</p>
          <ol className="text-zinc-950">
            <li>• Cloud computing </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(UMB)</p>
            <li>• Alfabetización informática </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• Herramientas ofimáticas TIC </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• Director Deportivo Nv III
            </li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(EntrenamientoCiclismo - España)</p>
            <li>• Base de Datos Microsoft Access
            (SENA)</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(SENA)</p>
            <li>• RESTful Web Services</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">(udemy)</p>
            <li>• Licencia de Conducción</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1"> A2 y B1</p>
            <li>• Guitarra</li>
            <p className="text-cyan-600 text-left opacity-70 -mt-1">10 años de experiencia</p>
          </ol>
        

      </ModalExp>
      </section>
    );
};
export default ModExp;
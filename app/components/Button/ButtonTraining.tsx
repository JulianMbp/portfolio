import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalTraining';
import { useState } from 'react';
import { TbClock24 } from "react-icons/tb";


const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
              <button
                                className='bg-blue-600 justify-center shadow-2xl items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Entrenador Deportivo'
                                data-tooltip-place='bottom'
                                onClick={openModal}>
                                <TbClock24  className="h-12 w-12"/>
              </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Entrenador Deportivo">
        <p className="font-semibold text-xl text-cyan-500 ">Desde:</p>
        <p className="text-zinc-950">2023</p>
        <p className="font-semibold  text-xl text-cyan-500">Hasta:</p>
        <p className="text-zinc-950 ">2024</p>
        <p className="font-semibold  text-xl text-cyan-500 mt-2">Tareas a desarrollar:</p>
        <p className="text-zinc-950 text-justify">- Diseño y ejecución de planes de entrenamiento personalizados para
ciclistas de diferentes niveles, con el objetivo de mejorar el
rendimiento en competencias y eventos.</p>
        <p className="text-zinc-950 text-justify mt-3">- Evaluación del estado físico de los atletas y seguimiento de su
        progreso a través de pruebas y análisis de datos.</p>
      </ModalExp>
      </section>
    );
};
export default ModExp;
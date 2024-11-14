import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalCommAdv';
import { useState } from 'react';

import { MdSell } from "react-icons/md";

const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
              <button
                                className='bg-cyan-700 shadow-2xl justify-center items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Asesor Comercial'
                                data-tooltip-place='bottom'
                                onClick={openModal}>
                                <MdSell  className="h-12 w-12"/>
              </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Asesor Comercial">
        
        <p className="font-semibold text-xl text-cyan-500 ">Desde:</p>
        <p className="text-zinc-950">Julio-2023</p>
        <p className="font-semibold  text-xl text-cyan-500">Hasta:</p>
        <p className="text-zinc-950 ">Septiembre-2023</p>
        <p className="font-semibold  text-xl text-cyan-500 mt-2">Tareas a desarrollar:</p>
        <p className="text-zinc-950 text-justify">- Atención personalizada: Brindar asesoramiento y soporte a los
        clientes.</p>
        <p className="text-zinc-950 text-justify mt-3">- Visitas comerciales: Realizar visitas a los clientes para presentar
        productos o servicios.</p>
      </ModalExp>
      </section>
    );
};
export default ModExp;
import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalExp';
import { useState } from 'react';
import { HiAcademicCap } from "react-icons/hi2";

const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
          <button
            className='bg-experiencie-600 shadow-2xl justify-center items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Bachiller Academico'
            data-tooltip-place='top-start'
            onClick={openModal}
            >
              <h1 className="font-[family-name:var(--font-kode-medium-mono)]  hidden  ">Colegio  Nuestra <br /> Señora de las Lajas</h1>
              <HiAcademicCap className="h-12 w-12 "/>
            </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Bachiller Academico">
        <p className="font-semibold text-lg text-cyan-500 ">Desde:</p>
        <p className="text-zinc-950">2014</p>
        <p className="font-semibold  text-lg text-cyan-500">Hasta:</p>
        <p className="text-zinc-950 ">2019</p>
      </ModalExp>
      </section>
    );
};
export default ModExp;
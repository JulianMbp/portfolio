import { div, section } from "framer-motion/client"
'use client';
import ModalExp from '@/app/components/ModalExpirience/ModalCyclist';
import { useState } from 'react';
import { MdDirectionsBike } from "react-icons/md";


const ModExp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return(
      <section>
              <button
                                className='bg-green-600 shadow-2xl justify-center items-center object-center flex flex-col hover:items-center hover:scale-150 hover:duration-500 hover:shadow-2xl transition-all active:scale-95 active:duration-200 text-white px-2 py-2 m-2 mt-4 rounded-md border-minecraft-border-900 border-2'
                                data-tooltip-id='my-tooltip'
                                data-tooltip-content='Ciclista Profesional'
                                data-tooltip-place='bottom'
                                onClick={openModal}>
                                <MdDirectionsBike   className="h-12 w-12"/>
              </button>
      <ModalExp isOpen={isModalOpen} onClose={closeModal}  title="Ciclista Profesional">
              <dl className="flex gap-20" >
                <dl>
                  <p className="font-semibold text-xl text-cyan-500 ">Desde:</p>
                  <p className="text-zinc-950 ">2018</p>
                </dl>
                <dl>
                  <p className="font-semibold  text-xl text-cyan-500">Hasta:</p>
                  <p className="text-zinc-950 ">2024</p>
                </dl>
              </dl>
        <dl className="flex gap-3">
          {/* Equipos */}
          <dl>        
              <p className="font-semibold  text-xl text-cyan-500 mt-2">Equipos</p>
              <p className="text-zinc-950  text-left">Trocha y Ruta </p>
              <p className="text-zinc-950  text-left opacity-70 -mt-1">(Aldana) </p>
              <p className="text-cyan-600 text-left opacity-70 -mt-1">2017</p>

              <p className="text-zinc-950  text-left mt-3">Seleccion Nariño</p>
              <p className="text-zinc-950  text-left opacity-70 -mt-1">(Nariño - Colombia) </p>
              <p className="text-cyan-600 text-left opacity-70 -mt-1">2017 - 2023 </p>
              
              <p className="text-zinc-950  text-left mt-3">Rb+ - Saitel</p>
              <p className="text-zinc-950  text-left opacity-70 -mt-1">(Ecuador) </p>
              <p className="text-cyan-600 text-left opacity-70 -mt-1">2018-2019 </p>

              <p className="text-zinc-950  text-left mt-3">Nariño Tierra de Ciclistas</p>
              <p className="text-zinc-950  text-left opacity-70 -mt-1">(Nariño - Colombia) </p>
              <p className="text-cyan-600 text-left opacity-70 -mt-1">2021 - 2024</p>

              <p className="text-zinc-950  text-left mt-3">Seleccion Nariño Juegos Nacionales 2023</p>
              <p className="text-zinc-950  text-left opacity-70 -mt-1">(Colombia)</p>
              <p className="text-cyan-600 text-left opacity-70 -mt-1">2023</p>
          </dl>
          {/* Palmares */}
        <dl>        
          <p className="font-semibold  text-xl text-cyan-500 mt-2">Palmares</p>
          <p className="text-zinc-950 text-left "> 1ro Clasica Nuestra señora de los milagros </p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1">Guatarilla - Nariño </p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2019</p>
          
          <p className="text-zinc-950 text-left mt-3">1ro Campeonato de Escuelas de Ciclismo</p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1"> Nariño </p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2019</p>

          <p className="text-zinc-950 text-left mt-3">1ro Clasica Nuestra señora de los milagros </p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1">Gualmatan Nariño</p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2020</p>
          
          <p className="text-zinc-950 text-left mt-3">1ro Contrareloj Chequeos Campeonatos Nacionales</p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1">Nariño </p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2021 </p>

          <p className="text-zinc-950 text-left mt-3">5to Etapa 5 Vuelta del Porvenir</p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1">Nariño </p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2021 </p>

          <p className="text-zinc-950 text-left mt-3">1ro Contrareloj Chequeos Campeonatos Nacionales</p>
          <p className="text-zinc-950 text-left opacity-70 -mt-1">Nariño </p>
          <p className="text-cyan-600 text-left opacity-70 -mt-1">2021 </p>

        </dl>
        </dl>

      </ModalExp>
      </section>
    );
};
export default ModExp;
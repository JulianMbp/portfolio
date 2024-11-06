import { div } from "framer-motion/client"
'use client';
import Logo from "../img/Logo.svg"
import Image from "next/image"
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { useState } from 'react';

const ModalPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
    {/* Portada de portafolio */}
    <section className="py-[500px] flex flex-col h-[400px] justify-center items-center gap-5 " id="home">
            {/* Logo */}
            <Image className="w-44 md:w-64 object-cover md:object-cover" src={Logo} alt="" />
            {/* Nombre */}
            <h1 className=" cols-span-1 text-slate-50 font-medium text-5xl text-center text-nowrap">Julian_MBP.dev</h1>
            {/* Boton contacto */}
            <button
        className='h-24 duration-300 flex items-center rounded-3xl p-3 bg-blue-500 gap-3 
            shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
            hover:shadow-2xl transition-all shadow-black'
        onClick={openModal}>
                <svg className="animate-bounce h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <h1 className="text-slate-100 font-regular hidden md:block">Contact_With_Me</h1>
      </button>
      <br />
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Software Engineer" >
        <p className="font-semibold text-lg text-cyan-500">Numero de Contacto</p>
        <p>315-242-74-21</p>
        <p className="font-semibold  text-lg text-cyan-500">Correo Electronico</p>
        <dl className="flex items-center justify-between">
          <p>julian.bastidasmp@gmail.com</p>
          <a className="duration-300 text-slate-50 flex items-center rounded-3xl p-3 bg-blue-500 gap-3 
                    shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                    hover:shadow-2xl transition-all" href="mailto:julian.bastidasmp@gmail.com">Escribir Correo</a>
        </dl>
      </Modal>
    </section>
</section>


  );
};

export default ModalPage;
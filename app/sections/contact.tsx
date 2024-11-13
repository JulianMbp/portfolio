import { div } from "framer-motion/client"
'use client';
import Logo from "../img/Logo.svg"
import Image from "next/image"
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
import ButtonPage from "@/app/components/ButtonContact";

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
            <h1 className=" cols-span-1 text-slate-50 font-medium text-5xl text-center text-nowrap ">Julian_MBP.dev</h1>
            {/* Boton contacto */}
            <ButtonPage/>
            <a href="#about" className="  justify-self-center sm:justify-self-end"><br />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-16 size-[80px] animate-bounce text-slate-50 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </a>
    </section>
</section>
  );
};
export default ModalPage;
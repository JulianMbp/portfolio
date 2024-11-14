import { div, section } from "framer-motion/client"
'use client';
import Logo from "../img/Logo.svg"
import Image from "next/image"
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
    <footer className='bg-gradient-to-t justify-items-end to-[#AA0A0A] to-[#4D0202]  flex flex-col text-white items-center justify-center border-t-1 border-slate-300 border-opacity-50 w-screen py-2'>
        Copyright &copy; 2024
        <ul className='flex text-center gap-5 py-4 text-sm'>
        <li >
            <a href='#home'>Home</a>
        </li>
        <li>
            <a href='#about'>About Me</a>
        </li>
        <li>
            <a href='#projects'>Projects</a>
        </li>
        <li>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Software Engineer" >
                <p className="font-semibold text-lg text-cyan-500">Numero de Contacto</p>
                <p className="text-zinc-950">315-242-74-21</p>
                <p className="font-semibold  text-lg text-cyan-500">Correo Electronico</p>
                <dl className="flex items-center justify-between">
                    <p className="text-zinc-950">julian.bastidasmp@gmail.com</p>
                    <a className="duration-300 text-slate-50 flex items-center rounded-3xl p-3 bg-blue-500 gap-3 
                            shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                            hover:shadow-2xl transition-all" href="mailto:julian.bastidasmp@gmail.com">Escribir Correo</a>
                </dl>
            </Modal>
            <a href='#contact' onClick={openModal}>Contact Me</a>
        </li>
        </ul>
        <h1 className="flex gap-1">Made with<svg className="h-6 w-6 text-slate-100 animate-pulse "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>        by Julian</h1>
        

    </footer>
    );
};

export default Footer;
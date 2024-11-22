'use client';
import { motion } from "framer-motion"
import Logo from "../../public/img/logo.png"
import Image from "next/image"
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { useState } from 'react';
import ButtonPage from "@/app/components/ButtonContact";

const ModalPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  const logoAnimation = {
    hidden: { scale: 0, rotate: -180 },
    show: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  return (
    <section>
      <motion.section 
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="py-[500px] flex flex-col h-[400px] justify-center items-center gap-5 transition-all ease-in delay-300" 
        id="home"
      >
        <motion.div
          variants={logoAnimation}
        >
          <Image 
            className="w-44 md:w-64 object-cover md:object-cover" 
            src={Logo} 
            alt="Logo personal" 
          />
        </motion.div>
        <motion.h1 
          variants={itemAnimation}
          className="cols-span-1 dark:text-slate-50 font-medium text-5xl text-center text-nowrap"
        >
          Julian_MBP.dev
        </motion.h1>
        <motion.h1 
          variants={itemAnimation}
          className="-mt-5 cols-span-1 text-slate-950 dark:text-slate-50 text-opacity-60 dark:text-opacity-60  font-medium text-2xl text-center text-nowrap"
        >
          Software Engineer
        </motion.h1>
        <motion.div
          variants={itemAnimation}
        >
          <ButtonPage />
        </motion.div>
        <motion.a 
          href="#about"
          variants={itemAnimation}
          whileHover={{ scale: 1.1 }}
          className="transition-all ease-in delay-300 justify-self-center sm:justify-self-end"
        >
          <br />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="mt-16 size-[80px] animate-bounce text-slate-50"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" 
            />
          </svg>
        </motion.a>
      </motion.section>
    </section>
  );
};

export default ModalPage;
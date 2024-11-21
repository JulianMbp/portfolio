'use client';
import Image from "next/image"
import IconPets from "../../public/img/Pets.png"
import BrunoCard from "./Pets/Bruno"
import NachoCard from "./Pets/Nacho"
import LunaCard from "./Pets/Luna"
import PopochaCard from "./Pets/Popocha"
import BrownieCard from "./Pets/Brownie"
import MayaCard from "./Pets/Maya"
import SamyCard from "./Pets/Samy"
import { motion } from "framer-motion"

const Pets = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const iconAnimation = {
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
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            id="pets" 
            className="items-center justify-center text-center md:px-24 p-10 mb-36 flex flex-col"
        >
            <motion.div variants={iconAnimation}>
                <Image src={IconPets} alt="IconPets" />
            </motion.div>
            
            <motion.dl 
                variants={containerAnimation}
                className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-5 lg:gap-x-20 mt-28 text-slate-50 justify-between"
            >
                <motion.div variants={itemAnimation}>
                    <BrunoCard />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                    <NachoCard />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                    <LunaCard />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                    <PopochaCard />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                    <BrownieCard />
                </motion.div>
                
                <motion.div variants={itemAnimation}>
                    <MayaCard />
                </motion.div>
                
                
                <SamyCard />
                
            </motion.dl>
        </motion.section>
    )
}

export default Pets
'use client';
import Image from "next/image";
import ImageLife from "../img/life.jpg";
import { motion } from "framer-motion";

const Life = () => {
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
                duration: 0.8
            }
        }
    };

    return (
        <motion.section 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
            className="px-10 md:px-48 grid grid-cols-1 md:py-[100px] md:grid-cols-[1fr_2fr] md:grid-rows-[0.75fr_0fr_1fr] grid-rows-[0.5fr_0.75fr] gap-x-5" 
            id="life"
        >
            <motion.div 
                variants={itemAnimation}
                className="md:row-span-3 md:pb-10"
            >
                <Image className="object-cover rounded-full md:rounded-3xl h-[] md:h-[100%] md:w-[100%] shadow-2xl shadow-black" 
                    src={ImageLife} 
                    alt="Life Image" 
                    priority
                />
            </motion.div>

            <motion.div 
                variants={itemAnimation}
                className="md:float-left"
            >
                <h1 className="md:row-span-2 text-center md:text-left order-1 md:order-2 font-extrabold text-8xl md:text-[10rem]  text-zinc-50">
                    Story of my Life
                </h1>
            </motion.div>

            <motion.div 
                variants={itemAnimation}
                className="md:col-start-2 text-justify"
            >
                <p className="font-extralight text-3xl text-zinc-50 order-3 md:order-3 md:col-start-2 md:pt-0">
                    Nací el 9 de septiembre de 2003 en la ciudad de Ipiales, Nariño. Desde muy pequeño siempre me gustaron los deportes, 
                    y a los 4 años ya había aprendido a andar en bicicleta. Aunque mis padres siempre estuvieron para mí, me crié más con 
                    mis abuelos maternos. Soy hijo único.
                    Durante la mayor parte de mi adolescencia y juventud fui ciclista profesional, compitiendo en todo el territorio colombiano
                    y también en el vecino país de Ecuador. Gracias a esto, he tenido la oportunidad de conocer casi toda Colombia y Ecuador. 
                    Además, soy entrenador deportivo nivel 3, certificado por entrenamientociclismo.com en España, y tengo mi propio equipo de 
                    ciclismo, llamado Promesas Nariño Tierra de Ciclistas.
                </p>
            </motion.div>

            <motion.div 
                variants={itemAnimation}
                className="md:col-span-2 md:row-start-3 md:col-start-2 text-justify"
            >            
                <p className="font-extralight text-3xl text-zinc-50 order-4 md:order-4 md:col-span-2 md:pt-0">
                    La música siempre ha sido otra de mis pasiones. Aprendí a tocar la guitarra, formé parte del coro de mi colegio, 
                    y durante mi juventud escribí algunas canciones. Me encanta pasar tiempo con mis amigos, bailar y cantar.
                    Actualmente, estoy homologando mi carrera de Ingeniería de Software. Comencé mis estudios de manera virtual en la 
                    Universidad Manuela Beltrán y ahora los estoy terminando de forma presencial en la Universidad Cooperativa.
                </p>
            </motion.div>
        </motion.section>
    )   
}

export default Life;
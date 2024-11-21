'use client';
import YouTubeEmbed from "../components/YouTubeEmbed"
import { motion } from "framer-motion"

const Music = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const noteAnimation = {
        hidden: { opacity: 0, scale: 0.8, rotate: -180 },
        show: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.8 }
        }
    };

    const buttonAnimation = {
        hover: { scale: 1.2 },
        tap: { scale: 0.95 }
    };

    return (
        <motion.section 
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="music" 
            className="text-center md:w-[90%] items-center justify-center mb-10 flex flex-col mt-40"
        >
            <motion.h1 variants={itemAnimation} className="font-extralight font-serif text-8xl md:text-9xl order-1 dark:text-slate-50 text-center md:text-left mb-16">
                My Music
            </motion.h1>

            <motion.svg variants={noteAnimation} className="hidden lg:block h-64 w-64 md:-ml-[1250px] md:-mb-[100px] dark:text-slate-100" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
            </motion.svg>

            <motion.svg variants={noteAnimation} className="h-64 w-64 dark:text-slate-100 hidden md:block md:-mr-[1250px] md:-mb-[500px]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <circle cx="6" cy="17" r="3" />
                <circle cx="16" cy="17" r="3" />
                <polyline points="9 17 9 4 19 4 19 17" />
                <line x1="9" y1="8" x2="19" y2="8" />
            </motion.svg>

            <motion.dl variants={itemAnimation} className="order-2 border dark:border-slate-50 border-slate-950 w-[300px] md:w-[60%] rounded-lg flex flex-col justify-between gap-2 shadow-2xl">
                <motion.section variants={itemAnimation} className="order-1 items-center justify-center flex">
                    <dt className="w-[100%] md:w-[90%] h-[200px] md:h-[400px] mt-5">
                        <div className='justify-center items-center mx-[5%] md:mx-[10%] w-[90%] mt-5 md:mt-1 md:w-[85%] h-auto'>
                            <YouTubeEmbed videoId='l2ABZsKHl2Y?si=SqLXAjgMyo2wL9uT' />
                        </div>
                    </dt>
                </motion.section>

                <motion.section variants={itemAnimation} className="order-2 cover text-left ml-[5%] flex flex-col">
                    <h1 className="dark:text-slate-50 fotn-bold font-serif text-3xl">Piel Canela - Cover</h1>
                    <h2 className="dark:text-slate-50 text-opacity-80 font-serif text-xl">Julian Bastidas</h2>
                </motion.section>

                <motion.section variants={itemAnimation} className="order-3 px-[5%] mb-10">
                    <dl className="mt-6 dark:bg-slate-200 bg-slate-950 bg-opacity-50 h-2 rounded-full">
                        <motion.dl 
                            initial={{ width: 0 }}
                            animate={{ width: "50%" }}
                            transition={{ duration: 1 }}
                            className="dark:bg-slate-50 bg-slate-950 h-2 rounded-full"
                        />
                    </dl>
                    <dl className="flex justify-between mt-2 text-sm dark:text-slate-50">
                        <span>1:57</span>
                        <span>3:53</span>
                    </dl>
                </motion.section>

                <motion.section variants={itemAnimation} className="order-4 justify-evenly flex mb-10">
                    <motion.button whileHover="hover" whileTap="tap" variants={buttonAnimation}>
                        <svg className="h-10 w-10 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="19 20 9 12 19 4 19 20" />
                            <line x1="5" y1="19" x2="5" y2="5" />
                        </svg>
                    </motion.button>
                    <motion.button whileHover="hover" whileTap="tap" variants={buttonAnimation}>
                        <svg className="h-10 w-10 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                    </motion.button>
                    <motion.button whileHover="hover" whileTap="tap" variants={buttonAnimation}>
                        <svg className="h-10 w-10 dark:text-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 4 15 12 5 20 5 4" />
                            <line x1="19" y1="5" x2="19" y2="19" />
                        </svg>
                    </motion.button>
                </motion.section>
            </motion.dl>
        </motion.section>
    )
}

export default Music
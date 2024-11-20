'use client';
import ButtonCommAdv from '@/app/components/Button/ButtonCommAdv';
import ButtonCourses from '@/app/components/Button/ButtonCourses';
import ButtonCyclist from '@/app/components/Button/ButtonCyclist';
import ButtonExp from '@/app/components/Button/ButtonExp';
import ButtonExpUni from '@/app/components/Button/ButtonExpUni';
import ButtonTraining from '@/app/components/Button/ButtonTraining';
import ButtonWorkUni from '@/app/components/Button/ButtonWorkUni';
import { Tooltip } from 'react-tooltip';
const experience = () => {
return (
    <section id="experience" className="flex h-screen w-screen items-center justify-center mt-[500px] lg:mt-[300px]">
        <section className=" w-[70%] border-b-4 border-r-4 border-slate-900 rounded-lg text-zinc-950">
            <section className="h-[100%] w-[100%] border-t-4 border-l-4 border-slate-200 rounded-lg">
                <section className="h-[100%] w-[100%] border-[30px] border-minecraft-border-300 rounded-sm">
                    <dl className="border-minecraft-border-950  border-4 h-[100%] w-[100%] bg-opacity-50 bg-[url('/img/texture.jpg')] bg-cover bg-center">
                        <h1 className="-mt-8 font-[family-name:var(--font-kode-medium-mono)] text-xl">Experience</h1>
                        {/* CV */}
                        <a className=" duration-30 items-center gap-3 
                                    shadow-xl hover:scale-110 
                                    active:scale-95 active:duration-200 
                                    hover:shadow-2xl transition-all flex  hover:bg-minecraft-border-500 
                                    hover:border gap-x-3 pl-1 bg-minecraft-border-500  
                                    ml-[60%] md:ml-[88%]
                                    -mt-7 h-6 w-40 border border-zinc-950 rounded-sm" 
                            href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link">
                            <h1 className="font-[family-name:var(--font-kode-medium-mono)]">Descargar CV</h1>
                            <svg className="animate-bounce h-5 w-5 text-zinc-950"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />  <polyline points="7 10 12 15 17 10" />  <line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </a>
                            {/* tooltip y modal */}
                            <div className="flex flex-col justify-center items-center ">
                        <dl className="mt-5 transition-all flex flex-row ">
                            {/* Bachiller */}
                            <ButtonExp/>
                            {/* Titulo de Ingenieria de Software */}
                            <ButtonExpUni/>
                            {/* Practica Empresarial */}
                            <ButtonWorkUni/>
                        </dl>
                        <dl className="mt-10 transition-all flex flex-row ">
                            {/* Asesor Comercial */}
                            <ButtonCommAdv/>
                        </dl>
                        <dl className="mt-10 transition-all flex flex-row ">
                            {/* Entrenador Deportivo */}
                            <ButtonTraining/>
                            {/* Ciclista Profesional */}
                            <ButtonCyclist/>
                        </dl>
                        <dl className="mt-10 transition-all flex flex-row ">
                            {/* Cursos complementarios */}
                            <ButtonCourses/>
                        </dl>
                        </div>
                        
                <Tooltip id='my-tooltip' />
                    </dl>
                </section>  
            </section>      
        </section>        
    </section>
)
};
export default experience
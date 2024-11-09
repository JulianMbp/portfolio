
const experience = () => {
return (
    <section id="experience" className="flex h-screen w-screen items-center justify-center">
        <section className="h-[70%] w-[70%] border-b-4 border-r-4 border-slate-900 rounded-lg text-zinc-950">
            <section className="h-[100%] w-[100%] border-t-4 border-l-4 border-slate-200 rounded-lg">
                <section className="h-[100%] w-[100%] border-[30px] border-minecraft-border-300 rounded-sm">
                    <dl className="border-minecraft-border-950 border-4 h-[100%] w-[100%]">
                        <h1 className="-mt-8 font-[family-name:var(--font-kode-medium-mono)] text-xl">Experience</h1>
                        <a className=" duration-30 items-center gap-3 
                                    shadow-xl hover:scale-110 
                                    active:scale-95 active:duration-200 
                                    hover:shadow-2xl transition-all flex  hover:bg-minecraft-border-500 
                                    hover:border gap-x-3 pl-1 bg-minecraft-border-500
                                    ml-[60%] md:ml-[88%]
                                    -mt-7 h-6 w-40 border border-zinc-950 rounded-sm" 
                            href="https://drive.google.com/file/d/12j5U5CZJAC6yy3Mg0jEfXIMPy9fz3N3t/view?usp=drive_link">
                            <h1 className="font-[family-name:var(--font-kode-medium-mono)]">Descargar CV</h1>
                            <svg className="animate-bounce h-5 w-5 text-zinc-950"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />  <polyline points="7 10 12 15 17 10" />  <line x1="12" y1="15" x2="12" y2="3" /></svg>
                        </a>
                    </dl>
                </section>  
            </section>      
        </section>        
        {/* animate-bounce 
        para animar con saltos el boton de descarga de cv*/}
    </section>
)
};
export default experience
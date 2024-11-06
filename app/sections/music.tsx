const music = () => {
    return (
        <section id="music" className=" text-center md:w-[90%] items-center justify-center mb-10 flex flex-col mt-40">
            <h1 className="font-extralight font-serif text-8xl md:text-9xl order-1 text-slate-50 text-center md:text-left mb-16">My Music</h1>
            <svg className="hidden lg:block animate-bounce h-64 w-64 md:-ml-[1250px] md:-mb-[100px] text-slate-100"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 18V5l12-2v13" />  <circle cx="6" cy="18" r="3" />  <circle cx="18" cy="16" r="3" /></svg>
            <svg className="h-64 w-64 text-slate-100 hidden md:block animate-bounce md:-mr-[1250px] md:-mb-[500px] "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>

            <dl className="order-2 border border-slate-50 w-[300px] md:w-[60%]  flex flex-col justify-between gap-2 shadow-2xl">
                {/* Imagen de portada */}
                <section className="order-1 items-center justify-center flex">
                    <dt className="border border-slate-50 w-[90%] md:w-[90%] h-[200px] md:h-[400px] mt-5">
                        hola
                    </dt>
                </section>
                {/* Cancion */}
                <section className="order-2 cover text-left ml-[5%] flex flex-col">
                        <h1 className="text-slate-50 fotn-bold font-serif text-3xl">Piel Canela - Cover</h1>
                        <h2 className="text-slate-50 text-opacity-80 font-serif text-xl">Julian Bastidas</h2>
                </section>
                {/* Barra de progreso */}
                <section className="order-3 px-[5%] mb-10">
                    <dl className="mt-6 bg-slate-200 bg-opacity-50 h-2 rounded-full ">
                        <dl className="bg-slate-50 h-2 rounded-full w-1/2">
                        </dl>
                    </dl>
                    <dl className="flex justify-between mt-2 text-sm text-slate-50">
                        <span>1:57</span>
                        <span>3:53</span>
                    </dl>
                </section>
                {/* Botones de reproducción */}
                <section className="order-4 justify-evenly flex mb-10">
                    <button >
                        <svg className="h-10 w-10 text-slate-100 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="19 20 9 12 19 4 19 20" />  <line x1="5" y1="19" x2="5" y2="5" /></svg>
                    </button>
                    <button >
                        <svg className="h-10 w-10 text-slate-100 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </button>
                    <button>
                        <svg className="h-10 w-10 text-slate-100 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 4 15 12 5 20 5 4" />  <line x1="19" y1="5" x2="19" y2="19" /></svg>
                    </button>
                </section>
            </dl>

        </section>
    )
}

export default music
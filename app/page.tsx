import immgAout from '../public/img/Imagen_About_Me.jpg';
export default function Home() {
  return (
    <main className="bg-[#ff1111] w-screen h-screen grid grid-cols-1 md:justify-center">
      {/* Header */}
        <header className="order-1 m-2 fixed p-2 grid grid-cols-1 md:grid-cols-7 col-span-1 items-center bg-[#0F0F0F] bg-opacity-80 backdrop-filter backdrop-blur-sm transparent gap-3 border border-slate-100 rounded-3xl shadow-2xl shadow-black">
          {/* About Me */}
            <a className="order-1 border hover:border-hidden hover:scale-110 hover:shadow-2xl transition-all active:scale-95 border-slate-100 rounded-3xl items-center md:p-1 flex gap-2 shadow-2xl h-5 w-5 md:h-auto md:w-auto" href="#about">
              <svg className=" h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">About Me</h2>
            </a>
            {/* Projects */}
            <a className="order-2 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 md:pl-2 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#projects">
              <svg className="h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>          
              <h2 className="text-slate-100 font-regular hidden md:block">Projects</h2>
            </a>
            {/* Experience */}
            <a className="order-3 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#experience">
              <svg className="h-6 w-6 text-slate-100 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />  <polyline points="17 6 23 6 23 12" /></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">Experiencie</h2>
            </a>
            {/* Life */}
            <a className="order-4 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 md:pl-6 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto " href="#experience">
              <svg className="h-6 w-6 text-slate-100 "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">Life</h2>
            </a>
            {/* Pets */}
            <a className="order-5 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 md:pl-2 flex gap-2 shadow-2xl items-center h-5 w-5 md:h-auto md:w-auto" href="#experience">
              <svg className="h-6 w-6 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" /></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">Pets</h2>
            </a>
            {/* Music */}
            <a className="order-6 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#experience">
              <svg className="h-6 w-6 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">Music</h2>
            </a>
            {/* Training */}
            <a className="order-7 hover:border-hidden hover:scale-125 hover:shadow-2xl transition-all active:scale-95 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#experience">
              <svg className="h-6 w-6 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="8" r="7" />  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
              <h2 className="text-slate-100 font-regular hidden md:block">Training</h2>
            </a>
        </header>
      {/* Portada de portafolio */}
        <section className=" order-2 flex flex-col w-screen h-screen justify-center items-center gap-5">
                {/* Logo */}
                <h1 className=" cols-span-1 text-slate-50 font-medium text-5xl text-center">logo</h1>
                {/* Nombre */}
                <h1 className=" cols-span-1 text-slate-50 font-medium text-5xl text-center text-nowrap">Julian_MBP.dev</h1>
                {/* Boton contacto */}
                <button className="flex items-center rounded-3xl p-3 bg-blue-500 gap-3 shadow-xl hover:border-hidden hover:scale-110 hover:shadow-2xl transition-all shadow-black">
                  <svg className="h-8 w-8 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <h1 className="text-slate-100 font-regular hidden md:block">Contact_Wiht_Me</h1>
                </button>
        </section>
      {/* About Me */}
        <section className="ml-2 order-3 grid grid-cols-2 justify-center items-center  " id='about'>
            <h1 className='font-extrabold text-[1200%] order-1 ml-10'>About <br /> Me</h1>
            <p className="text-3xl order-3 ml-10 ">¡Hola! 👋 <br />
                Soy Julián M. Bastidas Pérez, ingeniero de software en formación 🧑‍💻. <br />
                Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀. <br />
                Soy una persona divertida, extrovertida y me apasiona programar todo lo que puedas imaginar 💡💻. <br />
                Vivo en la hermosa ciudad de Pasto 🏞️, <br />
                y actualmente estoy cursando el sexto semestre de Ingeniería de Software. <br />
                Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨.</p>
            <h1 className="order-2 row-span-2">Imgen</h1>
        {/* <img className="rounded-lg box-border h-25 w-25 opacity-50 order 1" src="immgAout"></img> */}
        </section>
    </main>
  );
}
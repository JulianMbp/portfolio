
import ButtonPage from "@/app/components/ButtonSmall";
const Header = () => {
    return (
        <section className="flex flex-col md:items-center border">
          <header className="gap-2 md:justify-between order-1 m-2 fixed p-2 grid grid-cols-1 md:grid-cols-7 col-span-1 items-center bg-[#0F0F0F] bg-opacity-80 backdrop-filter backdrop-blur-sm transparent border border-slate-100 rounded-3xl">
                {/* About Me */}
                  <a className=" order-1 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 md:pl-2 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#about">
                    <svg className="  h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                    <h2 className="text-slate-100 font-regular hidden md:block">About Me</h2>
                  </a>
                  {/* Projects */}
                  <a className="order-2 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 md:pl-2 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#projects">
                    <svg className="h-5 w-5 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>          
                    <h2 className="text-slate-100 font-regular hidden md:block">Projects</h2>
                  </a>
                  {/* Experience */}
                  <a className="order-3 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#experience">
                    <svg className="h-6 w-6 text-slate-100 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />  <polyline points="17 6 23 6 23 12" /></svg>
                    <h2 className="text-slate-100 font-regular hidden md:block">Experiencie</h2>
                  </a>
                  {/* Life */}
                  <a className="order-4 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 md:pl-6 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto " href="#life">
                    <svg className="h-6 w-6 text-slate-100 "  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    <h2 className="text-slate-100 font-regular hidden md:block">Life</h2>
                  </a>
                  {/* Pets */}
                  <a className="order-5 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 md:pl-2 flex gap-2 shadow-2xl items-center h-5 w-5 md:h-auto md:w-auto" href="#pets">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-dog"><path d="M11.25 16.25h1.5L12 17z"/><path d="M16 14v.5"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"/><path d="M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/></svg>                  
                    <h2 className="text-slate-100 font-regular hidden md:block">Pets</h2>
                  </a>
                  {/* Music */}
                  <a className="order-6 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#music">
                    <svg className="h-6 w-6 text-slate-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
                    <h2 className="text-slate-100 font-regular hidden md:block">Music</h2>
                  </a>
                  {/* Training */}
                  <a className="order-7 hover:duration-500  hover:scale-125 hover:shadow-2xl transition-all active:scale-95 active:duration-200 flex gap-2 shadow-2xl  items-center h-5 w-5 md:h-auto md:w-auto" href="#training">
                    <svg className="h-6 w-6 text-slate-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="8" r="7" />  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                    <h2 className="text-slate-100 font-regular hidden md:block">Training</h2>
                  </a>
          </header>
          <dl className="md:ml-[1100px] md:mt-2 mt-[225px] fixed ">
            <ButtonPage/>
          </dl>
          
        </section>
    );
}
export default Header;
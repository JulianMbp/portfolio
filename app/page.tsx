import Header  from "./sections/header"
import Portada from "./sections/portada";
import AboutMe from "./sections/aboutMe";
export default function Home() {
    return ( 
        <main className='dark:text-gray-200 dark:bg-slate-900 flex flex-col md:items-center 
        bg-gradient-to-b from-[#4D0202] via-[#AA0A0A] to-[#CE0707] to-[#AA0A0A] to-[#4D0202] 
        overflow-auto inset-0'>
        <Header />
        <Portada />
        <AboutMe />
        </main>
    );}
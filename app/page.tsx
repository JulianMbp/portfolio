import Header  from "./sections/header"
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Life from "./sections/life";
import Video from "./sections/video";
import Pets from "./sections/pets";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio de Julian B',
}
export default function Home() {

    return ( 
        
        <main className='text-slate-50 flex flex-col md:items-center 
        bg-gradient-to-b from-[#4D0202] via-[#AA0A0A] to-[#CE0707] 
        overflow-hidden inset-0 font-serif transition-all '>
        <Header />  
        <Contact />      
        <AboutMe />
        <Projects />
        <Experience />
        <div className="flex justify-center items-center h-full w-full">
          <Video />
        </div>
        <Life />
        <Pets />
        <Footer />
        </main>
    );}
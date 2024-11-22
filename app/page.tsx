import Header  from "./sections/header"
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Life from "./sections/life";
import Video from "./sections/video";
import Pets from "./sections/pets";
import Music from "./sections/music";
import Training from "./sections/training";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import Head from "next/head";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio de Julian',
}
export default function Home() {

    return ( 
        
        <main className='dark:text-slate-50 flex flex-col md:items-center text-slate-950
        dark:bg-gradient-to-b dark:from-[#4D0202] dark:via-[#AA0A0A] dark:to-[#CE0707] bg-[#e42b2b]
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
        <Music />
        <Training />
        <Footer />
        </main>
    );}
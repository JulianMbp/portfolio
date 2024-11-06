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
export default function Home() {
    return ( 
        <main className='dark:text-gray-200 flex flex-col md:items-center
        bg-gradient-to-b from-[#4D0202] via-[#AA0A0A] to-[#CE0707]
        overflow-auto inset-0'>
        <Header />  
        <Contact />      
        <AboutMe />
        <Projects />
        <Experience />
        <Life />
        <Video />
        <Pets />
        <Music />
        <Training />
        <Footer />
        </main>
    );}
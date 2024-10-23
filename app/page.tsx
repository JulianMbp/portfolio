import Header  from "./sections/header"
import Portada from "./sections/portada";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Life from "./sections/life";
import Pets from "./sections/pets";
import Music from "./sections/music";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
export default function Home() {
    return ( 
        <main className='dark:text-gray-200 flex flex-col md:items-center
        bg-gradient-to-b from-[#4D0202] via-[#AA0A0A] to-[#CE0707] to-[#AA0A0A] to-[#4D0202] 
        overflow-auto inset-0'>
        <Header />
        <Portada />
        <AboutMe />
        <Projects />
        <Experience />
        <Life />
        <Pets />
        <Music />
        <Contact />
        <Footer />
        </main>
    );}
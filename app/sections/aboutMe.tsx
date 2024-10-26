import ImgAbout from "../img/Imagen_About_Me.jpg"
import Image from "next/image"


const aboutMe = () => {
    return (
        <div className="px-10 my-[200px] items-center justify-center">
            {/* About Me */}
        <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-[0fr_1fr]" id='about'>
            <h1 className='font-extrabold text-8xl md:text-9xl md:order-1 h-[80%] order-1 text-slate-50 text-center md:text-left col-span-2 md:col-span-1 '>About Me</h1>
            <p className="text-3xl order-3 md:order-3 text-slate-50 col-span-2 md:col-span-1  ">¡Hola! 👋 <br />
                Soy Julián M. Bastidas Pérez, ingeniero de software en formación 🧑‍💻.
                Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀.
                Soy una persona divertida, extrovertida y me apasiona programar todo lo que puedas imaginar 💡💻.
                Vivo en la hermosa ciudad de Pasto 🏞️, y actualmente estoy cursando el sexto semestre de Ingeniería de Software.
                Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨.</p>
            <div className="md:py-10 md:px-10  order-2 md:order-2 p-5 object-cover md:row-span-2 md:rounded-lg rounded-full  ">
                <Image className=" rounded-full md:rounded-3xl  h-[350px] md:h-[100%] md:w-[100%]  object-cover md:object-cover shadow-2xl shadow-black" src={ImgAbout} alt="" />
            </div> 
        </section>
        </div>
    )
}
export default aboutMe
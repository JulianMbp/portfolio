import ImgAbout from "../img/Imagen_About_Me.jpg"
import Image from "next/image"


const aboutMe = () => {
    return (
        <div className="border-t dark:border-slate-100 dark:border-opacity-45 border-opacity-45  border-slate-900">
            {/* About Me */}
        <section className="container  grid grid-cols-1 md:grid-cols-2" id='about'>
            <h1 className='md:pl-10 font-extrabold text-8xl md:text-9xl md:order-1 h-full order-1 my-10 text-slate-50 text-center md:text-left col-span-2 md:col-span-1 border-blue-500  '>About Me</h1>
            <p className="text-3xl order-3 md:order-3 pl-10 text-slate-50 col-span-2 md:col-span-1 ">¡Hola! 👋 <br />
                Soy Julián M. Bastidas Pérez, ingeniero de software en formación 🧑‍💻.
                Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀.
                Soy una persona divertida, extrovertida y me apasiona programar todo lo que puedas imaginar 💡💻.
                Vivo en la hermosa ciudad de Pasto 🏞️, y actualmente estoy cursando el sexto semestre de Ingeniería de Software.
                Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨.</p>
            <div className="order-2 md:order-2 p-5 object-center md:row-span-2 md:rounded-lg rounded-full item-center justify-center  ">
                <Image className=" rounded-full md:rounded-3xl h-[350px] w-[300px]  object-cover md:object-cover shadow-2xl shadow-black" src={ImgAbout} alt="" />
            </div> 
        </section>
        </div>
    )
}
export default aboutMe
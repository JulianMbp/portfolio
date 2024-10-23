import ImgAbout from "../img/Imagen_About_Me.jpg"
import Image from "next/image"


const aboutMe = () => {
    return (
        <div className="border">
            {/* About Me */}
        <section className=" pl-2 grid grid-cols-1 md:grid-cols-2 justify-center items-center " id='about'>
            <h1 className='font-extrabold text-8xl md:text-9xl md:order-1 order-2 ml-10 text-slate-50 border flex-wrap col-span-2 md:col-span-1'>About <br /> Me</h1>
            <p className="text-3xl order-3 md:order-3 pl-10 text-slate-50 col-span-2 md:col-span-1 ">¡Hola! 👋 <br />
                Soy Julián M. Bastidas Pérez, ingeniero de software en formación 🧑‍💻.
                Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀.
                Soy una persona divertida, extrovertida y me apasiona programar todo lo que puedas imaginar 💡💻.
                Vivo en la hermosa ciudad de Pasto 🏞️, y actualmente estoy cursando el sexto semestre de Ingeniería de Software.
                Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨.</p>
            <div className="order-1 md:order-2 border md:row-span-2 text-center md:rounded-lg rounded-full">
                <Image className="rounded-full md:rounded-3xl h-[110%] md:h-[500px] object-cover md:object-cover" src={ImgAbout} alt="" />
            </div>
        </section>
        </div>
    )
}
export default aboutMe
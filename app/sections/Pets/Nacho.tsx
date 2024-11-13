import Nacho from "../../../public/img/pets/nacho.jpg"
import Image from "next/image"

const nachoCard = () => {
    return(
        <section className="bg-brunoColor-300 h-[100%] w-[100%] rounded-3xl ">
        <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
        <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
        md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
        h-[150px] w-[150px] sm:h-[250px] sm:w-[90%] -mt-10 
        lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
        object-cover md:object-right lg:object-cover shadow-2xl shadow-black" src={Nacho} alt="" />
        <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brunoColor-950 font-serif pr-10">
            <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left">
                <h1 className="text-4xl lg:text-left ">Nacho 🧀</h1>
                <h1 className="text-2xl  text-brunoColor-950 text-opacity-80">Edad: 7 años</h1>
            </dl>
            <p className=" text-brunoColor-950 text-opacity-80">Perro Pequines</p>
            <p className="text-brunoColor-950 text-sm text-opacity-60 pb-5 px-10 lg:px-0 lg:pb-0 lg:text-left">¡Hola! Soy Nacho, un pequeño pero muy querido perro pequinés. Me encanta dormir y acurrucarme junto a mi abuelo; él es mi compañero favorito para descansar y también para molestar un poquito. Tengo mis gustos bien definidos: no me resisto al pan remojado en café y al concentrado con arroz. También disfruto de probar las pepas de Bruno (aunque a él no siempre le guste). Vivo en Ipiales con él, y soy el consentido de mi mamá. ¡Dormir y comer es lo mejor del mundo! 🐾
            </p>
        </dl>
        </dl>
    </section>
    )
};
export default nachoCard
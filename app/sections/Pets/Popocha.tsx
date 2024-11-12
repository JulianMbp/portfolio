import Popocha from "../../../public/img/pets/Popocha.jpg"
import Image from "next/image"

const PopochaCard = () => {
    return (
        <section className="bg-zinc-700 h-[100%] w-[100%] rounded-3xl ">
        <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
        <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
        md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
        h-[150px] w-[150px] sm:h-[250px] sm:w-[90%] -mt-10 
        lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
        object-cover md:object-top lg:object-cover shadow-2xl shadow-black" src={Popocha} alt="" />
        <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-slate-50 font-serif pr-10">
            
            <dl className="flex justify-between">
                <h1 className="text-4xl lg:text-left ">Popocha </h1>
                <h1 className="text-2xl  text-slate-50 text-opacity-80">Edad: 2 años</h1>
            </dl>
            <p className=" text-slate-50 text-opacity-80">Retriever de pelo plano</p>
            <p className=" text-slate-50 text-sm text-opacity-60 pb-5 px-10 lg:px-0 lg:pb-0 lg:text-left">
                ¡Hola! Soy Popocha, una Retriever de pelo plano. Soy juguetona y, aunque a veces un poco torpe y brusca, ¡tengo mucha fuerza! Mi debilidad es el pollo, y siempre ando pendiente para ver si logro robarme un poquito de la cocina. Además, tengo mi pancita bien redonda, pero eso solo significa que soy muy feliz y bien alimentada.
            </p>
        </dl>
        </dl>
    </section>
    )
}
export default PopochaCard
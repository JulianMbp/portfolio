import Maya from "../../../public/img/pets/Maya.jpg"
import Image from "next/image"

const mayaCard = () => {
    return (
    <section className="bg-brunoColor-700 h-[100%] w-[100%] rounded-3xl ">
        <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
        <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
        md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
        h-[150px] w-[150px] sm:h-[250px] sm:w-[90%] -mt-10 
        lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
        object-cover lg:object-cover shadow-2xl shadow-black" src={Maya} alt="" />
        <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brunoColor-200 font-serif pr-10">
            
            <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left">
            <h1 className="text-4xl lg:text-left text-slate-50">Maya🌞</h1>
                <h1 className="text-2xl  text-slate-50 text-opacity-80">Edad: 13 años</h1>
            </dl>
            <p className="text-slate-50 text-opacity-80">Mestiza</p>
            <p className="text-slate-50  text-sm text-opacity-50 pb-5 px-10 lg:px-0 lg:pb-0 lg:text-left">
                ¡Hola! Soy Maya, una perrita mestiza de aspecto robusto y amigable, con un poquito de Labrador o Retriever en mi sangre. Soy juguetona y alegre, aunque, si soy sincera, ¡también soy perezosa y dormilona! Mi lugar favorito es mi sillón o mi cama, donde me encanta echarme a disfrutar del sueño. Soy la consentida de papá, y me encanta comer, especialmente pollito. Ya soy viejita, llena de sabiduría, y he vivido toda mi vida en esta casa, donde recibo a los visitantes con mi encanto especial.
            </p>
        </dl>
        </dl>
    </section>
    )
}
export default mayaCard
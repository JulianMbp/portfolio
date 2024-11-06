import Samy from "../../../public/img/pets/Samy.jpeg"
import Image from "next/image"

const SamyCard = () => {
    return (
        <div className=" flex md:col-span-2 justify-center items-center ">
        <section className="bg-lunaColor-300 h-[100%] w-[100%] md:w-[60%] lg:w-[50%] rounded-3xl">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
            <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
            md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
            h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] -mt-10 
            lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
            object-cover lg:object-cover shadow-2xl shadow-black" src={Samy} alt="" />
            <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-lunaColor-950 font-serif">
                <h1 className="text-4xl lg:text-left ">Samy 🪽</h1>
                <p className=" text-lunaColor-950 text-opacity-80">Gato Naranja</p>
                <p className=" text-lunaColor-950 text-sm text-opacity-50 pb-5 px-10 lg:px-0 lg:pb-0">Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.
                Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.
                Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.
                Empowering users throug captivating interfaces, turning ideas into pixel-perfect realities.
                </p>
            </dl>
            </dl>
        </section>
    </div>
    )
};
export default SamyCard;
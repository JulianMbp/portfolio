import Brownie from "../../public/img/pets/Brownie.jpeg"
import Image from "next/image"


const BrownieCard = () => {
    return (
        <section className="bg-blue-800 h-[100%] w-[100%] rounded-3xl ">
            <dl className="rounded-3xl flex lg:gap-10 gap-5 flex-col lg:flex-row justify-center items-center">
            <Image className=" order-1 rounded-full sm:rounded-3xl transition-all ease-in delay-300 sm:transition-all sm:ease-in sm:delay-300 
            md:transition-all md:ease-in md:delay-300 lg:transition-all lg:rounded-3xl
            h-[150px] w-[150px] sm:h-[250px] sm:w-[90%] -mt-10 
            lg:my-10 lg:-ml-10 lg:h-[280px] lg:w-[250px]  
            object-cover lg:object-cover shadow-2xl shadow-black" src={Brownie} alt="" />
            <dl className=" order-2 lg:w-[70%] text-center lg:text-left flex flex-col justify-center text-brownieColor-100 font-serif pr-10">
                
                <dl className="lg:flex lg:justify-between grid grid-cols-1 md:grid md:grid-cols-1 justify-center items-center text-center md:justify-center md:items-center md:text-center lg:text-left">
                    <h1 className="text-4xl lg:text-left ">App Gestion de una EPS</h1>
                </dl>
                <p className=" text-brownieColor-100 text-opacity-80">En esta aplicacion se utilizó para la practica de docker y hacer un sistema distribuido.</p>
                <p className=" text-brownieColor-100 text-sm text-opacity-60 pb-5 px-10 lg:px-0 lg:pb-0 lg:text-left">
                </p>
            </dl>
            </dl>
        </section>
    )
};

export default BrownieCard
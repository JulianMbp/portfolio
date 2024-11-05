import Image from "next/image"
import Dog  from "../img/dog.svg"
import Cat from "../img/cat.svg"
const pets = () => {
    return (
        <section id="pets" className="w-screen h-screen justify-center border mb-32 flex ">
            <h1 className="text-[350px] font-extrabold text-slate-50 font-serif order-1">PETS</h1>
            <dl className="flex gap-32 order-2 mt-28 -ml-[830px]">
            {/* cat */}
            <Image className="order-2 mt-[150px]" src={Cat} alt="" />
            {/* dog */}
            <Image className="order-1" src={Dog} alt="" />
            </dl>
            
        </section>
    )
}

export default pets
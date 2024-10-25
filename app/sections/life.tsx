import Image from "next/image";
import ImageLife from "../img/life.jpg";
const life = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  ">
            <div>
                <Image className="border rounded-3xl md:rounded-3xl h-[350px] w-[300px]  object-cover md:object-cover shadow-2xl shadow-black" src={ImageLife} alt="" />
            </div>
            <div className="">
                <h1 className=" font-extrabold text-4xl md:text-5xl  h-full text-slate-50">Story of my Life</h1>
                <p className=""></p>
            </div>
        </div>
    )
}

export default life
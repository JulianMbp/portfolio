import Image from "next/image";
import ImageLife from "../img/life.jpg";
const life = () => {
    return (
        <div className="px-10 grid grid-cols-2 grid-rows-3 gap-0">
            <div className="row-span-2">
                <div className=" border md:objecy-center order-2 md:order-1 md:h-full md:px-36">
                <Image className="md:row-span-2 rounded-full md:rounded-3xl h-[350px] md:h-[350px] w-[300px] object-cover md:object-cover shadow-2xl shadow-black" src={ImageLife} alt="" />
            </div>
            </div>
            <div >
                <div className="row-span-2 order-1 md:order-2">
                        <h1 className=" font-extrabold text-8xl md:text-9xl text-slate-50 border">Story of my Life
                        
                        </h1>
                </div>
            </div>
            <div className="col-start-2">
                <p className="border font-extralight text-2xl text-slate-50 order-3 md:order-3 col-start-2 pt-4 md:pt-0 ">Nací el 9 de septiembre de 2003 en la ciudad de Ipiales, Nariño. Desde muy pequeño siempre me gustaron los deportes, y a los 4 años ya había aprendido a andar en bicicleta. Aunque mis padres siempre estuvieron para mí, me crié más con mis abuelos maternos. Soy hijo único.
                Durante la mayor parte de mi adolescencia y juventud fui ciclista profesional, compitiendo en todo el territorio colombiano y también en el vecino país de Ecuador. Gracias a esto, he tenido la oportunidad de conocer casi toda Colombia y Ecuador. Además, soy entrenador deportivo nivel 3, certificado por entrenamientociclismo.com en España, y tengo mi propio equipo de ciclismo, llamado "Promesas Nariño Tierra de Ciclistas".
                </p>
            </div>
            <div className="col-span-2 row-start-3">            
                <p className="border font-extralight text-2xl text-slate-50 order-4 md:order-4 md:col-span-2 pt-4 md:pt-0">
                    La música siempre ha sido otra de mis pasiones. Aprendí a tocar la guitarra, formé parte del coro de mi colegio, La música siempre ha sido otra de mis pasiones. Aprendí a tocar la guitarra, formé parte del coro de mi colegio, y durante mi juventud escribí algunas canciones. Me encanta pasar tiempo con mis amigos, bailar y cantar.
                    Actualmente, estoy homologando mi carrera de Ingeniería de Software. Comencé mis estudios de manera virtual en la Universidad Manuela Beltrán y ahora los estoy terminando de forma presencial en la Universidad Cooperativa.
                </p>
            </div>
        </div>
    )   
}

export default life
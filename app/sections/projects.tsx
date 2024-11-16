import Image from "next/image";
import Tabs from "@/app/components/Tabs";
const projects = () => {
return (
    <section id="projects" className="grid lg:grid-cols-5 gird md:grid-cols-2 grid-cols-1  h-screen w-screen items-center justify-center object-center text-center">
        <section className="border">
            Tecnologias Aprendidas
        </section>
        <dl className="lg:col-span-3 md:col-span-2 ">
        <Tabs/>
        </dl>
        <section className="border lg:block hidden">Tecnologias</section>
    </section>
)};
export default projects
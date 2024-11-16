import Image from "next/image";
import Tabs from "@/app/components/Tabs";
const projects = () => {
return (
    <section id="projects" className="grid grid-cols-5 h-screen w-screen items-center justify-center object-center text-center">
        <section className="border">Tecnologias</section>
        <dl className="col-span-3">
        <Tabs/>
        </dl>
        <section className="border">Tecnologias</section>
    </section>
)};
export default projects
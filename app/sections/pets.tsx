import Image from "next/image"
import IconPets from "../img/Pets.png"
import Samy from "../img/pets/Samy.jpeg"
import Bruno from "../img/pets/Bruno.jpg"
import Luna from "../img/pets/Luna.jpg"
import Maya from "../img/pets/Maya.jpg"
import Nacho from "../img/pets/Nacho.jpg"
import Popocha from "../img/pets/Popocha.jpg"
import Brownie from "../img/pets/Brownie.jpeg"
const pets = () => {
    return (
        <section id="pets" className="items-center justify-center text-center border px-24 p-10 mb-36 flex flex-col">
            <Image src={IconPets} alt="IconPets" />
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5 mt-10 text-slate-50">
                <section className="flex p-5  ">
                    <Image className="rounded-full md:rounded-3xl md:h-auto md:w-[200px] object-cover " src={Bruno} alt="" />
                    <dl className="flex flex-col pl-3">
                        <h1 className=" font-bold font-serif text-left text-7xl">Bruno</h1>
                        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem sed laboriosam cumque a soluta repudiandae. Magnam necessitatibus fugit odio hic labore tenetur dolorem, in impedit suscipit, et magni voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </dl>
                </section>
                <section className="flex p-5 ">
                    <Image className="object-right rounded-full md:rounded-3xl md:h-[auto] md:w-[100px] object-cover" src={Nacho} alt="" />
                    <dl className="flex flex-col pl-3">
                    <h1 className="font-bold font-serif text-left text-7xl">Nacho</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus consequatur nesciunt eveniet deleniti ab, qui placeat quasi ut dolor, quam veniam architecto sapiente. Magni enim aut distinctio doloremque quisquam!</p>
                    </dl>
                </section>
                <section className="flex flex-col">
                    <Image className="rounded-full md:h-[100px] md:w-[100px] object-cover" src={Luna} alt="" />
                    <h1>Luna</h1>
                    <p></p>
                </section>
                <section className="flex flex-col">
                    <Image className="rounded-full md:h-[100px] md:w-[100px] object-cover" src={Maya} alt="" />
                    <h1>Maya</h1>
                    <p></p>
                </section>
                <section className="flex flex-col">
                    <Image className="rounded-full md:h-[100px] md:w-[100px] object-cover" src={Popocha} alt="" />
                    <h1>Popocha</h1>
                    <p></p>
                </section>
                <section className="flex flex-col">
                    <Image className="rounded-full md:h-[100px] md:w-[100px] object-cover" src={Brownie} alt="" />
                    <h1>Brownie</h1>
                    <p></p>
                </section>
                <section className="flex flex-col">
                    <Image className="rounded-full md:h-[100px] md:w-[100px] object-cover" src={Samy} alt="" />
                    <h1>Samy</h1>
                    <p></p>
                </section>
            </dl>
        </section>
    )
}

export default pets
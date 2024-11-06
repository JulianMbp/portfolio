import Image from "next/image"
import IconPets from "../../public/img/Pets.png"
import BrunoCard from "./Pets/Bruno"
import NachoCard from "./Pets/Nacho"
import LunaCard from "./Pets/Luna"
import PopochaCard from "./Pets/Popocha"
import BrownieCard from "./Pets/Brownie"
import MayaCard from "./Pets/Maya"
import SamyCard from "./Pets/Samy"
const pets = () => {
    return (
        <section id="pets" className="items-center justify-center text-center border md:px-24 p-10 mb-36 flex flex-col">
            <Image src={IconPets} alt="IconPets" />
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-5 lg:gap-x-20 mt-28 text-slate-50 justify-between">
                {/* bruno */}
                <BrunoCard />
                {/* Nacho */}
                <NachoCard />
                {/* Luna */}
                <LunaCard />
                {/* Popocha */}
                <PopochaCard />
                {/* Brownie */}
                <BrownieCard />
                {/* Maya */}
                <MayaCard />
                {/* Samy */}
                <SamyCard />
                
            </dl>
        </section>
    )
}

export default pets
const aboutMe = () => {
    return (
        <div>
            {/* About Me */}
        <section className=" pl-2 grid grid-cols-1 md:grid-cols-2 justify-center items-center  " id='about'>
            
            <h1 className='font-extrabold text-8xl md:text-9xl order-1 ml-10 text-slate-50 border flex-wrap'>About <br /> Me</h1>
            <p className="text-3xl order-3 pl-10 text-slate-50 col-span-2 md:col-span-1">¡Hola! 👋
                Soy Julián M. Bastidas Pérez, ingeniero de software en formación 🧑‍💻. <br />
                Me encanta crear cosas innovadoras y llevar ideas al siguiente nivel 🚀. <br />
                Soy una persona divertida, extrovertida y me apasiona programar todo lo que puedas imaginar 💡💻.
                Vivo en la hermosa ciudad de Pasto 🏞️, y actualmente estoy cursando el sexto semestre de Ingeniería de Software.
                Siempre que te cruces conmigo, te recibiré con mi mejor sonrisa 😁✨.</p>
            <div className="order-1 md:order-2 border">hola</div>
        {/* <img className="rounded-lg box-border h-25 w-25 opacity-50 order 1" src="immgAout"></img> */}
        </section>
        </div>
    )
}
export default aboutMe
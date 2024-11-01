const projects = () => {
return (
    <section id="projects" className="flex h-screen w-screen items-center justify-center">
        <section className="md:h-[70%] md:w-[80%] border">
            <menu className=" w-full grid grid-cols-4 md:grid-cols-3 grid-rows-1 gap-1 text-center items-center">
                <div className="border">Imagen</div>
                <div className="border">Texto</div>
                <div className="border">Tecnologias</div>
            </menu>
        </section>  
    </section>
)
}

export default projects

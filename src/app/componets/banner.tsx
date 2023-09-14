export default function Banner(){

    const titulo = {
        text:'Bem vindo ao universo dos hérois'
    }

    const text = "Bem vindo ao universo dos hérois"

    return(
        <section className="flex place-items-center">
            <div className="bg-gradient-to-r from-green-800  to-transparent flex pl-10 text-9xl text-white font-bold place-items-center">
                <h1>
                    <span className="text-detail">{text}</span>
                </h1>
            </div>
        </section>
    )
}
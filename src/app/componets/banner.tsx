import Image from "next/image"

export default function Banner(){

    const titulo = {
        text:'Bem vindo ao universo dos sete pecados capitais'
    }

    const text = "Bem vindo ao universo dos Sete pecados capitais"

    return(
        <section className="flex justify-center items-center flex-col">
            <Image className="h-[100%]"
            width={500}
            height={200}
            alt="Logo_Anime"
            src={'/Anime_Logo.webp'}/>
        </section>
    )
}
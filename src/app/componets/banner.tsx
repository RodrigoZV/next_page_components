import Image from "next/image"

export default function Banner(){
    
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
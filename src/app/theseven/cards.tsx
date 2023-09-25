import { Prosto_One } from "next/font/google"
import Image from "next/image"

interface IPropsCard {
    title:string
    img:string
    desc:string
}

export default function Cards(props:IPropsCard){
    return(
        <div className="w-[33%] flex flex-col justify-baseline items-center p-5">
            <div>
                <h1 className="text-white text-center font-bold text-2xl mb-1">{props.title}</h1>
            </div>

            <Image className="h-[100%]"
            width={290}
            height={250}
            alt="person"
            src={props.img}/>

            <span className="text-base text-white flex p-5 text-center">{props.desc}</span>
        </div>
    )
}


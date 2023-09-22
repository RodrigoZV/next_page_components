import { Prosto_One } from "next/font/google"
import Image from "next/image"

interface IPropsCard {
    title:string
    img:string
    desc:string
}

export default function Card(props:IPropsCard){
return(
    <div className="w-[33%] flex flex-col justify-center items-center">
        <div className="">
            <h1 className="text-white text-center">{props.title}</h1>
        </div>
        
        <Image className="h-[100%]"
        width={290}
        height={250}
        alt="Logo"
        src={props.img}/>
        
        <span className="text-white flex text-center">{props.desc}</span>

    </div>
)  
}
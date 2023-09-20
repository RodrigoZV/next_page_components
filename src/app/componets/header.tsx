import Image from "next/image"
import Link from "next/link"
import Theseven from "../theseven/page"

export default function Header(){
    
    return(
    <header className="text-white bg-black flex items-center p-5 justify-between border-b-[1px] border-white">
        
        <Image className="h-[100%]"
        width={100}
        height={50}
        alt="Logo"
        src={'/nnt.png'}/>

        <nav className="flex" >
            <Link href="/theseven" className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Sete pecados capitais</Link>
            <Link href="/tenperson" className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Dez mandamentos</Link>
            <Link href="/"className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Home</Link>
        </nav>
    </header>
    )
}
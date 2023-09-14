import Image from "next/image"

export default function Header(){
    return(
    <header className="text-white bg-black flex items-center p-5 justify-between shadow-lg rounded-bl-lg rounded-br-lg">
        <Image className="h-[100%]"
        width={100}
        height={50}
        alt="Logo"
        src={'/Group2.png'}/>

        <nav className="flex" >
            <span className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Personagem</span>
            <span className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Hérois</span>
            <span className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">Vilões</span>

            <button className="px-3 py-1 hover:bg-yellow-400 active:bg-yellow-500 focus:ring-yellow-300 rounded full cursor-pointer">
                <span>Entrar</span>
            </button>
        </nav>
    </header>
    )
}
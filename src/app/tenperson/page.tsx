import Link from "next/link";
import Image from "next/image"

export default function Tenperson(){
    return(
    <section className="min-h-screen">
        <div className="w-52">
            <div className="flex text-center">
                <h1 className="text-white">Zeldris,O Piedade</h1>
            </div>

            <Image className="h-[100%]"
            width={250}
            height={150}
            alt="Logo"
            src={'/zeldris.jpg'}/>

            <span className="text-white flex text-center">Zeldris é o atual rei do Clã Demônio, o amante do Vampiro, Gelda, o irmão mais novo de Meliodas, e o filho mais novo do Rei Demônio anterior. Anteriormente, Zeldris era um guerreiro de elite de seu clã, servindo seu pai como seu representante e executor.Ele também foi o líder e Piedade dos Dez Mandamentos que serviu sob o reinado de seu pai.</span>

        </div>
    </section>
    )
}
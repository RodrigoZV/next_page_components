import Image from "next/image"

export default function Card(){

    const grupo = {
        name:'Dez Mandamentos'
    }

return(
    <>
    <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-transparent via-yellow-600 to-transparent p-6 shadow-lg flex">
                    <div className="text-white flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold flex justify-center">Sete pecados capitais</h1>
                        <span>Conheça a ordem mais poderosa e implacável do Reino de Liones - os Cavaleiros Sagrados dos Sete Pecados Capitais. Esta formidável unidade é composta por sete criminosos brutais, cada um condenado por crimes graves e marcados com os símbolos de sete bestas lendárias. <br/>  Os Sete Pecados Capitais não apenas lideram a trama, mas também conquistam os corações dos fãs em todo o mundo com suas personalidades únicas e histórias envolventes.</span>
                    </div>

                    <Image className="h-[100%}" 
                    width={500}
                    height={200}
                    alt="Sete Pecados Capitais"
                    src={'/The-Seven-Deadly-Sins-netfli.webp'}/>

                </div>
            </section>

            <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-transparent via-white to-transparent p-6 shadow-lg flex">
                    <div className="text-black flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold flex justify-center">{grupo.name}</h1>
                        <span className="text-black">Os Dez Guerreiros de Elite do Clã Demônio são verdadeiros titãs escolhidos pessoalmente pelo Rei Demônio, cada um dotado de um Mandamento, um poder único conferido pelo próprio Rei. <br/> Este poder não apenas dá a eles força sobre-humana, mas também impõe uma maldição inescapável a qualquer um que ouse quebrar suas regras específicas. <br/> Nesta jornada, você explorará o incrível mundo dos Dez Guerreiros, testemunhando seu poder avassalador e as maldições que recaem sobre aqueles que desafiam a ordem imposta. <br/> Cada membro tem sua própria história fascinante e uma regra única que não deve ser quebrada. Prepare-se para conhecer os seres mais poderosos que já caminharam sobre Britânia, os Dez Guerreiros Supremos do Clã Demônio.</span>
                    </div>

                    <Image className="h-[100%}" 
                    width={500}
                    height={200}
                    alt="Dez Mandamentos"
                    src={'/dez.png'}/>

                </div>
            </section>
    </>
)



    
}
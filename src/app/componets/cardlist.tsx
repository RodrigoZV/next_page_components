import Image from "next/image"

export default function Cardlist(){

    const pessoas = {
        name:'batman'
    }

    return(

        <main className="py-5 first:mt-0">
            <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-blue-800 to-detail p-6 shadow-lg flex">
                    <div className="text-white flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold flex justify-center">Marvel e DC</h1>
                        <span>A Marvel e a DC Comics são duas das editoras mais icônicas de histórias em quadrinhos do mundo. A Marvel foi fundada em 1939 e é conhecida por criar um universo compartilhado repleto de super-heróis como Homem-Aranha, Homem de Ferro e Os Vingadores, que se unem para enfrentar ameaças intergalácticas e terrestres. Por outro lado, a DC Comics, estabelecida em 1934, trouxe à vida personagens icônicos como Superman, Batman e Mulher-Maravilha, que compõem a Liga da Justiça, uma equipe de heróis que se reúne para proteger o mundo de vilões poderosos e eventos catastróficos. Essas duas editoras têm encantado fãs de todo o mundo com suas narrativas épicas e batalhas de super-heróis que transcendem as páginas dos quadrinhos para as telas de cinema e programas de televisão, solidificando seu lugar duradouro na cultura pop. Explore mais sobre esses universos incríveis em nosso site dedicado aos quadrinhos e descubra o fascinante mundo dos super-heróis.</span>
                    </div>

                    <Image className="h-[100%}" 
                    width={500}
                    height={200}
                    alt="JunçãoMarveleDc"
                    src={'/Mvsdc.jpg'}/>

                </div>
            </section>

            <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-red-800 to-detail p-6 shadow-lg flex">
                    <div className="text-white flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold flex justify-center">{pessoas.name}</h1>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo, a harum labore cupiditate facilis facere voluptatum minus animi atque quaerat libero laudantium repellendus iusto culpa! Non at aspernatur aut.</span>
                    </div>

                    <Image className="h-[100%}" 
                    width={500}
                    height={200}
                    alt="Junção de hérois"
                    src={'/Group1.png'}/>

                </div>
            </section>
        </main>
    )
}
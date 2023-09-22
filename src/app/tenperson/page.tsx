import Link from "next/link";
import Image from "next/image"
import Card from "./card";

export default function Tenperson(){
    return(
    <section className="min-h-screen flex justify-center">
        <Card title="Zeldris,O Piedade" img="/zeldris.jpg" desc="Zeldris é o atual rei do Clã Demônio, o amante do Vampiro, Gelda, o irmão mais novo de Meliodas, e o filho mais novo do Rei Demônio anterior. Anteriormente, Zeldris era um guerreiro de elite de seu clã, servindo seu pai como seu representante e executor.Ele também foi o líder e Piedade dos Dez Mandamentos que serviu sob o reinado de seu pai."/>
        <Card title="Mael/Estarossa do Amor" img="/estarossa.jpeg" desc="Mael é um dos Quatro Arcanjos do Clã da Deusa . Durante a Guerra Santa, há 3.000 anos, Gowther e seu “filho” reforjaram as memórias de Mael e de todos os outros, dando ao Arcanjo uma nova identidade como membro dos Dez Mandamentos e filho ilegítimo do Rei Demônio, sob o nome de Estarossa."/>
        <Card title="Fraudrin, O Altruísmo" img="/Fraudrin.webp" desc="Fraudrin é um demônio que tem usado o corpo do Grande Cavaleiro Sagrado Dreyfus como um receptáculo nos últimos 10 anos. Ele é um antagonista secundário do arco Infiltração do Reino, tendo conspirado para ressuscitar o Clã dos Demônios com a ajuda de Hendrickson. Embora ele seja um membro dos Dez Mandamentos como o Altruísmo, ele se considera um substituto para o membro original ausente, Gowther (Demônio)."/>
        <Card title="Galand, A Verdade" img="/galan.jpeg" desc="Mael é um dos Quatro Arcanjos do Clã da Deusa . Durante a Guerra Santa, há 3.000 anos, Gowther e seu “filho” reforjaram as memórias de Mael e de todos os outros, dando ao Arcanjo uma nova identidade como membro dos Dez Mandamentos e filho ilegítimo do Rei Demônio, sob o nome de Estarossa."/>

    </section>
    )
}
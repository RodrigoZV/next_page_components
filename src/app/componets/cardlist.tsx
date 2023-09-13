export default function Cardlist(){
    return(
        <main className="py-5 first:mt-0">
            <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-blue-800 to-detail p-6 shadow-lg flex">
                    <div className="text-white flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold">Título</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sunt. Quas dolore aspernatur nostrum itaque tenetur, id numquam deleniti sit tempora, earum illum voluptas corrupti neque. Vel totam aperiam maiores.</span>
                    </div>

                    <img className="h-[100%}" 
                    width={500}
                    height={200}
                    src={'./Group1.png'}/>

                </div>
            </section>

            <section className="flex mt-5 justify-center">
                <div className="bg-gradient-to-r gap-15 from-red-800 to-detail p-6 shadow-lg flex">
                    <div className="text-white flex flex-col w-[50%] justify-center">
                        <h1 className="text-5xl font-bold">Título</h1>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus expedita maiores ut asperiores aliquid vitae, magnam accusamus voluptatum harum, ratione temporibus, explicabo aspernatur id excepturi illum ipsam ullam blanditiis laboriosam?</span>
                    </div>

                    <img className="h-[100%}" 
                    width={500}
                    height={200}
                    src={'./Mvsdc.jpg'}/>
                </div>
            </section>
        </main>
    )
}
export default function Footer(){
    return(
        <footer className="bg bg-yellow-600 text-black flex justify-evenly py-10">
            <div className="flex flex-col">
                <h1 className="font-black text-3x1">Info</h1>
                <ol className="text-left">
                    <li>Info</li>
                    <li>Info</li>
                    <li>Info</li>
                </ol>
            </div>

            <div className="flex flex-col">
                <h1 className="font-black text-3x1">Contact</h1>
                <ol className="text-left">
                    <li>Contact</li>
                    <li>Contact</li>
                    <li>Contact</li>
                </ol>
            </div>

            <div className="flex flex-col">
                <h1 className="font-black text-3x1">My</h1>
                <ol className="text-left">
                    <li>My</li>
                    <li>My</li>
                    <li>My</li>
                </ol>
            </div>
        </footer>
    )
}
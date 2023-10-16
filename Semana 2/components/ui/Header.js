import Image from 'next/image'



const Header = () => {

    return (
        <header className="w-full bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Image
                    src={"/coderhouse.svg"}
                    alt='Coderhouse logo'
                    width={200}
                    height={50}
                />

                <nav className="flex justify-between gap-2">
                    <a href="#" className="text-base text-slate-100 p-3">Enlace 1</a>
                    <a href="#" className="text-base text-slate-100 p-3">Enlace 2</a>
                    <a href="#" className="text-base text-slate-100 p-3">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
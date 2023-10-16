import Image from 'next/image'
import Link from 'next/link'
import CartWidget from './CartWidget'

const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/productos/todos"
    },
    {
        label: "Nosotros",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    },
    {
        label: "Posts",
        href: "/posts"
    },
]

const Header = () => {

    return (
        <header className="w-full bg-gray-600">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link href={"/"}>
                    <Image
                        src={"/coderhouse.svg"}
                        alt='Coderhouse logo'
                        width={200}
                        height={50}
                    />
                </Link>

                <nav className="flex justify-between gap-2">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                href={link.href}
                                className={`text-base text-slate-100 p-3 `}
                            >
                                {link.label}
                            </Link>
                        })                        
                    }

                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default Header

export default function ContactoLayout({children}) {

    return (
        <>
            {children}

            <footer className="bg-gray-200 w-full">
                <div className="container m-auto py-4 flex items-center gap-4">
                    <h4 className="text-2xl">Síguenos en nuestras redes!</h4>
                    <a>IG</a>
                    <a>LinkedIn</a>
                    <a>Twitter</a>
                </div>
            </footer>
        </>
    )
}
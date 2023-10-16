

"use client"
import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()

    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-blue-600 my-4">Página no encontrada</h1>
                <hr />
                <p className="text-base mt-4">La ruta a la que intenta acceder no existe</p>

                <Boton onClick={() => router.back()}>
                    Volver
                </Boton>
            </main>
        </>
    )
}
"use client"
import Boton from "@/components/ui/Boton"
import { useRouter } from "next/navigation"

export default function Nosotros() {
    const router = useRouter()

    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-blue-600 my-4">Nosotros</h1>
                <hr />
                <p className="text-base mt-4">SITIO EN CONSTRUCCIÓN</p>

                <Boton onClick={() => router.back()}>
                    Volver
                </Boton>
            </main>
        </>
    )
}
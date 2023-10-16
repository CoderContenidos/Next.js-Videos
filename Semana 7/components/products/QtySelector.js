"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "../context/CartContext"
import Link from "next/link"

const QtySelector = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart(item.slug)
                    ?   <Link
                            href={"/cart"}
                            className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                            Terminar mi compra
                        </Link>
                    :   <>
                            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
                        </>
            }
        </div>
    )
}

export default QtySelector
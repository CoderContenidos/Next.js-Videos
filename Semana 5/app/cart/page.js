"use client"

import CartItem from "@/components/cart/CartItem"
import { useCartContext } from "@/components/context/CartContext"

const CartPage = () => {
    const { cart } = useCartContext()

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>

            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>
        </main>
    )
}

export default CartPage
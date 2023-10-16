import { useCartContext } from "../context/CartContext"
import Boton from "../ui/Boton"
import Image from "next/image"

const CartItem = ({item}) => {
    const {removeItem} = useCartContext()

    return (
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
            <Image
                src={item.image}
                alt={item.title}
                width={80}                
                height={80}                
            />
            <div>
                <h3>{item.title}</h3>
                <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                <p className="text-sm">Cantidad: {item.quantity}</p>
            </div>

            <Boton onClick={() => removeItem(item.slug)} className="bg-red-600">
                <Image
                    src={'/icons/trash-icon.svg'}
                    alt="Trash icon"
                    width={30}
                    height={30}
                />
            </Boton>
        </li>
    )
}

export default CartItem
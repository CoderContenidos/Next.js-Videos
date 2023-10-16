import { mockData } from "@/data/products"
import ProductCard from "./ProductCard"

const ProductsList = ({ categoria }) => {

    const items = categoria === 'todos' ? mockData : mockData.filter(item => item.type === categoria)

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductsList
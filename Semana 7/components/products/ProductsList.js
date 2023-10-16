import ProductCard from "./ProductCard"

const ProductsList = async ({ categoria }) => {
  
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/${categoria}`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductsList
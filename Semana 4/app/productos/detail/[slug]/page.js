import ProductDetail from "@/components/products/ProductDetail"

const DetailPage = ({params}) => {
    const {slug} = params

    return (
        <main className="container m-auto mt-10">
            <ProductDetail slug={slug}/>
        </main>
    )
}

export default DetailPage
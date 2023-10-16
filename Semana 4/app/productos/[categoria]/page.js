import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `CoderApp - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />
                <ProductsList categoria={categoria}/>
            </div>
        </main>
    )
}

export default Productos
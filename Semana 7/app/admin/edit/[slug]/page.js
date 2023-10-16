import EditForm from "@/components/admin/EditForm"

const EditPage = async ({params}) => {
    const { slug } = params
   const item = await fetch(`http://${process.env.VERCEL_URL}/api/product/${slug}`, {
        cache: 'no-store'
    }).then(res => res.json())


    return (
        <div>
            <EditForm item={item}/>
        </div>
    )
}

export default EditPage
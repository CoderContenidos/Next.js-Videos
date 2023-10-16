
const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 0
        }
    })

    if (!response.ok) {
        throw new Error("Falló petición de posts")
    }

    return response.json()
}

const PostDetail = async ({params}) => {
    const { id } = params
    const post = await getPostById(id)

    return (
        <div className="container m-auto max-w-md">
            <h2 className="text-2xl">{post.title}</h2>
            <hr/>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail
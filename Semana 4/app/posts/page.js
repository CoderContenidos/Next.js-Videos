import Link from "next/link"

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
        cache: 'force-cache',
        next: {
            revalidate: 3600
        }
    } )

    if (!response.ok) {
        throw new Error("Falló petición de posts")
    }

    return response.json()
}

const Posts = async () => {
    const posts = await getPosts()

    return (
        <div className="container m-auto mt-6">
            <h1>Posts</h1>
            <hr />
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id} className="my-4 list-disc">
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts
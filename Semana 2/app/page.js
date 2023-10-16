import Counter from "/components/ui/Counter";
import Header from "/components/ui/Header";
import Image from "next/image";

export const metadata = {
  title: 'Coder App',
  description: 'App de muestra en Nextjs',
  keywords: ['Coderhouse', 'NextJS', 'Vercel', 'SSR'],
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['Coderhouse'],
  },
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  return {
    title: product.title,
    description: product.description
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 text-bold my-4">Next JS</h1>
        <hr />
        <p className="text-base mt-4">Bienvenidos a Coderhouse</p>

        <Counter />

        <Image 
          src={"/package.png"}
          alt="Package Image"
          width={300}
          height={300}
        />

        <Image 
          src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
          alt="Pikachu Image"
          width={200}
          height={200}
          priority
        />
      </main>
    </>
  )
}

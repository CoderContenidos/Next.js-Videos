
export const metadata = {
  title: 'Coder App',
  description: 'App de muestra en Nextjs',
  keywords: ['Coderhouse', 'NextJS', 'Vercel', 'SSR'],
}

export default function Home() {
  return (
    <>
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 my-4">Next JS</h1>
        <hr />
        <p className="text-base mt-4">Bienvenidos a Coderhouse</p>

      </main>
    </>
  )
}

'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Algo no salió bien!</h2>
        <button onClick={() => reset()}>Recargar</button>
      </body>
    </html>
  )
}

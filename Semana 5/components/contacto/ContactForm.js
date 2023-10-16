"use client"
import { useState } from "react"
import Boton from "../ui/Boton"


const ContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        text: ''
    })

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
     }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:3000/api/contacto', {
            method: 'POST',
            body: JSON.stringify(values)
        })
    }

    return (
        <form onSubmit={handleSubmit} className="my-12">
            <input
                type="email"
                required
                placeholder="Tu email"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="email"
                onChange={handleChange}
            />
            <textarea
                required
                placeholder="Déjanos un mensaje"
                className="resize-none w-1/2 h-24 p-2 rounded border block border-blue-100 my-4"
                name="text"
                onChange={handleChange}
            />

            <Boton type="submit">Enviar</Boton>
        </form>
    )
}

export default ContactForm
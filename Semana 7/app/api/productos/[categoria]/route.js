import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config"

export async function GET(_, { params }) {
    const { categoria } = params
    const productosRef = collection(db, "productos")
    const q = categoria === 'todos' 
                ? productosRef
                : query(productosRef, where('type', '==', categoria))
    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)
}
import { NextResponse } from "next/server"
import { mockData } from "@/data/products"

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(request, { params }) {
    const { categoria } = params
    const data = categoria === 'todos' ? mockData : mockData.filter(item => item.type === categoria)

    await sleep(1000)

    return NextResponse.json(data)
}
import { mockData } from "@/data/products"
import { NextResponse } from "next/server"

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(_, { params }) {
    const { slug } = params
    const data = mockData.find(product => product.slug === slug)

    await sleep(1000)

    return NextResponse.json(data)
}
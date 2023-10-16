import { NextResponse } from "next/server"


export async function POST(request) {
    const formData = await request.json()
    console.log(formData)

    return NextResponse.json("Data received OK")
}
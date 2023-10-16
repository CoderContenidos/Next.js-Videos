import Image from "next/image"

const Loading = () => {

    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <Image
                src={'/vercel.svg'}
                alt="Vercel logo"
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    )
}

export default Loading
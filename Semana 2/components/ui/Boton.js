
const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`rounded-xl py-2 px-4 bg-blue-400 text-white text-center ${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton
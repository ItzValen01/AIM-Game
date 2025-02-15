const Button = ({ text, id, width, height, onClick }) => {
    return (
        <>
            <button id={id} style={{
                transition: 'all 0.6s',
                width: width,
                height: height
            }}
                className="rounded-[20px] bg-[#ffc31f] text-[#816a29] font-semibold mt-[30px] 
                    hover:text-[#ffc31f] hover:bg-[#816a29]"
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}

export default Button;
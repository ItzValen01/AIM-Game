const SpecialButton = ({ icon, href }) => {
    return (
        <>
            <a href={href} target="_blank"
                className="p-[10px] rounded-[50%]
                hover:drop-shadow-[0_0_35px_rgba(71,67,67)] hover:bg-[#333232]"
                style={{ transition: 'all 0.6s' }}
            >
                {icon}
            </a>
        </>
    );
}

export default SpecialButton;
const TimeButton = ({ time, isActive, onClick }) => {
    return (
        <>
          <button
            onClick={onClick}
            className={`w-[70px] h-[50px] rounded-lg text-white font-semibold ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}
        >{time}</button>
        </>
    );
};

export default TimeButton;
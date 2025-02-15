import TimeButton from "./TimeButton";

const MainMenu = ({ startGame, handleChangeTime, time }) => {
    const timeValues =
        [
            5, 10, 15, 20,
            25, 30, 35, 40,
            45
        ];

    return (
        <>
            <div id="menu" className="relative flex items-center justify-center h-screen">
                <div className="flex flex-col items-center w-[400px] h-[500px] bg-[#646161] rounded-[20px]">
                    <button id="start" style={{ transition: 'all 0.6s' }} onClick={startGame}
                        className="w-[150px] h-[50px] rounded-[20px] bg-[#ffc31f] text-[#816a29] font-semibold mt-[30px] 
                    hover:text-[#ffc31f] hover:bg-[#816a29]"
                    >Start Game</button>


                    <div className="mt-[50px] flex items-center justify-center w-[350px] h-[340px] rounded-[20px] bg-[#b4aeae]">
                        <div className="w-[310px] h-[300px] flex flex-row flex-wrap gap-[20px] justify-center items-center">
                            {timeValues.map((value) => (
                                <TimeButton
                                    key={value}
                                    time={value}
                                    isActive={time === value}
                                    onClick={() => handleChangeTime(value)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainMenu;
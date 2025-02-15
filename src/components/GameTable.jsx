import PlayInfo from "./PlayInfo";

const GameTable = ({ timeLeft, clicks, addClick}) => {
    return (
        <>
            <div id="gameTable" hidden>
                <div id="gameCont" className="flex flex-col min-h-screen">
                    <PlayInfo timeLeft={timeLeft} clicks={clicks} />

                    <div id="background" className="w-full flex-grow bg-[#abf07d]">
                        <div id="aim" onClick={addClick} className="w-[50px] h-[50px] bg-[#ff1d1d] rounded-[50%] relative"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameTable;
const PlayInfo = ({ timeLeft, clicks }) => {
    return (
        <>
            <div id="gInfo" className="flex" hidden>
                <p id="timeR" className="text-[#ffffff] text-[40px] text-left font-semibold mr-[400px]" hidden>Time Remaining: {timeLeft}s</p>

                <p id="counter" className="text-[#ffffff] text-[50px] font-semibold text-center" hidden>{clicks}</p>
            </div>
        </>
    )
}

export default PlayInfo;
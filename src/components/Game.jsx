import { useState } from "react"
import MainMenu from "./MainMenu";
import GameTable from "./GameTable";
import FinishMenu from "./FinishMenu";

export default function Counter() {
    const [clicks, setClicks] = useState(0);
    const [finished, setFinish] = useState(false);
    const [time, setTime] = useState(5);
    let timeLeft = 0;

    function startGame() {
        setFinish(false);
        timeLeft = time;
        document.getElementById("timeR").textContent = `Time Remaining: ${timeLeft}s`;

        document.getElementById("menu").style.display = "none";

        document.getElementById("gInfo").hidden = false;
        document.getElementById("timeR").hidden = false;
        document.getElementById("counter").hidden = false;

        document.getElementById("gameTable").hidden = false;

        randomPosition();
        startTimer();
    }

    function addClick() {
        setClicks(clicks + 1);
        randomPosition();
    }

    function randomPosition() {
        const bgWidth = document.getElementById("background").offsetWidth;
        const bgHeight = document.getElementById("background").offsetHeight;
        const aimWidth = document.getElementById("aim").offsetWidth;
        const aimHeight = document.getElementById("aim").offsetHeight;

        const top = Math.random() * ((bgHeight - 50) - aimHeight);
        const left = Math.random() * ((bgWidth - 50) - aimWidth);

        document.getElementById("aim").style.top = top + "px";
        document.getElementById("aim").style.left = left + "px";
    }

    function startTimer() {
        let countdown;

        countdown = setInterval(() => {
            if (timeLeft <= 0) {
                finish();
                clearInterval(countdown);
            } else {
                timeLeft--;
                document.getElementById("timeR").textContent = `Time Remaining: ${timeLeft}s`;
            }
        }, 1000);
    }

    const handleChangeTime = (newTime) => {
        setTime(newTime);
    }

    function finish() {
        setFinish(true)

        document.getElementById("gInfo").hidden = true;
        document.getElementById("timeR").hidden = true;
        document.getElementById("counter").hidden = true;

        document.getElementById("gameTable").hidden = true;

    }

    function restartGame() {
        document.getElementById("menu").style.display = "flex";

        document.getElementById("gInfo").hidden = true;
        document.getElementById("timeR").hidden = true;
        document.getElementById("counter").hidden = true;

        document.getElementById("gameTable").hidden = true;

        document.getElementById("menuF").hidden = true;

        setClicks(0);
        setFinish(false);
    }

    return (
        <>
            <MainMenu
                startGame={startGame}
                handleChangeTime={handleChangeTime}
                time={time}
            />

            <GameTable timeLeft={timeLeft} clicks={clicks} addClick={addClick} />

            {finished && (
                <FinishMenu clicks={clicks} time={time} restartGame={restartGame} />
            )}
        </>
    );
}
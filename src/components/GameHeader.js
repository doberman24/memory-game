import Progress from "./Progress";

function GameHeader ({value, max, stepsCount}) {
    return (
        <>
            <Progress value={value} max={max}/>
            <p className="progress-description">Открыто <span>{value / 2}</span> / <span>6</span></p>
            <p className='steps'>Шаг {stepsCount}</p>
        </>
    )
}

export default GameHeader;
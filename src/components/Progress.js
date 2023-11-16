function Progress({value, max}) {
    return (
        <>
            <div className="progress-wrapper">
                <div className="progress" style={{width: `${value / max * 100}%`}}></div>
            </div>
        </>
    )
}

export default Progress;
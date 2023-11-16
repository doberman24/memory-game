function ResultPage({results, current, onClickReset}) {
    const sortedResults = [
        ...results, 
        {name: 'Ваш результат', stepsCount: current}
    ].sort((a, b) => a.stepsCount - b.stepsCount)
    const resultsTable = sortedResults.map(({name, stepsCount}, index) => {
        return (
            <tr key={index} className={`result-table-row ${stepsCount === current ? 'active' : ''}`}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{stepsCount}</td>
            </tr>
        )
    });

    return (
        <section className="result container">
        <h2>Лучшие результаты:</h2>
        <p>Вы завершили игру за <b>{current} шагов</b>, так держать!</p>
        <table className="result-table">
          <thead>
          <tr className="result-table-row">
            <th>Место</th>
            <th>Имя</th>
            <th>Шаги</th>
          </tr>
          </thead>
          <tbody>
            {resultsTable}
          </tbody>
        </table>
        <p>Хотите попробовать ещё раз?</p>
        <button onClick={onClickReset} className="button result-button" type="button">Новая игра</button>
      </section>
    
    )
}

export default ResultPage;
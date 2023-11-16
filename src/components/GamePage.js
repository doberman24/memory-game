import Grid from "./Grid";
import Modal from "./Modal";
import LogicGame from "./game/LogicGame";
import GameHeader from "./GameHeader";

function GamePage({images, onShowResults}) {

    const {
      finishCards,
      stepsCount,
      isGameOver,
      steps,
      isWin
    } = LogicGame(images);
  
    const modalType = isWin ? '' : 'modal-box-defeat';
    const modalCaption = isWin ? 'Победа!' : 'Поражение.'
    const modalDescription = isWin ? `Вы собрали все пары за ${stepsCount} шагов` :
                                     `Вы собрали всего ${finishCards.length / 2} пар`;
  
    const clickShowResults = () => {
      onShowResults(stepsCount);
    }
    return (
      <section className="game container">
        <GameHeader value={finishCards.length} max={images.length} stepsCount={stepsCount}/>
        <Grid images={images} finishCards={finishCards} steps={steps}/>
        {isGameOver && (
  
        <Modal className={modalType}>
          <h3 className="modal-caption">{modalCaption}</h3>
            <p className="modal-description">{modalDescription}</p>
            <button onClick={clickShowResults} className="button modal-button" type="button">Результаты</button>
        </Modal>
        )}
  
      </section>
    );
  }
  
  export default GamePage;
  
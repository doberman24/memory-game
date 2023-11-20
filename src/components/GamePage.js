import Grid from "./Grid";
import Modal from "./Modal";
import LogicGame from "./game/LogicGame";
import GameHeader from "./GameHeader";
import getDeclension from '@dubaua/get-declension';

function GamePage({images, backCards, onShowResults}) {

    const {
      finishCards,
      stepsCount,
      isGameOver,
      steps,
      isWin
    } = LogicGame(images);

    const wordsDeclension = getDeclension({
      count: finishCards.length / 2, 
      one: 'пара', 
      few: 'пары', 
      many: 'пар'
    });

  
    const modalType = isWin ? '' : 'modal-box-defeat';
    const modalCaption = isWin ? 'Победа!' : 'Вы проиграли!'
    const modalDescription = isWin ? `Вы собрали все пары за ${stepsCount} шагов` :
                                     `Вы собрали всего ${wordsDeclension}`;

    const clickShowResults = () => {
      onShowResults(stepsCount);
    }
    return (
      <section className="game container">
        <GameHeader value={finishCards.length} max={images.length} stepsCount={stepsCount}/>
        <Grid images={images} backCards={backCards} finishCards={finishCards} steps={steps}/>
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
  
import { LIVES_COUNT } from './settings';
import { useState } from 'react';

const LogicGame = (images) => {
    const [finishCards, setFinishCard] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);
  
    const steps = (firstId, secondId) => {
      const firstCard = images.find(({id}) => id === firstId);
      const secondcard = images.find(({id}) => id === secondId);
      if (firstCard.url === secondcard.url) {
        setFinishCard(card => [...card, firstId, secondId])
  
      }
      setStepsCount(item => item + 1);
    };
  
    const clickReset = () => {
      setFinishCard([]);
      setStepsCount(0);
    }
  
    const errorsCount = stepsCount - finishCards.length / 2;
    const lives = LIVES_COUNT - errorsCount;
    const isWin = finishCards.length === images.length
    const isGameOver = isWin || lives === 0;

    return {
        finishCards,
        stepsCount,
        clickReset,
        isGameOver,
        steps,
        isWin
    };
}

export default LogicGame;
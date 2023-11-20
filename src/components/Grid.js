import { useState } from "react";
import Card from "./Card";
import { TIMEOUT } from "./game/settings";

function Grid({images, backCards, finishCards, steps}) {

    const [showCards, setShowCards] = useState([]);

    const cardClick = (id) => {
        if(showCards.includes(id)) {
            return;
        }
        switch (showCards.length) {
            case 0:
            case 2:
                setShowCards([id]);
                break;
            case 1:
                setShowCards(selected => [...selected, id]);
                steps(showCards[0], id);
                setTimeout(() => {
                    setShowCards([]);
                }, TIMEOUT);
                break;
            default:
                setShowCards([]);
        }
    };

    const cards = images.map(item => (
      <Card 
        key={item.id}
        params={item}
        isShowCards={showCards.includes(item.id)}
        isfinishCards={finishCards.includes(item.id)}
        onCardClick={cardClick}
      />
    ));
  
    return (
        <ul className={`cards cards-theme-${backCards}`}>
            {cards}
        </ul>
    );
  }
  
  export default Grid
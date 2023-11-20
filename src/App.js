import { useState } from 'react';
import StartPage from './components/StartPage';
import GamePage from './components/GamePage';
import ResultPage from './components/ResultPage';
import { AppRout } from './components/game/settings';
import { getImages } from './data/data';
import './css/style.css';

function App({results}) {

  const [page, setPage] = useState(AppRout.Start);
  const [result, setResult] = useState(0);
  const [images, setImages] = useState([]);
  const [backCards, setBackCards] = useState(null);

  const showResults = (imagesCount) => {
    setResult(imagesCount);
    setPage(AppRout.Results);
  }

  const clickReset = () => {
    setPage(AppRout.Start);
  }
  const clickStartButton = (type) => {
    const selectImages = getImages(type);
    setImages(selectImages);
    setBackCards(type)
    setPage(AppRout.Game);
}

  const getPage = (route) => {
    switch (route) {
      case AppRout.Start:
        return <StartPage onStart={clickStartButton}/>
      case AppRout.Game:
        return <GamePage images={images} backCards={backCards} onShowResults={showResults}/>;
      case AppRout.Results:
        return (
          <ResultPage 
            current={result} 
            results={results} 
            onClickReset={clickReset}
          />
        );  
      default:
        return null;
    }
  };
  return getPage(page);
}

export default App;

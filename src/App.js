import { useState } from 'react';
import GamePage from './components/GamePage';
import ResultPage from './components/ResultPage';
import { AppRout } from './components/game/settings';
import './css/style.css';

function App({images, results}) {
  const [page, setPage] = useState(AppRout.Game);
  const [result, setResult] = useState(0);

  const showResults = (imagesCount) => {
    setResult(imagesCount);
    setPage(AppRout.Results);
  }

  const clickReset = () => {
    setPage(AppRout.Game);
  }

  const getPage = (route) => {
    switch (route) {
      case AppRout.Game:
        return <GamePage images={images} onShowResults={showResults}/>;
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

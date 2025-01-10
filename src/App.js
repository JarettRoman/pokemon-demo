import { useState } from 'react';
import RandomPokemon from './components/RandomPokemon';
import Score from './components/Score';
import './App.css';

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0);
  }

  return (
    <div className="App">
      <h1>Who's That Pokémon?</h1>
      <Score score={score} />
      <button onClick={() => setIsCorrect(!isCorrect)}>
        Toggle Silhouette
      </button>

      <RandomPokemon
        isCorrect={isCorrect}
        setCurrentPokemon={setCurrentPokemon}
        setIsCorrect={setIsCorrect}
      />
    </div>
  );
}

export default App;

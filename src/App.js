import { useState } from 'react';
import RandomPokemon from './components/RandomPokemon';
import FormInput from './components/FormInput';
import Score from './components/Score';
import './App.css';

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState('');
  const [score, setScore] = useState(0);

  const handleGuess = (guess) => {
    if (guess.toLowerCase() === currentPokemon.toLowerCase()) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setScore(0);
      setIsCorrect(false);
    }
  };

  return (
    <div className="App">
      <h1>Who's That Pokémon?</h1>
      <Score score={score} />
      {/* <button onClick={() => setIsCorrect(!isCorrect)}>
        Toggle Silhouette
      </button> */}

      <RandomPokemon
        isCorrect={isCorrect}
        setCurrentPokemon={setCurrentPokemon}
        setIsCorrect={setIsCorrect}
      />
      <FormInput
        onGuess={handleGuess}
        isCorrect={isCorrect} 
      />
    </div>
  );
}

export default App;

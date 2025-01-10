import { useState } from 'react';
import RandomPokemon from './components/RandomPokemon';
import './App.css';

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState('');

  console.log('Current Pokemon:', currentPokemon);

  return (
    <div className="App">
      <h1>Who's That Pokémon?</h1>
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

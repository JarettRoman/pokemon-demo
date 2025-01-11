import { useState, useEffect } from 'react';
import './RandomPokemon.css';

function RandomPokemon({ isCorrect, setCurrentPokemon, setIsCorrect }) {
	const [pokemonImage, setPokemonImage] = useState(null);

	const fetchRandomPokemon = async () => {
		try {
			const randomId = Math.floor(Math.random() * 151) + 1;
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
			const data = await response.json();
			
			const img = new Image();
			img.src = data.sprites.front_default;
			img.onload = () => {
				setPokemonImage(img.src);
				setCurrentPokemon(data.name);
			};
		} catch (error) {
			console.error('Error fetching Pokemon:', error);
		}
	};

	useEffect(() => {
		fetchRandomPokemon();
	}, []);

	const handleNext = () => {
		setPokemonImage(null);
		setIsCorrect(false);
		fetchRandomPokemon();
	};

	return (
		<div className="random-pokemon">
			<img
				src={pokemonImage}
				alt="Loading..."
				className={isCorrect ? 'pokemon-image' : 'pokemon-image silhouette'}
			/>
			{isCorrect && (
				<>
					<br />
					<button autoFocus onClick={handleNext} className="next-button">
						Next Pokémon
					</button>
				</>
			)}
		</div>
	);
};


export default RandomPokemon;
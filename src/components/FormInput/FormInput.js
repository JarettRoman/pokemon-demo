import { useState } from 'react';
import './FormInput.css';

function FormInput({ onGuess, isCorrect }) {
	const [guess, setGuess] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (guess.trim()) {
			onGuess(guess);
			setGuess('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<input
				type="text"
				value={guess}
				onChange={(e) => setGuess(e.target.value)}
				placeholder="Enter Pokemon Name"
				disabled={isCorrect}
				className="form-input"
			/>
			<button type="submit" className="form-button" disabled={isCorrect || !guess.trim()}>
				Guess
			</button>
		</form>
	);
}

export default FormInput;
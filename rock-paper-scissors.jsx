// RockPaperScissors.jsx
import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

const getResult = (user, computer) => {
  if (user === computer) return 'Its a draw!';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) return 'You win!';
  return 'You lose!';
};

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const outcome = getResult(choice, compChoice);

    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(outcome);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Rock Paper Scissors</h1>
      <div className="flex gap-4 mb-6">
        {choices.map((choice) => (
          <button
            key={choice}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => handleClick(choice)}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="text-center">
          <p>You chose: <strong>{userChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p className="text-xl mt-2 font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
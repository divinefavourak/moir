import React, { useState } from 'react';

const choices = ['rock', 'paper', 'scissors'];

const getResult = (user, computer) => {
  if (user === computer) return 'It\'s a draw!';
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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)} style={{ margin: '10px', padding: '10px 20px' }}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      {userChoice && (
        <div>
          <p>You chose: <strong>{userChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p><strong>{result}</strong></p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
// This code defines a simple Rock Paper Scissors game using React.
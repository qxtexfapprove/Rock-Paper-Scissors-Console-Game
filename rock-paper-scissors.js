// Rock, Paper, Scissors Game - Play against the computer in the console

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  }
  return 'You lose!';
}

// To play, call playGame('rock'), playGame('paper'), or playGame('scissors')
function playGame(playerChoice) {
  const validChoices = ['rock', 'paper', 'scissors'];
  const player = playerChoice.toLowerCase();
  if (!validChoices.includes(player)) {
    console.log('Invalid choice! Please choose rock, paper, or scissors.');
    return;
  }
  const computer = getComputerChoice();
  console.log(`You chose: ${player}`);
  console.log(`Computer chose: ${computer}`);
  const result = getResult(player, computer);
  console.log(result);
}

// Example usage:
playGame('rock');
// To play again, call playGame with your choice as a string

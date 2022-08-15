function getComputerChoice() {
  // randomly return either 'Rock', 'Paper' or 'Scissors'
  const choices = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "You Lose! Rock beats Scissors";
  }
}

for (let i = 0; i < 5; i++) {
  console.log(game(), i)
}

function game() {
  let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
  return playRound(playerSelection, computerSelection);
}


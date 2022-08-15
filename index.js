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

function winOrLose(wins, loses) {
  if (wins == loses) {
    return "Draw!";
  } else if (wins > loses) {
    return "You beat the Computer!";
   } else {
     return "You lost!";
   }

}

function game() {
  let wins = 0;
  let loses = 0;

  for (let i = 0; i < 5; i++) {
    if( wins == 3 || loses == 3) {
      break;
     } else {
      let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      console.log(playerSelection, computerSelection,  result,  i) ; 

      if (result.substring(0, 8) === "You Win!"){
        wins++;
      } else if (result.substring(0, 9) === "You Lose!"){
        loses++;
      }  
    }
    console.log(`Wins:${wins}, Loses:${loses}`)  
  }
  console.log(winOrLose(wins, loses));
}

game();

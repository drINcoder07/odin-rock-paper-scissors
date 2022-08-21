// PLAYER SELECTION
let playerSelection;

let btnRockPlayer = document.getElementById('btn-Rock-player');
btnRockPlayer.addEventListener('click', () => {
  playerSelection = 'rock';
  console.log(`Rock Player Button clicked! Player Selection: ${playerSelection}`);
});
let btnPaperPlayer = document.getElementById('btn-Paper-player');
btnPaperPlayer.addEventListener('click', () => {
  playerSelection = 'paper';
  console.log(`Paper Player Button clicked! Player Selection: ${playerSelection}`)
});
let btnScissorsPlayer = document.getElementById('btn-Scissors-player');
btnScissorsPlayer.addEventListener('click', () => {
  playerSelection = 'scissors';
  console.log(`Scissors Player Button clicked! Player Selection: ${playerSelection}`)
});


// COMPUTER SELECTION
let computerSelection;

let btnRockComp = document.getElementById('btn-Rock-comp')
let btnPlayerComp = document.getElementById('btn-Player-comp')
let btnScissorsComp = document.getElementById('btn-Scissors-comp')


// SCORES
let winsPlayer = 0;
let winsComp = 0;
let playerScore = document.getElementById('score-player');
let compScore = document.getElementById('score-comp');


function getComputerChoice() {
  // randomly return either 'Rock', 'Paper' or 'Scissors'
  const choices = ['rock', 'paper', 'scissors'];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}



// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "Draw!";
//   } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//     return "You Win! Paper beats Rock";
//   } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     return "You Win! Scissors beats Paper";
//   } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//     return "You Win! Rock beats Scissors";
//   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//     return "You Lose! Paper beats Rock";
//   } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//     return "You Lose! Scissors beats Paper";
//   } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     return "You Lose! Rock beats Scissors";
//   }
// }

// function winOrLose(wins, loses) {
//   if (wins == loses) {
//     return "Draw!";
//   } else if (wins > loses) {
//     return "You beat the Computer!";
//    } else {
//      return "You lost!";
//    }

// }

// function game() {
//   let wins = 0;
//   let loses = 0;

//   for (let i = 1; i < 6; i++) {
//     if( wins == 3 || loses == 3) {
//       break;
//      } else {
//       // if there are no chances to win :(
//       if ((6- i) < (wins - loses) || (6- i) < (loses- wins)) {
//         break;
//       }

//       let playerSelection = prompt("Rock, paper or scissors?").toLowerCase(); 
//       let computerSelection = getComputerChoice();
//       let result = playRound(playerSelection, computerSelection);
//       console.log(playerSelection, computerSelection,  result,  i) ; 

//       // increments wins and loses
//       if (result.substring(0, 8) === "You Win!"){
//         wins++;
//       } else if (result.substring(0, 9) === "You Lose!"){
//         loses++;
//       }  
//      }
//     console.log(`Wins:${wins}, Loses:${loses}`)  
//   }
//   console.log(winOrLose(wins, loses));
// }

// game();

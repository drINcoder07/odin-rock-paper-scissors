const RockPlayer = document.getElementById('btn-Rock-player');
const PaperPlayer = document.getElementById('btn-Paper-player');
const ScissorsPlayer = document.getElementById('btn-Scissors-player');
const RockComp = document.getElementById('btn-Rock-comp');
const PaperComp = document.getElementById('btn-Paper-comp');
const ScissorsComp = document.getElementById('btn-Scissors-comp');
const popUpbuttons = document.getElementById('btn-popup');
let showResult = document.createElement('div');
showResult.style.fontSize = "1.25rem";
showResult.style.marginBottom = ".5em";
showResult.style.fontFamily = "'Indie Flower', cursive";
const restart = document.createElement('button');
popUpbuttons.append(showResult, restart);
restart.addEventListener('click', () => {
  window.location.reload(true);
})
let playerScore = document.getElementById('score-player');
let computerScore = document.getElementById('score-comp');
let playerWins = 0;
let computerWins = 0;
const choices = ['rock', 'paper', 'scissors'];

// FUNCTIONS
function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function showPlayerSelected(playerSelection) {
  if (playerSelection == 'rock') {
    RockPlayer.classList.add('clicked'); 
  } else if (playerSelection == 'paper') {
    PaperPlayer.classList.add('clicked');
  } else {
    ScissorsPlayer.classList.add('clicked')
  }
}

function showComputerSelected(computerSelection) {
  if (computerSelection == 'rock') {
    RockComp.classList.add('clicked'); 
  } else if (computerSelection == 'paper') {
    PaperComp.classList.add('clicked');
  } else {
    ScissorsComp.classList.add('clicked')
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('clicked');
  console.log(e);
}

function returnOrigPosition() {
  let btnsPlayer = document.querySelectorAll('.btn');
  btnsPlayer.forEach(btn => btn.addEventListener('transitionend', removeTransition))
}

function removeComputerhighlights() {
  let btnsPlayer = document.querySelectorAll('.btn');
  btnsPlayer.forEach(btn => {
    btn.classList.remove('clicked');
  })
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'Draw!';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You Win! Rock beats Scissors!';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You Win! Paper beats Rock!';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You Win! Scissors beats Paper!';
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    return 'You Lose! Rock beats Scissors!';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return 'You Lose! Paper beats Rock!';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    return 'You Lose! Scissors beats Paper!';
  }
}

function addPlayerWins() {
  playerWins++;
  playerScore.textContent = playerWins;
}

function addComputerWins() {
  computerWins++;
  computerScore.textContent = computerWins;
}

function verifyResult(result) {
  if (result.substring(0, 8) === 'You Win!') {
    addPlayerWins();
  } else if (result.substring(0, 9) === 'You Lose!') {
    addComputerWins();
  }
}

function stopClicks() {
  let btnsPlayer = document.querySelectorAll('.btn');
  btnsPlayer.forEach(btn => {
    btn.classList.remove('clicked');
    btn.setAttribute('disabled', '');
    btn.style.filter = 'opacity(70%)';
  })
}

function stopGame(playerWins, computerWins) {
  stopClicks()
  finalResult(playerWins, computerWins);
  restart.textContent = "CLICK TO RESTART GAME";
  restart.setAttribute('style', 'padding: .75rem; background-color: #ffc600; outline: none; border: none; margin-bottom: 1em');
}

function finalResult(playerWins, computerWins) {
  if (playerWins > computerWins) {
    showResult.textContent = 'YOU WIN! CONGRATULATIONS!';
  } else {
    showResult.textContent = 'YOU LOST!';
  }
}

function game(playerSelection) {

  if (playerWins == 5 || computerWins == 5) {
    stopGame(playerWins, computerWins);
  }

  removeComputerhighlights();
  const computerSelection = getComputerChoice();
  showPlayerSelected(playerSelection);
  showComputerSelected(computerSelection);
  returnOrigPosition();
  let result = playRound(playerSelection, computerSelection);
  showResult.textContent = result;
  verifyResult(result);
  console.log(result);

  if (playerWins == 5 || computerWins == 5) {
    stopGame(playerWins, computerWins);
  }
}

RockPlayer.addEventListener('click', () => {
  game('rock')
});
PaperPlayer.addEventListener('click', () => {
  game('paper')
});
ScissorsPlayer.addEventListener('click', () => {
  game('scissors')
});

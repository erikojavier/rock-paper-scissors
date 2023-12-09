let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(playerChoice, computerChoice);

    updateScore(result);
    displayResult(playerChoice, computerChoice, result);

    if (playerScore === 5 || computerScore === 5) {
        showWinner();
        resetGame();
      }
    }

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    }

function displayResult(playerChoice, computerChoice, result) {
    const resultMessage = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    document.getElementById('result').innerText = resultMessage;
}

function showWinner() {
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    const gameWinner = document.getElementById('gameWinner');
    gameWinner.innerText = `${winner} wins the game!`;
    gameWinner.style.display = 'block';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
}









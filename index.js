console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;

const playerScore = document.querySelector(".player-score");
const computerTotalScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let randomChoice = null;
  if (randomNumber === 1) {
    randomChoice = "scissors";
  } else if (randomNumber === 2) {
    randomChoice = "paper";
  } else {
    randomChoice = "rock";
  }

  return randomChoice;
};

// function getHumanChoice() {
//   let humanChoice = prompt("Select one: scissors, paper, or rock");
//   if (
//     humanChoice.toLowerCase() == "scissors" ||
//     humanChoice.toLowerCase() == "paper" ||
//     humanChoice.toLowerCase() == "rock"
//   ) {
//     return humanChoice.toLowerCase();
//   } else {
//     return "Invalid Choice! Select from scissors, paper or rock only!";
//   }
// }

const playRound = (humanSelection, computerSelection) => {
  if (humanSelection === "scissors" && computerSelection === "scissors") {
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "It's a Draw!";
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    humanScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Human wins!";
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Computer wins!";
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "It's a Draw!";
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Computer wins!";
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    humanScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Human wins!";
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "It's a Draw!";
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Computer wins! ";
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    humanScore += 1;
    result.textContent =
      `Human: ${humanSelection} Computer: ${computerSelection} | ` +
      "Human wins!";
  } else {
    result.textContent = "Not a valid Round";
  }

  if (humanScore === 5) {
    result.textContent = "Human Wins! Scores will be reset to 0";
    humanScore = 0;
    computerScore = 0;
  }

  if (computerScore === 5) {
    result.textContent = "Computer Wins! Scores will be reset to 0";
    humanScore = 0;
    computerScore = 0;
  }

  playerScore.textContent = `Player Score: ${humanScore}`;
  computerTotalScore.textContent = `Computer Score: ${computerScore}`;
};

// const playGame = () => {
//   humanScore = 0;
//   computerScore = 0;
//   // for (let i = 0; i < 5; i++) {
//   // 	playRound(getHumanChoice(), getComputerChoice());
//   // }

//   if (humanScore === computerScore) {
//     console.log("It's a Tie! No one wins the game!");
//   } else if (humanScore > computerScore) {
//     console.log("Human wins the game!");
//   } else {
//     console.log("Computer wins the game!");
//   }
// };

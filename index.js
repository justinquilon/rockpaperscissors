console.log('Hello World!');

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	let randomChoice = null;
	if (randomNumber === 1) {
		randomChoice = 'scissors';
	} else if (randomNumber === 2) {
		randomChoice = 'paper';
	} else {
		randomChoice = 'rock';
	}

	return randomChoice;
};

function getHumanChoice() {
	let humanChoice = prompt('Select one: scissors, paper, or rock');
	if (
		humanChoice.toLowerCase() == 'scissors' ||
		humanChoice.toLowerCase() == 'paper' ||
		humanChoice.toLowerCase() == 'rock'
	) {
		return humanChoice.toLowerCase();
	} else {
		return 'Invalid Choice! Select from scissors, paper or rock only!';
	}
}

const playRound = (humanSelection, computerSelection) => {
	if (humanSelection === 'scissors' && computerSelection === 'scissors') {
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				"It's a Draw! " +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'scissors' && computerSelection === 'paper') {
		humanScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Human wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'scissors' && computerSelection === 'rock') {
		computerScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Computer wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore} `
		);
	} else if (humanSelection === 'paper' && computerSelection === 'paper') {
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				"It's a Draw! " +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'paper' && computerSelection === 'scissors') {
		computerScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Computer wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'paper' && computerSelection === 'rock') {
		humanScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Human wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'rock' && computerSelection === 'rock') {
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				"It's a Draw! " +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'rock' && computerSelection === 'paper') {
		computerScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Computer wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else if (humanSelection === 'rock' && computerSelection === 'scissors') {
		humanScore += 1;
		console.log(
			`Human: ${humanSelection} Computer: ${computerSelection} | ` +
				'Human wins! ' +
				`Score Human: ${humanScore} Computer: ${computerScore}`
		);
	} else {
		console.log('Not a valid Round');
	}
};

const playGame = () => {
	humanScore = 0;
	computerScore = 0;
	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	if (humanScore === computerScore) {
		console.log("It's a Tie! No one wins the game!");
	} else if (humanScore > computerScore) {
		console.log('Human wins the game!');
	} else {
		console.log('Computer wins the game!');
	}
};

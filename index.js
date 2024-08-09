// console.log("Hello");
let humanScore = 0;
let computerScore = 0;
//to get computer choice: function definition below
function getComputerChoice() {
  let randomNumber = Math.random() * 10;
  if (randomNumber < 3.3333) {
    return "Rock";
  } else if (randomNumber < 6.6666) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// console.log(getComputerChoice());
//to get human choice:  function definition below
function getHumanChoice() {
  let choice = prompt("Rock,Paper or Scissors?");
  if ("rock" == choice.toLowerCase()) {
    return "Rock";
  } else if ("paper" == choice.toLowerCase()) {
    return "Paper";
  } else if ("scissors" == choice.toLowerCase()) {
    return "Scissors";
  } else {
    return "Wrong Choice";
  }
}
// console.log(getHumanChoice());

//Function Definition below for playing rounds
function playRound(computerChoice, humanChoice) {
  console.log("The computer chose:", computerChoice);
  console.log("You chose:", humanChoice);
  if (computerChoice == "Rock" && humanChoice == "Scissors") {
    console.log("Rock beats Scissors, computer wins this round");
    computerScore++;
  } else if (computerChoice == "Rock" && humanChoice == "Paper") {
    console.log("Paper beats Rock, you win this round");
    humanScore++;
  } else if (computerChoice == "Rock" && humanChoice == "Rock") {
    console.log("It is a draw!");
  } else if (computerChoice == "Paper" && humanChoice == "Rock") {
    console.log("Paper beats Rock, computer wins this round");
    computerScore++;
  } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
    console.log("Scissors beats Paper, you win this round");
    humanScore++;
  } else if (computerChoice == "Paper" && humanChoice == "Paper") {
    console.log("It is a draw!");
  } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
    console.log("Rock beats Scissors, you win this round");
    humanScore++;
  } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
    console.log("Scissors beats Paper, computer wins this round");
    computerScore++;
  } else {
    console.log("It is a draw!");
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection != "Wrong Choice") {
      //Function call below
      playRound(computerSelection, humanSelection);
      console.log("=========================================");
    } else {
      alert("You entered a wrong choice, reload the game to play again");
      break;
    }
  }
  let winner =
    computerScore > humanScore
      ? "Computer"
      : computerScore == humanScore
      ? "No Winner"
      : "You";
  if (winner != "No Winner") {
    let loser = winner == "Computer" ? "You" : "Computer";
    let scorediff = Math.abs(computerScore - humanScore);
    console.log(
      `After all 5 rounds, the clear winner of the game is ${winner}. ${winner} scored ${scorediff} points more than ${loser}`
    );
  } else {
    console.log("The game finished in a draw after all 5 rounds.");
  }
}
playGame();

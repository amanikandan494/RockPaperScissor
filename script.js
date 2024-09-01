let humanScore = 0;
let computerScore = 0;
//to get computer choice: function definition below
function getComputerChoice() {
  let randomNumber = Math.random() * 10;
  if (randomNumber < 3.3333) {
    return "frog";
  } else if (randomNumber < 6.6666) {
    return "snake";
  } else {
    return "slug";
  }
}

//to get human choice:  function definition below
function getHumanChoice(event) {
  return event?.target?.className;
}

//Function Definition below for playing rounds
function playRound(computerChoice, humanChoice) {
  console.log("The computer chose:", computerChoice);
  console.log("You chose:", humanChoice);
  let winnerOfRound = "";
  let animal = "";
  if (computerChoice == "frog" && humanChoice == "slug") {
    console.log("frog beats slug, computer wins this round");
    winnerOfRound = "Computer";
    animal = "frog";
    computerScore++;
  } else if (computerChoice == "frog" && humanChoice == "snake") {
    console.log("snake beats frog, you win this round");
    winnerOfRound = "You";
    animal = "snake";
    humanScore++;
  } else if (computerChoice == "frog" && humanChoice == "frog") {
    console.log("It is a draw!");
    winnerOfRound = "Draw";
  } else if (computerChoice == "snake" && humanChoice == "frog") {
    console.log("snake beats frog, computer wins this round");
    winnerOfRound = "Computer";
    animal = "snake";
    computerScore++;
  } else if (computerChoice == "snake" && humanChoice == "slug") {
    console.log("slug beats snake, you win this round");
    winnerOfRound = "You";
    animal = "slug";
    humanScore++;
  } else if (computerChoice == "snake" && humanChoice == "snake") {
    console.log("It is a draw!");
    winnerOfRound = "Draw";
  } else if (computerChoice == "slug" && humanChoice == "frog") {
    console.log("frog beats slug, you win this round");
    winnerOfRound = "You";
    animal = "frog";
    humanScore++;
  } else if (computerChoice == "slug" && humanChoice == "snake") {
    console.log("slug beats snake, computer wins this round");
    winnerOfRound = "Computer";
    animal = "slug";
    computerScore++;
  } else {
    console.log("It is a draw!");
    winnerOfRound = "Draw";
  }
  console.log("Computer:", computerScore);
  console.log("Human:", humanScore);
  return {
    winner: winnerOfRound,
    animalSign: animal,
  };
}
function getPath(choice) {
  let path, alt;
  switch (choice) {
    case "frog":
      path = "public/GamaBunta.jpg";
      alt = "The Frog";
      break;
    case "slug":
      path = "public/Katsuyu.jpg";
      alt = "The Slug";
      break;
    case "snake":
      path = "public/Manda.jpg";
      alt = "The Snake";
      break;
    default:
      alt = "";
  }
  console.log(`The Path is ${path} and alt is ${alt}`);
  return {
    path: path,
    alt: alt,
  };
}
const containerDiv = document.querySelector(".container");
const humanChoiceContainer = document.querySelector(".human-choice");
const choicesContainer = document.querySelector(".choices-container");

function winnerOfRound(roundResult, yourChoiceDiv, computerChoiceDiv) {
  let winnerDiv = document.createElement("div");
  winnerDiv.setAttribute("class", "winner-div");
  console.log("round result", roundResult);
  if (roundResult.winner !== "Draw") {
    const winnerImg = document.createElement("img");
    const winnerText = document.createElement("h3");
    const pathOfWinner = getPath(roundResult.animalSign);
    winnerImg.src = pathOfWinner.path;
    winnerImg.alt = pathOfWinner.alt;
    winnerText.textContent = `${roundResult.winner} won this round`;
    winnerDiv.appendChild(winnerText);
    winnerDiv.appendChild(winnerImg);
  } else {
    const drawText = document.createElement("h3");
    drawText.textContent = "It is a draw!";
    winnerDiv.appendChild(drawText);
  }
  if (computerScore >= 5 || humanScore >= 5) {
    const winnerOfGame = document.createElement("div");
    const winnerGameText = document.createElement("h2");
    if (computerScore >= 5) {
      console.log("Computer won the Game!!");
      winnerGameText.textContent = `Computer won the Game with ${computerScore} points!!`;
    } else {
      console.log("You won the Game!!");
      winnerGameText.textContent = `You won the Game with ${humanScore} points!!`;
    }
    winnerOfGame.appendChild(winnerGameText);
    winnerDiv.appendChild(winnerOfGame);
    containerDiv.appendChild(winnerDiv);
  } else {
    const nextRoundBtn = document.createElement("button");
    nextRoundBtn.textContent = "Next round";
    nextRoundBtn.setAttribute("class", "btn-next");
    winnerDiv.appendChild(nextRoundBtn);
    containerDiv.appendChild(winnerDiv);
    nextRoundBtn.addEventListener("click", () => {
      yourChoiceDiv.remove();
      computerChoiceDiv.remove();
      winnerDiv.remove();
      containerDiv.appendChild(humanChoiceContainer);
    });
  }
}
humanChoiceContainer.addEventListener("click", (e) => {
  const humanChoice = getHumanChoice(e);
  const computerChoice = getComputerChoice();
  const pathOfHuman = getPath(humanChoice);
  const pathOfComputer = getPath(computerChoice);
  const winnerSign = playRound(computerChoice, humanChoice);
  const yourChoiceDiv = document.createElement("div");
  const computerChoiceDiv = document.createElement("div");
  const yourChoiceImg = document.createElement("img");
  const yourChoiceText = document.createElement("h3");
  yourChoiceText.textContent = "You Chose:";
  yourChoiceImg.src = pathOfHuman.path;
  yourChoiceImg.alt = pathOfHuman.alt;
  const computerChoiceImg = document.createElement("img");
  const computerChoiceText = document.createElement("h3");
  computerChoiceText.textContent = "Computer Chose:";
  computerChoiceImg.src = pathOfComputer.path;
  computerChoiceImg.alt = pathOfComputer.alt;
  humanChoiceContainer.remove();
  yourChoiceDiv.appendChild(yourChoiceText);
  yourChoiceDiv.appendChild(yourChoiceImg);
  computerChoiceDiv.appendChild(computerChoiceText);
  computerChoiceDiv.appendChild(computerChoiceImg);
  choicesContainer.appendChild(yourChoiceDiv);
  choicesContainer.appendChild(computerChoiceDiv);
  winnerOfRound(winnerSign, yourChoiceDiv, computerChoiceDiv);
});

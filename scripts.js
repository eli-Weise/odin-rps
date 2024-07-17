function getComputerChoice(){
  let intChoice = Math.floor(Math.random() * 3);
  let choice = "";

  switch (intChoice) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }

  return choice;
}

function getHumanChoice(){
  let input;

  while (true){
    input = (prompt("Choose your hand (rock, paper, scissors)")).toLowerCase();

    if (input == "rock" ||  input == "paper" || input == "scissors"){
      break;
    } else {
      console.log("try again");
    }
  }

  return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  let endStr;

  if (humanChoice == "rock"){
    if (computerChoice == "rock"){
      endStr = "rock v rock, tie";
    } else if (computerChoice == "paper"){
      endStr = "rock v paper, lose";
      computerScore++;
    } else {
      endStr = "rock v scissors, win";
      humanScore++;
    }
  } else if (humanChoice == "paper"){
    if (computerChoice == "rock"){
      endStr = "paper v rock, win";
      humanScore++;
    } else if (computerChoice == "paper"){
      endStr = "paper v paper, tie";
    } else {
      endStr = "paper v scissors, lose";
      computerScore++;
    }
  } else {
    if (computerChoice == "rock"){
      endStr = "scissors v rock, lose";
      computerScore++;
    } else if (computerChoice == "paper"){
      endStr = "scissors v paper, win";
      humanScore++;
    } else {
      endStr = "scissors v scissors, tie";
    }
  }

  return endStr;
}

const play = document.querySelector("#play");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

play.addEventListener("click", (event) => {
  

  if (humanScore < 5 && computerScore < 5){
    const target = event.target;

    switch(target.id) {
      case "rock":
        result.textContent = playRound("rock", getComputerChoice());
        break;
      case "paper":
        result.textContent = playRound("paper", getComputerChoice());
        break;
      case "scissors":
        result.textContent = playRound("scissors", getComputerChoice());
        break;
    }
    score.textContent = humanScore + " - " + computerScore;

  }
  if (humanScore == 5){
    score.textContent = "You win! Final score is: " + humanScore + " - " + computerScore;
    play.removeEventListener("click")
  } else if (computerScore == 5){
    score.textContent = "You lose! Final score is: " + humanScore + " - " + computerScore;
}
});

// function playGame(){
//   for (let i = 0; i < 5; i++){
//     console.log(playRound(getHumanChoice(), getComputerChoice()));
//     console.log("Human score: " + humanScore + ", Computer score: " + computerScore);
//   }

//   if (humanScore > computerScore){
//     console.log("You Won!");
//   } else if (humanScore < computerScore) {
//     console.log("You Lost :(");
//   } else {
//     console.log("Tie");
//   }
// }


// playGame();
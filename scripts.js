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

function playGame(){
  for (let i = 0; i < 5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log("Human score: " + humanScore + ", Computer score: " + computerScore);
  }

  if (humanScore > computerScore){
    console.log("You Won!");
  } else {
    console.log("You Lost :(");
  }
}


playGame();
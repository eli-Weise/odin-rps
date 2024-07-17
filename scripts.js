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

//initialize scores
let humanScore = 0;
let computerScore = 0;

//game logic and increments scores
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

//select html elements
const play = document.querySelector("#play");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

//event listener for the human game choices
//utilizes event delegation
play.addEventListener("click", (event) => {
  
  //game only availabe while scores are low enough
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
  //end of game message
  if (humanScore == 5){
    score.textContent = "You win! Final score is: " + humanScore + " - " + computerScore;
  } else if (computerScore == 5){
    score.textContent = "You lose! Final score is: " + humanScore + " - " + computerScore;
}
});

//"reset" button selector and logic
const reset = document.querySelector("#reset");

reset.addEventListener("click", (event) => {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "";
  score.textContent = "0 - 0";
})
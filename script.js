// Variable to store available choices
const CHOICES = ["Rock", "Paper", "Scissors"];

// Other DOM elements variables
const compChoiceRow = document.querySelector("#comp-choice-row");
const compChoiceDiv = document.querySelector("#comp-choice");
const choicesBtns = document.querySelectorAll(".player-choice");
const resultRow = document.querySelector("#result-row");
const resultDiv = document.querySelector("#result");

// Create click event listener for the whole container
document.querySelector(".container").addEventListener("click", (e) => {
  // If the click target is one of the choices and it is not disabled, start the game
  if (e.target.classList.contains("player-choice") && !e.target.disabled) {
    // Get user choice (0-2)
    const userChoice = parseInt(e.target.dataset.choice);

    // Get random computer choice (0-2)
    const compChoice = Math.floor(Math.random() * 3);

    // Display computer choice
    compChoiceRow.style.display = "block";
    compChoiceDiv.innerHTML = CHOICES[compChoice];

    // Disable the choices
    choicesBtns.forEach((btn) => (btn.disabled = true));

    // Check who won
    const result = checkWhoWon(userChoice, compChoice);

    // Display the results
    resultRow.style.display = "block";
    resultDiv.innerHTML = result;
  }

  // If the click target is play again button, restart the game
  if (e.target.id === "play-again") {
    // Hide the results and computer choice
    resultRow.style.display = "none";
    compChoiceRow.style.display = "none";

    // Enable the choices
    choicesBtns.forEach((btn) => (btn.disabled = false));
  }
});

const checkWhoWon = (userChoice, compChoice) => {
  // Draw scenario
  if (userChoice === compChoice) {
    return "It's a draw!";
  }

  // Check if computer wins
  if (
    (userChoice === 0 && compChoice === 1) ||
    (userChoice === 1 && compChoice === 2) ||
    (userChoice === 2 && compChoice === 0)
  ) {
    return "Computer wins!";
  } else {
    return "You win!";
  }
};

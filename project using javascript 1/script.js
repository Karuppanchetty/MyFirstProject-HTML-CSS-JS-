let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let HighestScore = 0;

const displayMessage = function (message) {
  document.querySelector(".guess").textContent = message;
};

document.querySelector(".search").addEventListener("click", function () {
  const userValue = Number(document.querySelector(".userinput").value);
  console.log(userValue, typeof userValue);

  if (!userValue) {
    displayMessage("Please enter a valid number!!");
    //   else if (userValue > secretNumber) {
    //   displayMessage("Too High!");
    //   if (score > 1) {
    //     score--;
    //     document.querySelector(".score").textContent = `Score: ${score}`;
    //   } else {
    //     displayMessage("GameOver!!");
    //   }
    // } else if (userValue < secretNumber) {
    //   displayMessage("Too Low!");
    //   if (score > 1) {
    //     score--;
    //     document.querySelector(".score").textContent = `Score: ${score}`;
    //   } else {
    //     displayMessage("GameOver!!");
    //   }
  } else if (userValue === secretNumber) {
    displayMessage("You won.. Guessed the number correctly!!");
    document.querySelector(".ifcorrectnum").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(207, 252, 130)";
    document.querySelector(".ifcorrectnum").style.width = "30rem";
    document.querySelector(".ifcorrectnum").style.backgroundColor = "#548b57";
    if (score > HighestScore) {
      HighestScore = score;
      document.querySelector(
        ".highscore"
      ).textContent = `HighScore: ${HighestScore}`;
    }
  } else if (userValue !== secretNumber) {
    if (score > 1) {
      displayMessage(userValue > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = `Score: ${score}`;
    } else {
      displayMessage("GameOver!!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".Reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Guess the number");
  document.querySelector(".score").textContent = `Score: ${score}`;
  document.querySelector(".userinput").value = "";
  document.querySelector(".ifcorrectnum").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#b7b7b7";
  document.querySelector(".ifcorrectnum").style.width = "10rem";
  document.querySelector(".ifcorrectnum").style.backgroundColor = "white";
});

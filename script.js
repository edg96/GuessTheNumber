"use strict";

function getSecretNumber() {
  let secretNumber;
  return (secretNumber = Math.trunc(Math.random() * 20 + 1));
}

function setMessage(message) {
  document.querySelector(".message").textContent = message;
}

let secretNumber = getSecretNumber();
let score = 20;
let highScore = 0;
let winner = false;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0 && !winner) {
    if (!guess) {
      setMessage("Not a number");
    } else {
      if (guess != secretNumber) {
        if (guess > secretNumber) {
          setMessage("Too high");
        } else if (guess < secretNumber) {
          setMessage("Too low");
        }
        score--;
        document.querySelector(".score").textContent = score;

        if (score === 0) {
          setMessage("You lost, try again!");
          return;
        }
      } else if (guess === secretNumber) {
        setMessage("You guessed the number!");

        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore) {
          highScore = score;
          document.querySelector(".highest-score").textContent = score;
        }

        winner = true;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = getSecretNumber();
  winner = false;
  console.log(secretNumber);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});

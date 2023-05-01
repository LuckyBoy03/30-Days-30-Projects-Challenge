// Store random number generated
let secretNumber = Math.floor(Math.random() * 100) + 1;

let guessInput = document.getElementById("guess");

let message = document.getElementById("message");

// checkGuess function is called when the user clicks the guess button and compare the users guess to the secretNumber
function checkGuess() {
    let guess = parseInt(guessInput.value);

    if (guess === secretNumber) {
        message.innerHTML = "Congratulations! You gussed the secret number";
        message.style.color = "green";
    }
    else if (guess < secretNumber) {
        message.innerHTML = "Your guess is too low, try again";
        message.style.color = "red";
    }
    else if (guess > secretNumber) {
        message.innerHTML = "Your guess is too high, try again";
        message.style.color = "red";

    }
}

// resetGame function call when user clicks the reset button
function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    message.innerHTML = "";
}
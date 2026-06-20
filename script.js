
const guessTheNumber = document.getElementById('guessTheNumber');
const guessHelp = document.getElementById('guessHelp');
const guessBtn = document.getElementById('guessBtn');

let number = Math.floor(Math.random() * 10) + 1;
let chances = 3;
let gameOver = false;



function Guess() {
    let userNumber = Number(guessTheNumber.value);

    if (!userNumber) {
        guessHelp.innerHTML = `
            <div class="form-text text-warning fw-bold fs-6">
                Please enter a valid number.
            </div>`;
        return;
    }

    if (gameOver) {
        guessHelp.innerHTML = `
            <div class="form-text text-warning fw-bold fs-6">
                Game is over. Press Restart to play again.
            </div>`;
        return;
    }

    chances--;

    if (userNumber === number) {
        guessHelp.innerHTML = `
            <div class="form-text text-success fw-bold fs-6">
                Congratulations! 🎉 You guessed it right!
            </div>`;
        gameOver = true;
        guessBtn.disabled = true;
        return;
    }

    if (chances === 0) {
        guessHelp.innerHTML = `
            <div class="form-text text-danger fw-bold fs-6">
                Game Over! The number was ${number} 💔
            </div>`;
        gameOver = true;
        guessBtn.disabled = true;
        return;
    }

    if (number > userNumber) {
        guessHelp.innerHTML = `
            <div class="form-text text-danger fw-bold fs-6">
                Higher ⬆️ — ${chances} chances left.
            </div>`;
            guessTheNumber.value = "";
    } else {
        guessHelp.innerHTML = `
            <div class="form-text text-danger fw-bold fs-6">
                Lower ⬇️ — ${chances} chances left.
            </div>`;
            guessTheNumber.value = "";
    }
}

function Restart() {
    number = Math.floor(Math.random() * 10) + 1;

    chances = 3;

    gameOver = false;

    guessHelp.innerHTML =
        `Try to guess the secret number.`;
    
    guessBtn.disabled = false

    guessTheNumber.value = "";
}
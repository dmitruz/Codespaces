 let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

    // Function to play the higher/lower game
    function submitGuess() {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        const resultMessage = document.getElementById('resultMessage');

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultMessage.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        if (userGuess < randomNumber) {
            resultMessage.textContent = `You answered ${userGuess}. The correct answer is higher.`;
        } else if (userGuess > randomNumber) {
            resultMessage.textContent = `You answered ${userGuess}. The correct answer is lower.`;
        } else {
            resultMessage.textContent = `You answered ${userGuess}. This is the correct answer!`;
        }
    }
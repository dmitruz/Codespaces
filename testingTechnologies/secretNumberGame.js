
// Function to play the secret number game
function secretNumberGame() {
    // Generate a random number between 1 and 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;

    // Function to take a guess and compare it with the secret number
    function guessNumber(userGuess) {
        if (userGuess < secretNumber) {
            return `You answered ${userGuess}. The correct answer is higher.`;
        } else if (userGuess > secretNumber) {
            return `You answered ${userGuess}. The correct answer is lower.`;
        } else {
            return `You answered ${userGuess}. This is the correct answer!`;
        }
    }

    return guessNumber;
}
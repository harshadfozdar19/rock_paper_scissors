function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let result = '';
  
    if (userChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
      result = `You Lose! ${computerChoice} beats ${userChoice}`;
    }
  
    document.getElementById('result').innerText = result;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
  }
  
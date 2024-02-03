'use strict';
let secertNumber = genrateRandomNumber(); // math.trunc cut of the decimal part *20 +1 for numbers between 1 to 20
let score = 20;
let highScore = 0;
// function to genrate random numbers
function genrateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
// function to display the messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if the num is null
  if (!guess) {
    displayMessage('No Number 🚫');
  }
  // When player win
  else if (guess === secertNumber) {
    displayMessage('Correct Number 👌');
    document.querySelector('.number').textContent = secertNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when it is wrong
  } else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? 'Too High 😑' : 'Too Low 😐');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button

document.querySelector('.again').addEventListener('click', function () {
  secertNumber = genrateRandomNumber();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

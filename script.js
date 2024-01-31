'use strict';

let secertNumber = genrateRandomNumber(); // math.trunc cut of the decimal part *20 +1 for numbers between 1 to 20
let score = 20;
function genrateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if the num is null
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 💢';
  }
  // When player wina
  else if (guess === secertNumber) {
    document.querySelector('.message').textContent = 'Correct Number👌';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secertNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When player is to high
  else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 😑';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when palyer is to low
  else if (guess < secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 😐';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Again button

document.querySelector('.again').addEventListener('click', function () {
  secertNumber - genrateRandomNumber();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

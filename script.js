let score1 = 0;
let score2 = 0;
const scoreElement1 = document.getElementById('score1');
const scoreElement2 = document.getElementById('score2');
const roundList = document.getElementById('round-list');
const scores = [];

function incrementScore(team) {
  if (team === 1) {
    score1++;
    scoreElement1.textContent = score1;
  } else if (team === 2) {
    score2++;
    scoreElement2.textContent = score2;
  }
}

function decrementScore(team) {
  if (team === 1 && score1 > 0) {
    score1--;
    scoreElement1.textContent = score1;
  } else if (team === 2 && score2 > 0) {
    score2--;
    scoreElement2.textContent = score2;
  }
}

function addRound() {
  const roundItem = document.createElement('li');
  const roundNumber = roundList.childElementCount + 1;
  scores.push([score1, score2]);
  roundItem.textContent = 'Раунд ' + roundNumber + ': ' + scores[roundNumber - 1][0] + '-' + scores[roundNumber - 1][1];
  roundList.appendChild(roundItem);
}

function removeRound() {
  if (roundList.childElementCount > 0) {
    scores.pop();
    roundList.removeChild(roundList.lastElementChild);
  }
}

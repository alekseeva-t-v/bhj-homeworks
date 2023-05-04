const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');
let deadCount = 0;
let lostCount = 0;

function updateСounter() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
}

getHole = (index) => document.getElementById(`hole${index}`);
for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', () => {
    if (getHole(i).classList.contains('hole_has-mole')) {
      deadCount = deadCount + 1;
      dead.textContent = deadCount;
    } else {
      lostCount = lostCount + 1;
      lost.textContent = lostCount;
    }

    if (deadCount === 10) {
      setTimeout(() => {
        alert('Победа!');
        updateСounter();
      }, 0);
    }

    if (lostCount === 5) {
      setTimeout(() => {
        alert('Поражение!');
        updateСounter();
      }, 0);
    }
  });
}


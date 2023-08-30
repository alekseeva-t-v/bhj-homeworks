const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');
const button = document.getElementById('button');

let playing = true;
let activeHole = 1;
let deadCount = 0;
let lostCount = 0;

/**
 * Останавливает игру.
 *
 */
function stopGame() {
  playing = false;
}

/**
 * Запускает игру заново.
 *
 */
function startGame() {
  playing = true;
  next();
}

/**
 * Деактивирует активную ячейку, добавлением класса.
 *
 */
function deactivateHole(index) {
  getHole(index).className = 'hole';
}

/**
 * Активирует активную ячейку, добавлением класса.
 *
 */
function activateHole(index) {
  getHole(index).className = 'hole hole_has-mole';
}

/**
 * Переводит игру к следующему ходу.
 *
 */
function next() {
  setTimeout(() => {
    if (!playing) {
      return;
    }

    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 9);
    activateHole(activeHole);
    next();
  }, 800);
}

/**
 * Находит ячейку по индексу.
 *
 * @param {number} index индекс ячейки.
 * @return {object} Элемент конкретной ячейки из разметки.
 */
function getHole(index) {
  return document.getElementById(`hole${index}`);
}

/**
 * Обнуляет счетчики, обновляет разметку
 *
 */
function updateСounter() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
}

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
        stopGame();
      }, 0);
    }

    if (lostCount === 5) {
      setTimeout(() => {
        alert('Поражение!');
        updateСounter();
        stopGame();
      }, 0);
    }
  });
}

document.addEventListener('DOMContentLoaded', next);

button.addEventListener('click', startGame);
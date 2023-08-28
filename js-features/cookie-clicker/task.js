const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie');
let width = cookie.width;

let count = Number(clickerCounter.textContent);
let clickTime = 0;
let lastClickTime = 0;

/**
 * Определяет скорость клика по объекту: (1) Находит разницу между текущим временем и временем с момента клика, преобразует его в секунды; (2) Определяет скорость по формуле, округляет до целого числа и выводит значение на экран
 *
 */
function findSpeed() {
  clickTime = new Date();
  if (lastClickTime) {
    let diff = (clickTime.getTime() - lastClickTime.getTime()) / 1000;
    clickerSpeed.textContent = Number((1 / diff).toFixed(2));
  }
}

/**
 * Изменяет и отображает колисечтво кликов по объекту: (1) Находит первоначальное значение счетчика; (2) Увеличивает счетчик на единицу и выводит значение на экран
 *
 */
function findClickCount() {
  lastClickTime = clickTime;
  count = count + 1;
  clickerCounter.textContent = count;
}

/**
 * Изменяет размер объекта: (1) Проверяет изначальный размер объекта и, в зависимости от исходного размера уменьшает или увеличивает его; (2) Присваивает ширину объекта изображению
 *
 */
function changeSize() {
  width = width === '220' ? '200' : '220';
  cookie.width = width;
}

cookie.addEventListener('click', () => {
  findClickCount();
  findSpeed();
  changeSize();
});

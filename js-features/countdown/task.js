const timer = document.getElementById('timer');
let remainingTime = timer.textContent;

/**
 * Преобразует оставшееся время в необходимый формат. Добавляет полученное значение в текстовое содержимое элемента
 *
 */
function showConvertedTime() {
  const hoursLeft = Math.floor(remainingTime / 60 / 60);
  const hoursLeftText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  const minutesLeft = Math.floor(remainingTime / 60) % 60;
  const minutesLeftText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  const secondsLeft = remainingTime % 60;
  const secondsLeftText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
  timer.textContent = `${hoursLeftText}:${minutesLeftText}:${secondsLeftText}`;
}

/**
 * Уменьшает заданное время на одну секунду, преобразует его в необходимый формат с помощью функции showConvertedTime, если время не закончилось. Выводит сообщение о победе и запускает загрузку файла, если время закончилось
 *
 */
function createCountdown () {
  if (remainingTime === 0) {
    alert('Вы победили в конкурсе!');
    location = './sertificate.ai';
    clearInterval(timerId);
  } else {
    remainingTime = remainingTime - 1;
    showConvertedTime();
  }
}

showConvertedTime();

let timerId = setInterval(createCountdown, 1000);
